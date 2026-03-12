"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClientsTable from "@/components/crm/ClientsTable";
import { api } from "@/api/client";

export default function AdminClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchClients = async () => {
      try {
        setLoading(true);
        const data = await api.get("/clients");
        if (mounted) setClients(data.clients || []);
      } catch (err) {
        console.error("Failed to fetch clients:", err);
        if (mounted) setClients([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchClients();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Client Management</h1>
          <p className="text-sm text-muted-foreground">Manage client accounts, contracts, and portal assignments.</p>
        </div>
        <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add Client</Button>
      </div>
      {loading ? <p className="text-sm text-muted-foreground">Loading clients...</p> : <ClientsTable clients={clients} />}
    </div>
  );
}
