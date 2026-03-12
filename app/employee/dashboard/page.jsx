"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Target, Users, Calendar, Clock } from "lucide-react";
import DashboardCard from "@/components/crm/DashboardCard";
import CalendarView from "@/components/crm/CalendarView";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { api, getCurrentUser } from "@/api/client";

export default function EmployeeDashboard() {
  const [stats, setStats] = useState({ totalLeads: 0, totalClients: 0 });
  const [meetings, setMeetings] = useState([]);
  const user = getCurrentUser();

  useEffect(() => {
    let mounted = true;
    const fetchDashboard = async () => {
      try {
        const [statsRes, meetingsRes] = await Promise.all([
          api.get("/dashboard/stats"),
          api.get("/dashboard/meetings-today"),
        ]);
        if (!mounted) return;
        setStats(statsRes || {});
        setMeetings(meetingsRes.meetings || []);
      } catch (err) {
        console.error("Failed to fetch employee dashboard:", err);
      }
    };

    fetchDashboard();
    return () => {
      mounted = false;
    };
  }, []);

  const nextMeetingTime = useMemo(() => meetings[0]?.time || "-", [meetings]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, {user?.fullName?.split(" ")[0] || "Employee"}</h1>
          <p className="text-sm text-muted-foreground">Here&apos;s a snapshot of your sales pipeline and schedule for today.</p>
        </div>
        <Button size="sm">+ Quick Add Lead</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <DashboardCard title="My Leads" value={stats.totalLeads || 0} icon={Target} />
        <DashboardCard title="My Clients" value={stats.totalClients || 0} icon={Users} />
        <DashboardCard title="Meetings Today" value={meetings.length} icon={Calendar} subtitle={`Next: ${nextMeetingTime}`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-semibold text-foreground text-sm">Upcoming Meetings</h2>
            <Link href="/calendar" className="text-xs text-primary hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-border">
            {meetings.slice(0, 3).map((m) => (
              <div key={m.id} className="flex items-center gap-4 p-4">
                <div className="bg-muted rounded-lg px-3 py-2 text-center min-w-[48px]">
                  <p className="text-[10px] text-muted-foreground uppercase">OCT</p>
                  <p className="text-lg font-bold text-foreground">24</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{m.topic || "Meeting"} - {m.person || "N/A"}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {m.time}
                  </p>
                </div>
                <span className="w-7 h-7 rounded-full bg-primary/10 text-xs font-medium text-primary flex items-center justify-center">{m.initials || "NA"}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <CalendarView />
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-semibold text-destructive mb-3">Today&apos;s Priority</h3>
            <div className="space-y-2">
              {[
                { text: "Call back John Doe", done: false, strike: true },
                { text: "Review proposal for TechCorp", done: false, strike: false },
                { text: "Send follow-up emails (15)", done: true, strike: false },
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Checkbox checked={task.done} />
                  <span className={`text-sm ${task.strike ? "line-through text-muted-foreground" : task.done ? "text-muted-foreground" : "text-foreground"}`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
