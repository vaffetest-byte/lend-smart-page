import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is pre-settlement legal funding?",
    answer:
      "Pre-settlement legal funding, also known as lawsuit funding or litigation financing, is a cash advance given to plaintiffs who are waiting for their lawsuit to settle. Unlike a traditional loan, you only repay if you win your case.",
  },
  {
    question: "How do I qualify for funding?",
    answer:
      "Qualification is based on the strength of your case, not your credit score. You must have an active lawsuit with an attorney, and your case must have potential for a successful outcome. We review each case individually.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Most applications are processed within 24-48 hours. Once approved, funds are typically transferred to your account within 24 hours. In urgent cases, we can often expedite the process.",
  },
  {
    question: "What happens if I lose my case?",
    answer:
      "If you don't win your case or receive a settlement, you owe us nothing. This is non-recourse funding, meaning the risk is on us, not you. You only repay if you win.",
  },
  {
    question: "How much can I receive?",
    answer:
      "The amount you can receive depends on the estimated value of your case. We typically fund between $500 and $500,000, with most advances ranging from $1,000 to $50,000. Our team will evaluate your case to determine an appropriate amount.",
  },
  {
    question: "Will this affect my credit score?",
    answer:
      "No, applying for legal funding will not affect your credit score. We don't perform traditional credit checks. Our decision is based solely on the merits of your case.",
  },
  {
    question: "Can I use the funds for anything?",
    answer:
      "Yes, once you receive your funds, you can use them for any purpose - medical bills, rent, car payments, groceries, or any other expenses you need to cover while waiting for your case to settle.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our legal funding process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-heading text-lg font-medium text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
