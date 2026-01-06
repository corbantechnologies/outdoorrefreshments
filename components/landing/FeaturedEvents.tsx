import beverageImage from "@/public/beverage-event.jpg";
import galaImage from "@/public/gala-event.jpg";
import cookingImage from "@/public/cooking-event.jpg";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const events = [
  {
    image: galaImage,
    category: "International",
    title: "Global Hospitality Summit 2024",
    location: "Dubai, UAE",
  },
  {
    image: beverageImage,
    category: "Wine & Spirits",
    title: "Premier Wine Tasting Gala",
    location: "Bordeaux, France",
  },
  {
    image: cookingImage,
    category: "Culinary",
    title: "Executive Chef&apos;s Masterclass",
    location: "London, UK",
  },
];

const FeaturedEvents = () => {
  return (
    <section id="events" className="py-24 lg:py-32 bg-cream">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Featured <span className="italic">Events</span>
            </h2>
          </div>
          <a
            href="#"
            className="font-body text-sm font-medium text-primary hover:text-copper-light transition-colors flex items-center gap-2 group"
          >
            View All Events
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    View Details
                  </span>
                </div>
              </div>
              <p className="font-body text-primary text-xs uppercase tracking-[0.15em] mb-2">
                {event.category}
              </p>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
