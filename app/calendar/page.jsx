"use client";

import { useEffect, useState } from "react";
import AppLayout from "@/components/crm/AppLayout";
import CalendarView from "@/components/crm/CalendarView";
import { Badge } from "@/components/ui/badge";
import { api } from "@/api/client";

export default function CalendarPage() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchMeetings = async () => {
      try {
        const data = await api.get("/meetings");
        if (mounted) setMeetings(data.meetings || []);
      } catch (err) {
        console.error("Failed to fetch meetings:", err);
      }
    };

    fetchMeetings();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AppLayout role="employee">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Calendar</h1>
          <p className="text-sm text-muted-foreground">View your upcoming meetings and scheduled interactions.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CalendarView />
          </div>
          <div className="bg-card border border-border rounded-lg">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold text-foreground text-sm">Today&apos;s Schedule</h2>
            </div>
            <div className="divide-y divide-border">
              {meetings.map((m) => (
                <div key={m.id} className="p-4">
                  <p className="text-sm font-medium text-foreground">{m.topic || "Meeting"}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{m.time} • {m.person || "N/A"}</p>
                  <Badge variant="outline" className={`mt-1.5 text-xs ${m.status === "Confirmed" ? "bg-success/10 text-success border-success/20" : m.status === "Pending" ? "bg-warning/10 text-warning border-warning/20" : "bg-muted text-muted-foreground"}`}>
                    {m.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
