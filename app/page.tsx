import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";
import Projects from "@/components/projects";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Projects />
      <Testimonials />
      <Faq />
      <Pricing />
      <Cta />
    </main>
  );
}
