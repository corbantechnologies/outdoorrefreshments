import { Truck, Sparkles, Medal, Leaf } from "lucide-react";

const reasons = [
    {
        icon: Truck,
        title: "Mobile Excellence",
        description:
            "We bring a fully equipped kitchen and bar to your doorstep, ensuring freshness at any venue.",
    },
    {
        icon: Sparkles,
        title: "Customization",
        description:
            "No two events are the same; we build bespoke proposals that reflect your specific theme and dietary preferences.",
    },
    {
        icon: Medal,
        title: "Trained Professionals",
        description:
            "Our team includes certified chefs, creative mixologists, and attentive service staff trained in high-pressure event environments.",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description:
            "Commitment to eco-friendly practices, including biodegradable service ware and sourcing from local farmers.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-[#f7f7f7] lg:py-32 w-full">
            <div className="container px-4 lg:px-8 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
                        The Competitive Edge
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                        Why Choose <span className="italic text-primary">Us?</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={reason.title}
                            className="bg-background p-8 rounded-lg shadow-sm border border-border hover:shadow-card transition-shadow duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <reason.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                                {reason.title}
                            </h3>
                            <p className="font-body text-muted-foreground text-sm leading-relaxed text-[#d5d5d5]">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
