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
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1.5 bg-primary-foreground/15 text-primary-foreground rounded-md text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="heading-lg text-primary-foreground mb-4">
            How It Works
          </h2>
          <p className="text-primary-foreground/75 max-w-2xl mx-auto">
            Getting the funds you need is simple. Our streamlined process ensures
            you get cash fast without the hassle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-px bg-primary-foreground/20" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-primary-foreground/8 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-primary-foreground/12 transition-all duration-300 border border-primary-foreground/10">
                <div className="relative inline-block mb-5">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-20 -right-3 z-10">
                  <ArrowRight className="w-6 h-6 text-primary-foreground/40" />
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
