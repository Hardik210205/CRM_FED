import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/crm/AppLayout";
import EmployeeTable from "@/components/crm/EmployeeTable";

const AdminEmployees = () => {
  return (
    <AppLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Employee Management</h1>
            <p className="text-sm text-muted-foreground">View and manage all team members.</p>
          </div>
          <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add Employee</Button>
        </div>
        <EmployeeTable />
      </div>
    </AppLayout>
  );
};

export default AdminEmployees;
