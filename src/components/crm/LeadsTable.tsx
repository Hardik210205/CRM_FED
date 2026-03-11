import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockLeads } from "@/data/mockData";

const statusColors: Record<string, string> = {
  "New Lead": "bg-info/10 text-info border-info/20",
  "Contacted": "bg-warning/10 text-warning border-warning/20",
  "Qualified": "bg-success/10 text-success border-success/20",
  "Lost": "bg-destructive/10 text-destructive border-destructive/20",
};

interface LeadsTableProps {
  leads?: typeof mockLeads;
  showActions?: boolean;
}

const LeadsTable = ({ leads = mockLeads, showActions = true }: LeadsTableProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Lead Name</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Source (Portal)</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date Added</th>
              {showActions && <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                      {lead.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">{lead.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{lead.source}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge variant="outline" className={`text-xs ${statusColors[lead.status] || ""}`}>
                    {lead.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{lead.dateAdded}</td>
                {showActions && (
                  <td className="px-4 py-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-border">
        <p className="text-xs text-muted-foreground">Showing 1 to {leads.length} of 1,284 leads</p>
        <div className="flex items-center gap-1">
          {[1, 2, 3, "...", 45].map((p, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded text-xs font-medium transition-colors ${p === 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;
