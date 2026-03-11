import AppLayout from "@/components/crm/AppLayout";
import CalendarView from "@/components/crm/CalendarView";
import { Badge } from "@/components/ui/badge";
import { mockMeetings } from "@/data/mockData";

const CalendarPage = () => {
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
              <h2 className="font-semibold text-foreground text-sm">Today's Schedule</h2>
            </div>
            <div className="divide-y divide-border">
              {mockMeetings.map((m) => (
                <div key={m.id} className="p-4">
                  <p className="text-sm font-medium text-foreground">{m.topic}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{m.time} • {m.person}</p>
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
};

export default CalendarPage;
