import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/crm/AppLayout";
import ClientsTable from "@/components/crm/ClientsTable";

const AdminClients = () => {
  return (
    <AppLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Client Management</h1>
            <p className="text-sm text-muted-foreground">Manage client accounts, contracts, and portal assignments.</p>
          </div>
          <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add Client</Button>
        </div>
        <ClientsTable />
      </div>
    </AppLayout>
  );
};

export default AdminClients;
