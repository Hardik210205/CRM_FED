import { Search, Filter, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppLayout from "@/components/crm/AppLayout";
import LeadsTable from "@/components/crm/LeadsTable";
import DashboardCard from "@/components/crm/DashboardCard";
import { Target, Zap, TrendingUp, Bell } from "lucide-react";

const AdminLeads = () => {
  return (
    <AppLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Lead Management</h1>
            <p className="text-sm text-muted-foreground">Manage and track your incoming leads from all portals.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-1" /> Export</Button>
            <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add New Lead</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard title="Total Leads" value="1,284" icon={Target} change="+5.2%" />
          <DashboardCard title="New Today" value={24} icon={Zap} change="+12%" />
          <DashboardCard title="Conversion Rate" value="12.5%" icon={TrendingUp} change="+0.4%" />
          <DashboardCard title="Pending Follow-up" value={45} icon={Bell} change="-2%" changeType="negative" />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search leads by name, email..." className="pl-9" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Portal: All</SelectItem>
              <SelectItem value="b2b">B2B Portal</SelectItem>
              <SelectItem value="direct">Direct</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">Date: All Time</Button>
          <Button variant="ghost" size="icon"><Filter className="h-4 w-4" /></Button>
        </div>

        <LeadsTable />
      </div>
    </AppLayout>
  );
};

export default AdminLeads;
