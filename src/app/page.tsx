"use client";

import { LangProvider } from "@/lib/LangContext";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LangStrip from "@/components/LangStrip";
import WhySection from "@/components/WhySection";
import HowSection from "@/components/HowSection";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-cream">
        <Nav />
        <Hero />
        <LangStrip />
        <WhySection />
        <HowSection />
        <Services />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  );
}
