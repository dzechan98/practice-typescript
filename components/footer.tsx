import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              Horizon
            </Link>
            <p className="mt-4 max-w-xs text-muted-foreground">
              Building beautiful digital experiences that help businesses grow and succeed.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground">
                Services
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Careers
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Press
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium">Resources</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Documentation
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Help Center
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Community
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium">Legal</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                GDPR
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Horizon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
