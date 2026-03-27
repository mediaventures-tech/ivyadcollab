const schools = [
  "The Daily Pennsylvanian",
  "The Yale Daily News",
  "The Columbia Spectator",
  "The Daily Princetonian",
  "The Brown Daily Herald",
  "The Dartmouth",
  "The Duke Chronicle",
  "George's The Hoya",
];

const PartnerLogos = () => {
  return (
    <section className="py-8 bg-card border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
          Our Partner Publications
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {[...schools, ...schools].map((school, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 py-3 flex items-center"
            >
              <span className="text-sm md:text-base font-serif font-semibold text-muted-foreground whitespace-nowrap hover:text-foreground transition-colors">
                {school}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
