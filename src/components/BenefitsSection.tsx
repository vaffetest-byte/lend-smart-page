import { Shield, Clock, BadgeCheck, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "No Risk Funding",
    description:
      "If you don't win your case, you owe us nothing. We only get paid when you get paid.",
  },
  {
    icon: Clock,
    title: "Fast Approval",
    description:
      "Get approved in as little as 24 hours. We understand that time is critical when you need funds.",
  },
  {
    icon: BadgeCheck,
    title: "No Credit Check",
    description:
      "Your credit score doesn't matter. We base our decision on the merits of your case, not your credit history.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description:
      "Our team is here to guide you through every step of the process with compassion and expertise.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            The Smart Choice for Legal Funding
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing transparent, fair, and fast funding solutions
            to help you through your legal journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-6 shadow-card hover:shadow-medium transition-all duration-300 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
