import { motion } from "framer-motion";
import { Globe, BarChart3, Users, Megaphone } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Unified Network",
    desc: "One media buy reaches students across all partner campuses. Simplified planning, booking, and reporting through a single point of contact.",
  },
  {
    icon: Megaphone,
    title: "Custom Ad Formats",
    desc: "From native content and newsletter sponsorships to print inserts and digital display — ad formats designed for how students actually consume media.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    desc: "Transparent reporting with engagement metrics across every campus. Know exactly how your campaign performs with each student audience.",
  },
  {
    icon: Users,
    title: "Premium Audiences",
    desc: "Reach the next generation of consumers, leaders, and professionals at America's most prestigious institutions — an audience that's hard to find elsewhere.",
  },
];

const NetworkOverview = () => {
  return (
    <section className="section-padding" id="network">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            THE <span className="text-primary">NETWORK</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A first-of-its-kind intercollegiate advertising platform built by
            student publishers, for national advertisers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 hover:border-primary/30 transition-colors group"
            >
              <f.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 font-serif">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkOverview;
