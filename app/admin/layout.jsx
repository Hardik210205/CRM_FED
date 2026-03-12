import AppLayout from "@/components/crm/AppLayout";

export default function AdminLayout({ children }) {
  return <AppLayout role="admin">{children}</AppLayout>;
}
