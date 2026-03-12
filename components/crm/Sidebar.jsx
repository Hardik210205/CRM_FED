"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Target, Briefcase, Calendar, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { clearAuthSession, getCurrentUser } from "@/api/client";

const adminLinks = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { label: "Employees", icon: Users, path: "/admin/employees" },
  { label: "Leads", icon: Target, path: "/admin/leads" },
  { label: "Clients", icon: Briefcase, path: "/admin/clients" },
  { label: "Settings", icon: Settings, path: "/admin/settings" },
];

const employeeLinks = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/employee/dashboard" },
  { label: "Leads", icon: Target, path: "/employee/leads" },
  { label: "Clients", icon: Briefcase, path: "/employee/clients" },
  { label: "Meetings", icon: Calendar, path: "/calendar" },
  { label: "Reports", icon: Settings, path: "/employee/reports" },
];

export default function Sidebar({ role }) {
  const pathname = usePathname();
  const currentUser = getCurrentUser();
  const links = role === "admin" ? adminLinks : employeeLinks;
  const title = role === "admin" ? "AdminPanel" : "Nexus Hub";
  const subtitle = role === "admin" ? "Management Console" : "";
  const user = useMemo(() => {
    if (currentUser) {
      return {
        name: currentUser.fullName || "User",
        role: currentUser.designation || currentUser.role || "User",
      };
    }
    return role === "admin"
      ? { name: "Admin", role: "admin" }
      : { name: "Employee", role: "employee" };
  }, [currentUser, role]);

  return (
    <aside className="w-44 h-screen bg-card border-r border-border flex flex-col justify-between shrink-0">
      <div>
        <div className="px-4 py-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">KE</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground leading-tight">{title}</p>
              {subtitle && <p className="text-[10px] text-muted-foreground">{subtitle}</p>}
            </div>
          </div>
        </div>
        <nav className="px-2 space-y-0.5">
          {links.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors",
                  active
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="px-3 py-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
            {user.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">{user.name}</p>
            <p className="text-[10px] text-muted-foreground">{user.role}</p>
          </div>
          <Link
            href="/login"
            onClick={() => {
              clearAuthSession();
            }}
          >
            <LogOut className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground cursor-pointer" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
