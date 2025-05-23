import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, and branding. Our team specializes in creating custom solutions tailored to your specific business needs.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing options including fixed-price quotes for well-defined projects and hourly rates for ongoing work. We believe in transparent pricing with no hidden fees. The final cost depends on project complexity, features required, and timeline.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally. These include regular updates, security patches, performance monitoring, and technical support. We can customize a support plan based on your needs.",
    },
    {
      question: "How do you handle project management and communication?",
      answer:
        "We follow an agile methodology with regular check-ins and updates. Each client is assigned a dedicated project manager who serves as your main point of contact. We use project management tools that give you visibility into progress and facilitate clear communication throughout the project lifecycle.",
    },
    {
      question: "Can you work with our existing systems and technologies?",
      answer:
        "Absolutely. Our team is experienced in integrating with a wide range of existing systems and technologies. We'll assess your current setup and develop solutions that seamlessly integrate with your existing infrastructure while enhancing its capabilities.",
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
            Frequently Asked Questions
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find answers to common questions about our services and process
          </p>
        </div>
        <div
          className="mx-auto mt-16 max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
