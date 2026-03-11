import AppLayout from "@/components/crm/AppLayout";
import ClientsTable from "@/components/crm/ClientsTable";

const EmployeeClients = () => {
  return (
    <AppLayout role="employee">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Clients</h1>
          <p className="text-sm text-muted-foreground">Clients you are managing.</p>
        </div>
        <ClientsTable />
      </div>
    </AppLayout>
  );
};

export default EmployeeClients;
