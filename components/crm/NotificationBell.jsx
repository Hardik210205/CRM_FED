"use client";

import { useEffect, useMemo, useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "@/api/client";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchNotifications = async () => {
      try {
        const data = await api.get("/dashboard/activities");
        if (mounted) setActivities(data.activities || []);
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
      }
    };

    fetchNotifications();
    return () => {
      mounted = false;
    };
  }, []);

  const notifications = useMemo(() => {
    return activities.slice(0, 10).map((a) => ({
      id: a.id,
      title: a.entity_type ? `${String(a.entity_type).toUpperCase()} Update` : "Activity",
      message: a.description,
      time: a.created_at ? new Date(a.created_at).toLocaleString() : "",
      read: false,
    }));
  }, [activities]);

  const unread = notifications.length;

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="relative text-muted-foreground" onClick={() => setOpen(!open)}>
        <Bell className="h-5 w-5" />
        {unread > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center font-medium">
            {unread}
          </span>
        )}
      </Button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-border">
            <h4 className="font-semibold text-sm text-foreground">Notifications</h4>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {notifications.map((n) => (
              <div key={n.id} className={`p-3 border-b border-border last:border-0 ${!n.read ? "bg-primary/5" : ""}`}>
                <p className="text-sm font-medium text-foreground">{n.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{n.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
