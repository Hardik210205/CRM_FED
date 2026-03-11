import { Link } from "react-router-dom";
import { Target, Users, Calendar, TrendingUp, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import AppLayout from "@/components/crm/AppLayout";
import DashboardCard from "@/components/crm/DashboardCard";
import CalendarView from "@/components/crm/CalendarView";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { mockMeetings } from "@/data/mockData";

const EmployeeDashboard = () => {
  return (
    <AppLayout role="employee">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Welcome back, Rohan</h1>
            <p className="text-sm text-muted-foreground">Here's a snapshot of your sales pipeline and schedule for today.</p>
          </div>
          <Button size="sm">+ Quick Add Lead</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <DashboardCard title="My Leads" value={42} icon={Target} subtitle="+12% from last week" />
          <DashboardCard title="My Clients" value={156} icon={Users} subtitle="+4 new this month" />
          <DashboardCard title="Meetings Today" value={8} icon={Calendar} subtitle="Next: 2:00 PM" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Meetings */}
          <div className="bg-card border border-border rounded-lg">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-semibold text-foreground text-sm">Upcoming Meetings</h2>
              <Link to="/calendar" className="text-xs text-primary hover:underline">View All</Link>
            </div>
            <div className="divide-y divide-border">
              {mockMeetings.slice(0, 3).map((m) => (
                <div key={m.id} className="flex items-center gap-4 p-4">
                  <div className="bg-muted rounded-lg px-3 py-2 text-center min-w-[48px]">
                    <p className="text-[10px] text-muted-foreground uppercase">OCT</p>
                    <p className="text-lg font-bold text-foreground">24</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{m.topic} - {m.person}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {m.time}
                    </p>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-primary/10 text-xs font-medium text-primary flex items-center justify-center">{m.initials}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar + Priorities */}
          <div className="space-y-4">
            <CalendarView />
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="text-sm font-semibold text-destructive mb-3">Today's Priority</h3>
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
    </AppLayout>
  );
};

export default EmployeeDashboard;
