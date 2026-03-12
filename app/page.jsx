import Link from "next/link";
import { TrendingUp, Users, Briefcase, Calendar, MapPin, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/crm/Navbar";

const features = [
  { icon: TrendingUp, title: "Lead Tracking", desc: "Monitor every prospect through the sales funnel with real-time updates and automated status transitions." },
  { icon: Users, title: "Client Management", desc: "Maintain detailed records and communication history for every client to deliver personalized experiences." },
  { icon: Calendar, title: "Meeting Scheduling", desc: "Coordinate team calendars and automate meeting reminders effortlessly with built-in integrations." },
  { icon: Shield, title: "Portal Assignment", desc: "Assign specific roles and access levels to different portals securely, ensuring data privacy and integrity." },
  { icon: MapPin, title: "Proof of Visit Tracking", desc: "Geotagged verification and field activity monitoring for remote teams to ensure high accountability." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="landing" />

      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-success/10 text-success text-xs font-medium px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              New: ResumeeAI is now live
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
              A centralised platform to manage{" "}
              <span className="text-primary">Leads, Clients, and Activities</span>
            </h1>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empower your workflow with integrated tools like <strong>RecrootBridge</strong>, <strong>TalentPulse</strong>, <strong>ResumeeAI</strong>, and <strong>UniNest</strong> for seamless business management.
            </p>
            <div className="flex gap-3">
              <Link href="/signup">
                <Button size="lg">Get Started Free</Button>
              </Link>
              <Button variant="outline" size="lg">▶ Watch Demo</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
              <span className="flex -space-x-2">
                {["RG", "SJ", "MR"].map((i) => (
                  <span key={i} className="w-6 h-6 rounded-full bg-primary/20 border-2 border-card text-[8px] font-bold flex items-center justify-center text-primary">{i}</span>
                ))}
              </span>
              Joined by 500+ growing businesses
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-2 shadow-lg">
            <div className="flex gap-1.5 mb-3 px-2 pt-2">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-warning/60" />
              <span className="w-3 h-3 rounded-full bg-success/60" />
            </div>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">CRM Dashboard Preview</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-2">Streamline Your Operations</h2>
          <p className="text-muted-foreground mb-10 max-w-lg">Everything you need to manage your business relationships and team activities in one place.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <p className="font-semibold text-primary mb-1">Need more?</p>
              <p className="text-sm text-muted-foreground mb-3">Explore our custom integrations and API access.</p>
              <Button variant="ghost" size="sm" className="text-primary">
                View all features <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto bg-foreground rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-background mb-3">Ready to transform your workflow?</h2>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            Join hundreds of companies using Keshav Encon CRM to scale their operations and boost productivity.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/signup">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Start Free Trial</Button>
            </Link>
            <Button variant="outline" size="lg" className="border-background/20 text-background hover:bg-background/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-8 py-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">KE</span>
              </div>
              <span className="font-semibold text-foreground">Keshav Encon</span>
            </div>
            <p className="text-xs text-muted-foreground">The all-in-one business management platform designed for modern teams who want to scale faster and smarter.</p>
          </div>
          <div>
            <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-3">Support</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>support@keshavencon.com</p>
              <p>Help Center</p>
              <p>API Documentation</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-3">Legal</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Security</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-3">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-2">Subscribe to our newsletter for latest updates.</p>
            <div className="flex gap-2">
              <input className="flex-1 px-3 py-1.5 text-sm border border-border rounded-md bg-background" placeholder="Email address" />
              <Button size="sm">Send</Button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-border text-xs text-muted-foreground text-center">
          © 2024 Keshav Encon CRM. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
