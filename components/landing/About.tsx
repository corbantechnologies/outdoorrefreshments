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
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container px-4 lg:px-8">
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
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Where Passion Meets
              <span className="block italic text-primary">Precision</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-6 leading-relaxed">
              Saveur Events was founded with a singular vision: to transform the
              way the hospitality industry celebrates, connects, and grows. We
              believe that every event should be a masterpiece of culinary
              artistry and flawless execution.
            </p>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Our team combines deep industry knowledge with creative
              innovation, ensuring that whether you&apos;re hosting 20 guests or
              2,000, your event exceeds expectations in every detail.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-body text-sm text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
