import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Careers", href: "#" },
  ],
  resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#" },
    { label: "Case Types", href: "#" },
    { label: "Calculator", href: "#calculator" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Disclosures", href: "#" },
    { label: "Licensing", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-md bg-background flex items-center justify-center">
                <span className="text-foreground font-heading font-bold text-sm">LF</span>
              </div>
              <span className="font-heading font-semibold text-lg">
                Legal Funding
              </span>
            </a>
            <p className="text-background/65 mb-5 text-sm leading-relaxed">
              Helping plaintiffs get the funds they need while waiting for their
              legal cases to settle. Fast, fair, and risk-free.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-md bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/65 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/65 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/65 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-background/50 flex-shrink-0 mt-0.5" />
                <span className="text-background/65 text-sm">
                  1-800-123-4567
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-background/50 flex-shrink-0 mt-0.5" />
                <span className="text-background/65 text-sm">
                  info@legalfunding.com
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-background/50 flex-shrink-0 mt-0.5" />
                <span className="text-background/65 text-sm">
                  123 Financial District
                  <br />
                  New York, NY 10004
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-background/50 text-xs">
              © {new Date().getFullYear()} Legal Funding. All rights reserved.
            </p>
            <p className="text-background/50 text-xs text-center md:text-right">
              Pre-settlement funding is not a loan. Repayment is contingent upon the
              outcome of your case.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
