"use client";

import { useEffect, useState } from "react";
import LeadsTable from "@/components/crm/LeadsTable";
import { api } from "@/api/client";

export default function EmployeeLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const data = await api.get("/leads");
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
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Leads</h1>
        <p className="text-sm text-muted-foreground">Leads assigned to you across all portals.</p>
      </div>
      {loading ? <p className="text-sm text-muted-foreground">Loading leads...</p> : <LeadsTable leads={leads} showActions={false} />}
    </div>
  );
}
