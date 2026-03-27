import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Partner\nPublications" },
  { value: "2.5M+", label: "Students\nReached" },
  { value: "50+", label: "Campuses\nNationwide" },
  { value: "85%", label: "Reader\nEngagement" },
  { value: "$0", label: "Setup\nFees" },
];

const StatsBar = () => {
  return (
    <section className="py-16 gradient-navy border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center flex-1 min-w-[140px]"
            >
              <div className="stat-number">{stat.value}</div>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 whitespace-pre-line leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
