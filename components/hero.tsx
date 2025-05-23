import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import image1 from "@/public/1.avif";
import image2 from "@/public/2.avif";
import image3 from "@/public/3.avif";
import image4 from "@/public/4.avif";
import image5 from "@/public/5.avif";

export default function Hero() {
  const images = [image1, image2, image3, image4];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div
            className="flex flex-col justify-center space-y-8"
            data-aos="fade-right"
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Build your next idea even faster
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Horizon helps you build modern websites and applications with
                speed and efficiency. Get started today and see the difference.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-1 animate-bounce-slow">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                  >
                    <Image
                      src={image}
                      alt={`User ${index + 1}`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Trusted by{" "}
                <span className="font-medium text-foreground">2,000+</span>{" "}
                users
              </div>
            </div>
          </div>
          <div
            className="relative flex items-center justify-center"
            data-aos="fade-left"
          >
            <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl border bg-background/50 shadow-xl">
              <Image
                src={image5}
                alt="Product preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border bg-background p-4 shadow-lg animate-bounce-slow">
              <div className="h-full w-full rounded-xl bg-primary/20"></div>
            </div>
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-2xl border bg-background p-4 shadow-lg animate-bounce-delayed">
              <div className="h-full w-full rounded-xl bg-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
