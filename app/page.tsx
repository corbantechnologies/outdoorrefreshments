import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import About from "@/components/landing/About";
import FeaturedEvents from "@/components/landing/FeaturedEvents";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
        <Hero />
      <main className="mx-auto container">
        <Services />
        <About />
        <FeaturedEvents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
