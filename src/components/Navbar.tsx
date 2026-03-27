import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-primary">DP</span>
          <span className="hidden sm:block text-xs text-muted-foreground leading-tight">
            Media
            <br />
            Ventures
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#network" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Network</a>
          <a href="#schools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Schools</a>
          <a href="#rates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Rates</a>
          <a
            href="#top"
            className="px-5 py-2 rounded-lg gradient-crimson text-primary-foreground text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
          <a href="#network" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground">Network</a>
          <a href="#schools" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground">Schools</a>
          <a href="#rates" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground">Rates</a>
          <a href="#top" onClick={() => setOpen(false)} className="block text-sm text-primary font-semibold">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
