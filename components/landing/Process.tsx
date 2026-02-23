import { MessageSquare, Utensils, ClipboardList, PlaySquare } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        title: "1. Consultation",
        description: "Understanding your vision, budget, and guest demographics.",
    },
    {
        icon: Utensils,
        title: "2. Concept & Tasting",
        description:
            "Designing a unique menu and beverage list with scheduled tasting sessions.",
    },
    {
        icon: ClipboardList,
        title: "3. Logistics Planning",
        description:
            "Coordinating venue setup, equipment transport, and staffing.",
    },
    {
        icon: PlaySquare,
        title: "4. Live Execution",
        description:
            "On-site management to ensure every drink is poured and every plate served to perfection.",
    },
];

const Process = () => {
    return (
        <section className="py-24 lg:py-32 bg-background">
            <div className="container px-4 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
                        How It Works
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                        Our <span className="italic text-primary">Process</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-border/50 -z-10" />

                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="relative flex flex-col items-center text-center group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-24 h-24 mb-6 relative">
                                <div className="absolute inset-0 bg-primary/10 rounded-full scale-100 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-2 bg-background rounded-full border-2 border-primary/20 flex flex-col items-center justify-center">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>
                            </div>

                            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                                {step.title}
                            </h3>
                            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
