import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import image7 from "@/public/7.avif";
import image8 from "@/public/8.avif";
import image9 from "@/public/9.avif";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A modern e-commerce platform with advanced product filtering and secure checkout.",
      image: image7,
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Healthcare Dashboard",
      description:
        "An intuitive dashboard for healthcare providers to manage patient data and appointments.",
      image: image8,
      tags: ["React", "TypeScript", "Chart.js"],
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "A secure and user-friendly mobile banking application with real-time transaction tracking.",
      image: image9,
      tags: ["React Native", "Node.js", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore some of our recent work that showcases our expertise and
            creativity
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  View Project <ArrowUpRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
