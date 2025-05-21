import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center" data-aos="fade-down">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <Card data-aos="fade-right">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First name
                  </label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help you?" rows={5} />
              </div>
              <Button type="submit" className="w-full animate-bounce-slow">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-col justify-center space-y-8" data-aos="fade-left">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 animate-bounce-slow">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="mt-1 text-muted-foreground">info@horizon.com</p>
              <p className="text-muted-foreground">support@horizon.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 animate-bounce-delayed">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="mt-1 text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground">Mon-Fri, 9am-6pm</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 animate-bounce-slow">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Office</h3>
              <p className="mt-1 text-muted-foreground">123 Innovation Street</p>
              <p className="text-muted-foreground">San Francisco, CA 94103</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
