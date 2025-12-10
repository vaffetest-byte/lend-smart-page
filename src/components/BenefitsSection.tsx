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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
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
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
