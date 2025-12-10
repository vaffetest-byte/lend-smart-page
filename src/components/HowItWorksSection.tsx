import { FileText, Search, Banknote, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Apply Online",
    description:
      "Fill out our simple online application in just a few minutes. Tell us about your case and how much funding you need.",
  },
  {
    icon: Search,
    number: "02",
    title: "Quick Review",
    description:
      "Our team reviews your case details and contacts your attorney. We evaluate the merits of your case, not your credit.",
  },
  {
    icon: Banknote,
    number: "03",
    title: "Get Your Cash",
    description:
      "Once approved, receive your funds within 24-48 hours. Use the money for bills, medical expenses, or anything you need.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="heading-lg text-primary-foreground mb-4">
            How It Works
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Getting the funds you need is simple. Our streamlined process ensures
            you get cash fast without the hassle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-accent/30" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-primary-foreground/15 transition-all duration-300 border border-primary-foreground/10">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-foreground text-primary text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-primary-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-24 -right-4 z-10">
                  <ArrowRight className="w-8 h-8 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
