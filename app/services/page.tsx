import { Button } from "@/components/ui/button";
import {
  UtensilsCrossed,
  Wine,
  Globe,
  Calendar,
  ChefHat,
  Users,
  Sparkles,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/landing/Footer";
import Link from "next/link";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Culinary Events",
    description:
      "Interactive cooking workshops, chef demonstrations, and gastronomic experiences that engage and inspire your guests.",
    features: [
      "Live cooking demonstrations",
      "Interactive food stations",
      "Celebrity chef partnerships",
      "Themed culinary experiences",
    ],
  },
  {
    icon: Wine,
    title: "Food & Beverage Programs",
    description:
      "Curated wine tastings, cocktail masterclasses, and bespoke beverage programs tailored to your event's theme.",
    features: [
      "Wine & spirit tastings",
      "Cocktail masterclasses",
      "Custom menu development",
      "Beverage pairing experiences",
    ],
  },
  {
    icon: Globe,
    title: "International Summits",
    description:
      "World-class hospitality conferences and trade shows bringing together industry leaders from across the globe.",
    features: [
      "Industry conferences",
      "Trade show coordination",
      "Speaker management",
      "Multi-venue logistics",
    ],
  },
  {
    icon: Calendar,
    title: "Corporate Events",
    description:
      "From intimate board dinners to large-scale celebrations, we create memorable experiences for your team and clients.",
    features: [
      "Executive dinners",
      "Team building events",
      "Product launches",
      "Annual celebrations",
    ],
  },
  {
    icon: ChefHat,
    title: "Private Chef Experiences",
    description:
      "Exclusive private dining experiences with world-renowned chefs, bringing fine dining directly to your venue.",
    features: [
      "In-home dining experiences",
      "Chef's table events",
      "Custom menu creation",
      "Intimate gatherings",
    ],
  },
  {
    icon: MapPin,
    title: "Outdoor & Festival Catering",
    description:
      "From elegant garden parties to large-scale outdoor festivals, we deliver exceptional refreshments in any setting.",
    features: [
      "Festival food services",
      "Garden party catering",
      "Mobile bar setups",
      "Open-air dining experiences",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your vision, goals, and unique requirements for your event.",
  },
  {
    step: "02",
    title: "Concept Design",
    description:
      "Our team crafts a bespoke concept that aligns with your brand and exceeds expectations.",
  },
  {
    step: "03",
    title: "Planning & Coordination",
    description:
      "Meticulous planning ensures every detail is accounted for, from vendors to timelines.",
  },
  {
    step: "04",
    title: "Flawless Execution",
    description:
      "On the day, our experienced team delivers an unforgettable experience for your guests.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <div className="mx-auto container min-h-screen">
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-warm">
            <div className="container px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
                  What We Offer
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                  Comprehensive Event <span className="italic">Services</span>
                </h1>
                <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                  From intimate gatherings to grand international events, we
                  provide end-to-end hospitality solutions that create lasting
                  impressions.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container px-4 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="group bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 border border-border/50"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="font-body text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 lg:py-28 bg-secondary/30">
            <div className="container px-4 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
                  Our Process
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                  How We <span className="italic">Work</span>
                </h2>
                <p className="font-body text-muted-foreground text-lg">
                  A proven approach that delivers exceptional results every
                  time.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="relative">
                    <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-primary/30 to-transparent translate-x-1/2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 lg:py-28 bg-charcoal text-warm-white">
            <div className="container px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <Users className="w-12 h-12 text-copper-light mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                  Ready to Create Something{" "}
                  <span className="italic text-copper-light">
                    Extraordinary?
                  </span>
                </h2>
                <p className="font-body text-warm-white/70 text-lg mb-10 max-w-xl mx-auto">
                  Let&lsquo;s discuss your vision and explore how we can bring
                  your next event to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#contact">
                    <Button variant="copper" size="xl">
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/#events">
                    <Button
                      variant="hero-outline"
                      size="xl"
                      className="border-warm-white/30 text-warm-white hover:bg-warm-white hover:text-foreground"
                    >
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
