import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  const features = [
    { icon: Shield, text: "No Risk" },
    { icon: Clock, text: "Fast Approval" },
    { icon: CheckCircle, text: "No Credit Check" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Happy family"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-2xl">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-3 py-1.5 bg-primary-foreground/15 text-primary-foreground rounded-md text-sm font-medium mb-6 backdrop-blur-sm">
              Pre-Settlement Legal Funding
            </span>
          </div>

          <h1
            className="heading-xl text-primary-foreground mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Get funds fast to{" "}
            <span className="text-primary-foreground/90">make ends meet.</span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Simply tell us how much money you need and provide your attorney's contact
            information. There is no risk, no out-of-pocket costs, and your credit
            score is not a factor.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-10 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg">
              Calculate Savings
            </Button>
          </div>

          <div
            className="flex flex-wrap gap-6 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <feature.icon className="w-5 h-5 text-primary-foreground/70" />
                <span className="font-medium text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
