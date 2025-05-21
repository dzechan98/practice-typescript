import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      features: [
        "Responsive design",
        "Performance optimization",
        "SEO-friendly structure",
        "Content management systems",
        "E-commerce solutions",
      ],
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS and Android apps",
        "Cross-platform development",
        "UI/UX design",
        "App store optimization",
        "Maintenance and support",
      ],
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that delights and engages your audience.",
      features: [
        "User research",
        "Wireframing and prototyping",
        "Visual design",
        "Usability testing",
        "Design systems",
      ],
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing to grow your online presence and drive results.",
      features: [
        "SEO and content strategy",
        "Social media marketing",
        "Email marketing",
        "PPC advertising",
        "Analytics and reporting",
      ],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center" data-aos="fade-down">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Comprehensive digital solutions to help your business grow and succeed.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-all duration-300"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl animate-bounce-slow">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
