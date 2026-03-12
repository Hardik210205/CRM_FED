"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, Filter, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardCard from "@/components/crm/DashboardCard";
import LeadsTable from "@/components/crm/LeadsTable";
import { Target, Zap, TrendingUp, Bell } from "lucide-react";
import { api } from "@/api/client";

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (source !== "all") params.set("source", source);
        const query = params.toString();
        const data = await api.get(`/leads${query ? `?${query}` : ""}`);
        if (mounted) setLeads(data.leads || []);
      } catch (err) {
        console.error("Failed to fetch leads:", err);
        if (mounted) setLeads([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchLeads();
    return () => {
      mounted = false;
    };
  }, [search, source]);

  const metrics = useMemo(() => {
    const total = leads.length;
    const newLeads = leads.filter((l) => l.status === "New Lead").length;
    const qualified = leads.filter((l) => l.status === "Qualified").length;
    const pending = leads.filter((l) => l.status === "Contacted").length;
    const conversion = total ? `${((qualified / total) * 100).toFixed(1)}%` : "0%";
    return { total, newLeads, conversion, pending };
  }, [leads]);

  return (
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
        <DashboardCard title="Total Leads" value={metrics.total} icon={Target} />
        <DashboardCard title="New Leads" value={metrics.newLeads} icon={Zap} />
        <DashboardCard title="Conversion Rate" value={metrics.conversion} icon={TrendingUp} />
        <DashboardCard title="Pending Follow-up" value={metrics.pending} icon={Bell} />
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search leads by name, email..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select value={source} onValueChange={setSource}>
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

      {loading ? <p className="text-sm text-muted-foreground">Loading leads...</p> : <LeadsTable leads={leads} />}
    </div>
  );
}
