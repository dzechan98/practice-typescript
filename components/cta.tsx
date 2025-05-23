import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div
          className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12 lg:p-16"
          data-aos="zoom-in-up"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-foreground/20 via-primary to-primary"></div>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to transform your digital presence?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
              Join thousands of satisfied customers who have taken their
              businesses to the next level with Horizon.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="gap-1 animate-bounce-slow"
              >
                <Link href="/contact">
                  Get Started Today <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
