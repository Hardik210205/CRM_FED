import { Link } from "react-router-dom";
import { Bell, HelpCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NotificationBell from "./NotificationBell";

interface NavbarProps {
  showSearch?: boolean;
  variant?: "landing" | "app";
}

const Navbar = ({ showSearch = true, variant = "app" }: NavbarProps) => {
  if (variant === "landing") {
    return (
      <nav className="flex items-center justify-between px-8 py-4 border-b border-border bg-card">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">KE</span>
          </div>
          <span className="font-semibold text-lg text-foreground">Keshav Encon</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link to="/#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
          <Link to="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-card">
      {showSearch && (
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search data, reports, or users..." className="pl-9 h-9 bg-secondary border-none" />
        </div>
      )}
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <NotificationBell />
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <HelpCircle className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
