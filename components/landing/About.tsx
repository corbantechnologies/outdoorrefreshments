import { Check } from "lucide-react";
import cookingImage from "@/public/cooking-event.jpg";
import Image from "next/image";

const highlights = [
  "15+ years of hospitality expertise",
  "500+ successful events delivered",
  "Global network of culinary partners",
  "Award-winning event design team",
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background w-full">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-card">
              <Image
                src={cookingImage}
                alt="Professional chef preparing gourmet dishes"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-glow">
              <p className="font-display text-4xl font-bold mb-1">500+</p>
              <p className="font-body text-sm opacity-90">Events Delivered</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Executive Summary
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Where Passion Meets
              <span className="block italic text-primary">Precision</span>
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Our Story</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Outdoor Refreshments was established to redefine hospitality by bringing world-class culinary and mixology experiences to any location. We bridge the gap between high-end restaurant quality and the flexibility of off-site events.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To deliver seamless, memorable events through exquisite cuisine, innovative liquid catering, and flawless coordination.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To be the premier choice for clients who demand elegance, creativity, and fresh, locally sourced refreshments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
