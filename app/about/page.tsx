import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import image6 from "@/public/6.avif";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center" data-aos="fade-down">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          About <span className="text-primary">Horizon</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          We're on a mission to help businesses grow and succeed in the digital
          age.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
        <div
          className="relative aspect-video overflow-hidden rounded-xl"
          data-aos="fade-right"
        >
          <Image src={image6} alt="Our team" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center" data-aos="fade-left">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded in 2023, Horizon began with a simple idea: to create
            beautiful, functional digital experiences that help businesses
            thrive. What started as a small team of passionate designers and
            developers has grown into a full-service digital agency.
          </p>
          <p className="mt-4 text-muted-foreground">
            Today, we work with clients across the globe, from startups to
            enterprise companies, helping them build products that users love.
          </p>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-center text-3xl font-bold" data-aos="fade-up">
          Our Values
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Innovation",
              description:
                "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
            },
            {
              title: "Quality",
              description:
                "We believe in craftsmanship and attention to detail in everything we create.",
            },
            {
              title: "Collaboration",
              description:
                "We work closely with our clients, treating their challenges as our own.",
            },
            {
              title: "Integrity",
              description:
                "We're honest, transparent, and committed to doing what's right.",
            },
            {
              title: "Impact",
              description:
                "We measure our success by the positive difference we make for our clients.",
            },
            {
              title: "Growth",
              description:
                "We're dedicated to continuous learning and improvement.",
            },
          ].map((value, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="flip-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold animate-bounce-slow">
                  {value.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
