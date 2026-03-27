import { useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="University campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Headline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            REACH
            <br />
            <span className="text-primary">EVERY</span>
            <br />
            CAMPUS
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mb-8">
            The first intercollegiate advertising network connecting national brands
            to student audiences across America's top universities — through one
            unified media buy.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-primary">DP</span>
              <span className="text-xs text-muted-foreground leading-tight">
                The Daily
                <br />
                Pennsylvanian
              </span>
            </div>
            <div className="w-px h-8 bg-border" />
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Media Ventures
            </span>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <h2 className="text-2xl font-bold mb-6 text-foreground font-serif">
            Start Your Campaign
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                name="company"
                placeholder="Company *"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your advertising goals..."
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-lg gradient-crimson text-primary-foreground font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Partner With Us
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
