"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EmployeeTable from "@/components/crm/EmployeeTable";
import { api } from "@/api/client";

export default function AdminEmployees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (department !== "all") params.set("department", department);
        const query = params.toString();
        const data = await api.get(`/employees${query ? `?${query}` : ""}`);
        if (mounted) setEmployees(data.employees || []);
      } catch (err) {
        console.error("Failed to fetch employees:", err);
        if (mounted) setEmployees([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchEmployees();
    return () => {
      mounted = false;
    };
  }, [search, department]);

  const departments = useMemo(() => {
    const set = new Set(employees.map((e) => e.department).filter(Boolean));
    return Array.from(set);
  }, [employees]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Employee Management</h1>
          <p className="text-sm text-muted-foreground">Manage your team members and their access.</p>
        </div>
        <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add Employee</Button>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search employees..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select value={department} onValueChange={setDepartment}>
          <SelectTrigger className="w-36"><SelectValue placeholder="Department" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {departments.map((d) => (
              <SelectItem key={d} value={d}>{d}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="ghost" size="icon"><Filter className="h-4 w-4" /></Button>
      </div>
      {loading ? <p className="text-sm text-muted-foreground">Loading employees...</p> : <EmployeeTable employees={employees} />}
    </div>
  );
}
