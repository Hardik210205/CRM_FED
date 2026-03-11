import AppLayout from "@/components/crm/AppLayout";
import LeadsTable from "@/components/crm/LeadsTable";
import { mockLeads } from "@/data/mockData";

const EmployeeLeads = () => {
  const myLeads = mockLeads.filter((l) => l.assignedTo === "Rohan Gupta");
  return (
    <AppLayout role="employee">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Leads</h1>
          <p className="text-sm text-muted-foreground">Leads assigned to you across all portals.</p>
        </div>
        <LeadsTable leads={myLeads.length ? myLeads : mockLeads} />
      </div>
    </AppLayout>
  );
};

export default EmployeeLeads;
