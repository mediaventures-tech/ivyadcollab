import { motion } from "framer-motion";

const traditions = [
  {
    school: "University of Pennsylvania",
    tradition: "Hey Day",
    description: "Juniors march down Locust Walk with styrofoam hats and canes, celebrating their rise to senior status — one of Penn's oldest and most spirited traditions.",
    alumni: ["Elon Musk", "Warren Buffett", "Noam Chomsky"],
    color: "hsl(0, 72%, 51%)",
  },
  {
    school: "Harvard University",
    tradition: "Housing Day",
    description: "Freshmen discover their upperclassman House assignments as senior residents storm the Yard in themed celebrations — pure energy and pageantry.",
    alumni: ["Barack Obama", "Mark Zuckerberg", "Natalie Portman"],
    color: "hsl(0, 60%, 35%)",
  },
  {
    school: "Yale University",
    tradition: "The Game",
    description: "The annual Harvard-Yale football rivalry unites the entire campus in a century-old tradition of fierce competition, tailgates, and unforgettable pranks.",
    alumni: ["Anderson Cooper", "Jodie Foster", "Meryl Streep"],
    color: "hsl(220, 60%, 30%)",
  },
  {
    school: "Princeton University",
    tradition: "P-rade",
    description: "Thousands of alumni march through campus in reunion order during Reunions weekend — the longest-running alumni tradition in American higher education.",
    alumni: ["Jeff Bezos", "Michelle Obama", "F. Scott Fitzgerald"],
    color: "hsl(30, 85%, 45%)",
  },
  {
    school: "Stanford University",
    tradition: "Full Moon on the Quad",
    description: "Freshmen gather on the Main Quad under the full moon for this iconic welcome ritual — a Stanford rite of passage since the 1890s.",
    alumni: ["Larry Page", "Sandra Day O'Connor", "Tiger Woods"],
    color: "hsl(0, 60%, 35%)",
  },
  {
    school: "Columbia University",
    tradition: "Orgo Night",
    description: "The marching band storms Butler Library the night before the organic chemistry final, performing irreverent comedy in a legendary stress-relief tradition.",
    alumni: ["Alexander Hamilton", "Ruth Bader Ginsburg", "Barack Obama"],
    color: "hsl(210, 55%, 40%)",
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
          {traditions.map((t, i) => (
            <motion.div
              key={t.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl overflow-hidden bg-background border border-border group hover:border-primary/30 transition-all"
            >
              {/* Color accent bar */}
              <div className="h-1.5" style={{ backgroundColor: t.color }} />
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
                  {t.school}
                </p>
                <h3 className="text-xl font-bold font-serif mb-3">{t.tradition}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {t.description}
                </p>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                    Notable Alumni
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.alumni.map((a) => (
                      <span
                        key={a}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TraditionsSection;
