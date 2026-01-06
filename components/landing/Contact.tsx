import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "outdoorrefreshments@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254710584581",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Mombasa, Kenya",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Let&apos;s Create Something
              <span className="block italic text-primary">Extraordinary</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-10 leading-relaxed">
              Ready to bring your vision to life? Whether you&apos;re planning
              an intimate gathering or a large-scale international event,
              we&apos;d love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-body text-foreground font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 lg:p-10 rounded-lg shadow-card">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="h-12" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="h-12" />
                </div>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  className="h-12"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Event Type
                </label>
                <Input
                  placeholder="e.g., Corporate Gala, Wine Tasting"
                  className="h-12"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your event vision..."
                  className="min-h-[120px] resize-none"
                />
              </div>
              <Button variant="hero" size="xl" className="w-full">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
