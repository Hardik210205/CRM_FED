"use client";

import { useEffect, useMemo, useState } from "react";
import { Users, Target, Briefcase, TrendingUp, Clock, CheckCircle, AlertCircle, Info } from "lucide-react";
import DashboardCard from "@/components/crm/DashboardCard";
import { Badge } from "@/components/ui/badge";
import { api } from "@/api/client";

const statusColors = {
  Confirmed: "bg-success/10 text-success border-success/20",
  Pending: "bg-warning/10 text-warning border-warning/20",
  Draft: "bg-muted text-muted-foreground border-border",
};

const activityIcons = {
  success: CheckCircle,
  info: Info,
  warning: AlertCircle,
};

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalEmployees: 0, totalLeads: 0, totalClients: 0, conversionRate: "0%" });
  const [meetings, setMeetings] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchDashboard = async () => {
      try {
        const [statsRes, meetingsRes, activitiesRes] = await Promise.all([
          api.get("/dashboard/stats"),
          api.get("/dashboard/meetings-today"),
          api.get("/dashboard/activities"),
        ]);
        if (!mounted) return;
        setStats(statsRes || {});
        setMeetings(meetingsRes.meetings || []);
        setActivities(activitiesRes.activities || []);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      }
    };

    fetchDashboard();
    return () => {
      mounted = false;
    };
  }, []);

  const activityItems = useMemo(() => {
    return activities.map((a) => ({
      id: a.id,
      type: ["success", "warning", "info"].includes(a.type) ? a.type : "info",
      text: a.description,
      time: a.created_at ? new Date(a.created_at).toLocaleString() : "",
    }));
  }, [activities]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-sm text-muted-foreground">Welcome back, here&apos;s what&apos;s happening today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard title="Total Employees" value={stats.totalEmployees || 0} icon={Users} />
        <DashboardCard title="Total Leads" value={stats.totalLeads || 0} icon={Target} />
        <DashboardCard title="Total Clients" value={stats.totalClients || 0} icon={Briefcase} />
        <DashboardCard title="Conversion Rate" value={stats.conversionRate || "0%"} icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-semibold text-foreground text-sm">Meetings Today</h2>
            <a href="/calendar" className="text-xs text-primary hover:underline">View Calendar</a>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">Time</th>
                <th className="text-left px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">Meeting With</th>
                <th className="text-left px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">Topic</th>
                <th className="text-left px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((m) => (
                <tr key={m.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-sm text-muted-foreground">{m.time}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-primary/10 text-xs font-medium text-primary flex items-center justify-center">{m.initials}</span>
                      <span className="text-sm font-medium text-foreground">{m.person}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{m.topic}</td>
                  <td className="px-4 py-3">
                    <Badge variant="outline" className={`text-xs ${statusColors[m.status] || ""}`}>{m.status || "Draft"}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h2 className="font-semibold text-foreground text-sm mb-4">Portal Distribution</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-36 h-36">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="43.8 97.4" strokeLinecap="round" />
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--info))" strokeWidth="3" strokeDasharray="29.2 97.4" strokeDashoffset="-43.8" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-foreground">{stats.totalClients || 0}</span>
                <span className="text-[10px] text-muted-foreground">Total Clients</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { label: "B2B Portal", value: "45%", color: "bg-primary" },
              { label: "Direct Sales", value: "30%", color: "bg-info" },
              { label: "Affiliates", value: "25%", color: "bg-muted-foreground/30" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-muted-foreground">{item.label}</span>
                </div>
                <span className="font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <h2 className="font-semibold text-foreground text-sm">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            {activityItems.map((a) => {
              const Icon = activityIcons[a.type] || Info;
              return (
                <div key={a.id} className="flex items-start gap-3">
                  <Icon className={`h-4 w-4 mt-0.5 ${a.type === "success" ? "text-success" : a.type === "warning" ? "text-destructive" : "text-muted-foreground"}`} />
                  <div>
                    <p className="text-sm text-foreground">{a.text}</p>
                    <p className="text-xs text-muted-foreground">{a.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-foreground rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-background mb-2">Platform Update v2.4</h3>
            <p className="text-sm text-background/70">We&apos;ve added new visualization tools for client tracking and real-time meeting notifications. Explore the new tools in your settings.</p>
          </div>
          <button className="mt-4 self-end text-xs font-medium text-background border border-background/20 rounded-md px-3 py-1.5 hover:bg-background/10 transition-colors">
            What&apos;s New?
          </button>
        </div>
      </div>
    </div>
  );
}
