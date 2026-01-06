import { Button } from "@/components/ui/button";
import heroImage from "@/public/hero-event.jpg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Elegant fine dining event setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-body text-copper-light text-sm uppercase tracking-[0.3em] mb-6 animate-fade-up opacity-0 delay-100">
            Premier Hospitality Events
          </p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-warm-white leading-tight mb-6 animate-fade-up opacity-0 delay-200">
            Crafting Unforgettable
            <span className="block italic text-copper-light">
              Culinary Experiences
            </span>
          </h1>

          <p className="font-body text-warm-white/80 text-lg md:text-xl max-w-xl mb-10 animate-fade-up opacity-0 delay-300">
            From intimate chef&apos;s tables to grand international galas, we
            design and execute extraordinary food &amp; beverage events that
            leave lasting impressions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-400">
            <Button variant="copper" size="xl">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              className="border-warm-white/30 text-warm-white hover:bg-warm-white hover:text-foreground"
            >
              View Past Events
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-warm-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-warm-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
