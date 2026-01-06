"use client";
import { UtensilsCrossed, Wine, Globe, Calendar } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Culinary Events",
    description:
      "Interactive cooking workshops, chef demonstrations, and gastronomic experiences that engage and inspire your guests.",
  },
  {
    icon: Wine,
    title: "Food & Beverage",
    description:
      "Curated wine tastings, cocktail masterclasses, and bespoke beverage programs tailored to your event&apos;s theme.",
  },
  {
    icon: Globe,
    title: "International Summits",
    description:
      "World-class hospitality conferences and trade shows bringing together industry leaders from across the globe.",
  },
  {
    icon: Calendar,
    title: "Corporate Events",
    description:
      "From intimate board dinners to large-scale celebrations, we create memorable experiences for your team and clients.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-warm">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Exceptional Events, <span className="italic">Exquisite Taste</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            We specialize in creating immersive hospitality experiences that
            celebrate the art of food, beverage, and genuine connection.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-lg shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
