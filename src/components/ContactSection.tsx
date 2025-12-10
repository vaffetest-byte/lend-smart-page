import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const caseTypes = [
  "Auto Accident",
  "Personal Injury",
  "Medical Malpractice",
  "Slip and Fall",
  "Workers Compensation",
  "Product Liability",
  "Other",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.caseType) {
      newErrors.caseType = "Please select a case type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-12 shadow-medium">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="heading-md text-foreground mb-4">
                Thank You for Reaching Out!
              </h2>
              <p className="text-muted-foreground mb-8">
                We've received your message and will get back to you within 24 hours.
                In the meantime, feel free to call us directly.
              </p>
              <Button
                variant="hero"
                size="lg"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and one of our funding specialists will contact
            you within 24 hours to discuss your case.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-sm">Call Us</p>
                    <p className="font-semibold">1-800-123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-sm">Email Us</p>
                    <p className="font-semibold">info@legalfunding.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-sm">Visit Us</p>
                    <p className="font-semibold">
                      123 Financial District
                      <br />
                      New York, NY 10004
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
              <p className="text-foreground font-medium mb-2">
                Available 24/7
              </p>
              <p className="text-muted-foreground text-sm">
                Our team is here to help you any time, day or night. Don't hesitate
                to reach out.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-medium"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="John Doe"
                    className={`h-12 ${errors.fullName ? "border-destructive" : "border-border"}`}
                  />
                  {errors.fullName && (
                    <p className="text-destructive text-sm">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@example.com"
                    className={`h-12 ${errors.email ? "border-destructive" : "border-border"}`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className={`h-12 ${errors.phone ? "border-destructive" : "border-border"}`}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="caseType" className="text-foreground font-medium">
                    Case Type *
                  </Label>
                  <Select
                    value={formData.caseType}
                    onValueChange={(value) => handleChange("caseType", value)}
                  >
                    <SelectTrigger
                      className={`h-12 bg-background ${errors.caseType ? "border-destructive" : "border-border"}`}
                    >
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {caseTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.caseType && (
                    <p className="text-destructive text-sm">{errors.caseType}</p>
                  )}
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Tell Us About Your Case *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Briefly describe your case and funding needs..."
                    rows={5}
                    className={`resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm">{errors.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
