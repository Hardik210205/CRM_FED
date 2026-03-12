import Link from "next/link";
import InteractionForm from "@/components/crm/InteractionForm";

export default function InteractionPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-border bg-card">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">✦</span>
          </div>
          <span className="font-semibold text-foreground">Interaction Tracker</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/employee/dashboard" className="text-sm text-muted-foreground hover:text-foreground">Dashboard</Link>
          <Link href="/interactions" className="text-sm text-primary font-medium">Interactions</Link>
          <Link href="/employee/clients" className="text-sm text-muted-foreground hover:text-foreground">Clients</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Settings</Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">RG</div>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-foreground mb-1">New Interaction Workflow</h1>
        <p className="text-sm text-muted-foreground mb-8">Step 1 of 2: Log Meeting Details</p>
        <InteractionForm />
      </main>
      <footer className="text-center py-6 text-xs text-muted-foreground border-t border-border">
        © 2023 Interaction Tracker Pro. All Rights Reserved. Verified by SecureSync.
      </footer>
    </div>
  );
}
