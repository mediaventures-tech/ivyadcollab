import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="section-padding bg-card border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            READY TO REACH
            <br />
            <span className="text-primary">THE NEXT GENERATION?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Join the brands already reaching millions of students through the
            most trusted voices on campus. Let's build your campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#top"
              className="px-8 py-4 rounded-lg gradient-crimson text-primary-foreground font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Start Your Campaign
            </a>
            <a
              href="#rates"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-sm uppercase tracking-widest hover:bg-secondary transition-colors"
            >
              View Rate Card
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-serif font-bold text-primary">DP</span>
          <span className="text-xs text-muted-foreground">
            Media Ventures · The Daily Pennsylvanian
          </span>
        </div>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#network" className="hover:text-foreground transition-colors">Network</a>
          <a href="#schools" className="hover:text-foreground transition-colors">Schools</a>
          <a href="#rates" className="hover:text-foreground transition-colors">Rates</a>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Daily Pennsylvanian, Inc.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
