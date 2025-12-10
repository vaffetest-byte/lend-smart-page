import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Car Accident Case",
    quote:
      "The team was incredibly responsive and understanding. They got me the funds I needed within 48 hours, which helped me pay my medical bills while waiting for my settlement.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Johnson",
    role: "Personal Injury Case",
    quote:
      "I was skeptical at first, but the process was seamless. No credit check, no hassle. They truly care about helping people in difficult situations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Slip and Fall Case",
    quote:
      "Professional, fast, and fair. They explained everything clearly and made sure I understood the terms. Highly recommend their services.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium mb-4">
            Client Reviews
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            What Our Clients Are Saying
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thousands of satisfied clients have trusted us with their legal funding needs.
            Here's what some of them have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-medium transition-all duration-300 relative border border-border"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/10" />
              
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-5 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-5 py-2.5 shadow-card border border-border">
            <div className="flex -space-x-2">
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt=""
                  className="w-7 h-7 rounded-full border-2 border-card"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> from 2,000+ reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
