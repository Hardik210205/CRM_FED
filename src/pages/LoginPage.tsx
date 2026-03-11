import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">KE</span>
          </div>
          <span className="font-semibold text-foreground">Keshav Encon CRM</span>
        </Link>
        <Link to="/signup" className="text-sm text-primary hover:underline">Support</Link>
      </header>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-card border border-border rounded-xl p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">📋</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
            <p className="text-sm text-muted-foreground mt-1">Please enter your details to sign in</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input placeholder="name@company.com" type="email" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-foreground">Password</label>
                <Link to="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Input placeholder="••••••••" type={showPassword ? "text" : "password"} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm text-muted-foreground">Remember me for 30 days</label>
            </div>
            <Link to="/admin/dashboard">
              <Button className="w-full" size="lg">
                Sign In to Portal <LogIn className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center text-xs text-muted-foreground"><span className="bg-card px-2">OR</span></div>
            </div>
            <Button variant="outline" className="w-full" size="lg">
              <span className="mr-2">🪟</span> Continue with Microsoft 365
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 py-4 border-t border-border text-xs text-muted-foreground">
        <p>© 2024 Keshav Encon CRM. All rights reserved.</p>
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Support</span>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
