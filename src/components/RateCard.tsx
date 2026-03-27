import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Single Campus",
    price: "From $500",
    period: "per campaign",
    features: [
      "1 partner publication",
      "Digital display ads",
      "Newsletter placement",
      "Basic performance report",
      "2-week minimum run",
    ],
    featured: false,
  },
  {
    name: "Network Select",
    price: "From $2,500",
    period: "per campaign",
    features: [
      "5 partner publications",
      "All digital + print formats",
      "Newsletter sponsorships",
      "Custom native content",
      "Detailed analytics dashboard",
      "Dedicated campaign manager",
    ],
    featured: true,
  },
  {
    name: "Full Network",
    price: "Custom",
    period: "tailored pricing",
    features: [
      "All partner publications",
      "Omnichannel ad formats",
      "Exclusive sponsorship opportunities",
      "Co-branded content series",
      "Real-time reporting",
      "Priority placement",
      "Strategic consultation",
    ],
    featured: false,
  },
];

const RateCard = () => {
  return (
    <section className="section-padding" id="rates">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            MEDIA <span className="text-primary">KIT</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Flexible packages designed for every budget — from targeted campus
            campaigns to full-network takeovers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 border transition-all ${
                tier.featured
                  ? "border-primary bg-primary/5 scale-[1.02] shadow-2xl shadow-primary/10"
                  : "border-border glass-card"
              }`}
            >
              {tier.featured && (
                <span className="inline-block text-xs font-semibold tracking-widest uppercase gradient-crimson text-primary-foreground px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold font-serif mb-1">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-black font-serif text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold text-sm uppercase tracking-widest transition-all ${
                  tier.featured
                    ? "gradient-crimson text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RateCard;
