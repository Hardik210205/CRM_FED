"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { getCurrentUser, getToken, clearAuthSession } from "@/api/client";

export default function AppLayout({ children, role }) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const token = getToken();
    const user = getCurrentUser();

    if (!token || !user) {
      clearAuthSession();
      router.replace("/login");
      return;
    }

    if (role === "admin" && user.role !== "admin") {
      router.replace("/employee/dashboard");
      return;
    }

    if (role === "employee" && user.role !== "employee") {
      router.replace("/admin/dashboard");
      return;
    }

    setAllowed(true);
  }, [pathname, role, router]);

  if (!allowed) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
