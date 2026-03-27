import { motion } from "framer-motion";

const newspapers = [
  {
    school: "University of Pennsylvania",
    newspaper: "The Daily Pennsylvanian",
    description: "The Daily Pennsylvanian has been the independent student newspaper of the University of Pennsylvania since 1885, covering campus news, culture, and beyond.",
    color: "#aa1e21",
  },
  {
    school: "Brown University",
    newspaper: "The Brown Daily Herald",
    description: "The Brown Daily Herald is the independent student newspaper of Brown University, delivering news and analysis to the Brown community since 1891.",
    color: "#aa1e21",
  },
  {
    school: "Columbia University",
    newspaper: "Columbia Daily Spectator",
    description: "The Columbia Daily Spectator is one of the oldest college newspapers in the country, serving the Columbia University community since 1877.",
    color: "#aa1e21",
  },
  {
    school: "Princeton University",
    newspaper: "The Daily Princetonian",
    description: "The Daily Princetonian is the independent student newspaper of Princeton University, one of the most respected college publications in the Ivy League.",
    color: "#aa1e21",
  },
  {
    school: "Duke University",
    newspaper: "The Duke Chronicle",
    description: "The Duke Chronicle is the independent student newspaper of Duke University, covering campus life, athletics, and news since 1905.",
    color: "#aa1e21",
  },
  {
    school: "Georgetown University",
    newspaper: "The Hoya",
    description: "The Hoya is the independent student newspaper of Georgetown University, serving the Hilltop community with news, opinion, and culture since 1920.",
    color: "#aa1e21",
  },
];

const TraditionsSection = () => {
  return (
    <section className="section-padding bg-card" id="schools">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            CAMPUS <span className="text-primary">PRESTIGE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Your brand alongside America's most storied institutions —
            their traditions, their influence, their alumni networks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newspapers.map((n, i) => (
            <motion.div
              key={n.school + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl overflow-hidden bg-background border border-border group hover:border-primary/30 transition-all"
            >
              <div className="h-1.5" style={{ backgroundColor: n.color }} />
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
                  {n.school}
                </p>
                <h3 className="text-xl font-bold font-serif mb-3">{n.newspaper}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {n.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TraditionsSection;
