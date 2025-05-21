import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Horizon has completely transformed our online presence. The team delivered a stunning website that perfectly captures our brand.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "/placeholder.svg?height=80&width=80&text=SJ",
    },
    {
      quote:
        "Working with Horizon was a game-changer for our business. Their attention to detail and commitment to quality is unmatched.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthLabs",
      avatar: "/placeholder.svg?height=80&width=80&text=MC",
    },
    {
      quote:
        "The team at Horizon went above and beyond our expectations. They delivered a product that not only looks great but performs exceptionally well.",
      author: "Emily Rodriguez",
      role: "Product Manager, InnovateCo",
      avatar: "/placeholder.svg?height=80&width=80&text=ER",
    },
  ]

  return (
    <section className="bg-muted/50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Businesses Worldwide
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t px-6 py-4">
                <div className="h-10 w-10 overflow-hidden rounded-full animate-bounce-slow">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
