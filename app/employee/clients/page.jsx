"use client";

import { useEffect, useState } from "react";
import ClientsTable from "@/components/crm/ClientsTable";
import { api } from "@/api/client";

export default function EmployeeClients() {
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
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Clients</h1>
        <p className="text-sm text-muted-foreground">Clients you are managing.</p>
      </div>
      {loading ? <p className="text-sm text-muted-foreground">Loading clients...</p> : <ClientsTable clients={clients} />}
    </div>
  );
}
