import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small projects and individuals.",
      features: [
        "Up to 5 pages",
        "Basic SEO optimization",
        "Mobile responsive design",
        "Contact form",
        "1 month of support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses and teams.",
      features: [
        "Up to 15 pages",
        "Advanced SEO optimization",
        "Mobile responsive design",
        "Contact form with validation",
        "Blog integration",
        "E-commerce ready",
        "3 months of support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$149",
      description: "For large organizations with complex needs.",
      features: [
        "Unlimited pages",
        "Premium SEO optimization",
        "Mobile responsive design",
        "Advanced forms with validation",
        "Blog with commenting system",
        "Full e-commerce functionality",
        "Custom integrations",
        "12 months of priority support",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that's right for your business.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:translate-y-[-10px] ${
                plan.popular ? "border-primary shadow-lg" : "border shadow-md"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground animate-pulse">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="pt-1.5">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "animate-bounce-slow" : "bg-muted-foreground/80 hover:bg-muted-foreground"}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
