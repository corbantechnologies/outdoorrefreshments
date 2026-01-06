"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();
  const isHomePage = location === "/";

  const navLinks = [
    { name: "Home", href: isHomePage ? "#home" : "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Events", href: isHomePage ? "#events" : "/#events" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const renderNavLink = (link: { name: string; href: string }) => {
    if (link.href.startsWith("/") && !link.href.startsWith("/#")) {
      return (
        <Link
          key={link.name}
          href={link.href}
          className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          {link.name}
        </Link>
      );
    }
    return (
      <a
        key={link.name}
        href={link.href}
        className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        {link.name}
      </a>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold text-foreground">
              Outdoor<span className="text-primary">Refreshments</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => renderNavLink(link))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-body text-base font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-body text-base font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
              <Button variant="hero" size="lg" className="mt-4">
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
