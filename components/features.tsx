import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Zap, BarChart, Lock } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Modern Stack",
      description: "Built with the latest technologies and best practices for optimal performance and scalability.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Fast Performance",
      description: "Optimized for speed with server-side rendering and efficient code splitting.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Analytics",
      description: "Built-in analytics to track user behavior and improve your product.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Secure by Default",
      description: "Enterprise-grade security with regular updates and best practices.",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Features for Modern Web Apps
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Everything you need to build stunning websites and applications.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 md:gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <CardHeader>
                <div className="mb-2 animate-bounce-slow">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
