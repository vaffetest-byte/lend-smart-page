import { useState, useEffect } from "react";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CalculatorSection = () => {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(5);
  const [term, setTerm] = useState(36);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    if (amount > 0 && rate > 0 && term > 0) {
      const monthlyInterest = rate / 100 / 12;
      const numberOfPayments = term;
      const payment =
        (amount * monthlyInterest) /
        (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
      
      if (isFinite(payment)) {
        setMonthlyPayment(payment);
        setTotalPayment(payment * numberOfPayments);
      }
    }
  }, [amount, rate, term]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <section id="calculator" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Loan Calculator
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Calculate Your Monthly Payment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our calculator to estimate your monthly payments and see how much you could save.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-medium p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Fields */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="flex items-center gap-2 text-foreground font-medium">
                    <DollarSign className="w-4 h-4 text-gold" />
                    Loan Amount
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="pl-8 h-12 text-lg border-border focus:border-primary"
                      min={1000}
                      max={1000000}
                    />
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={100000}
                    step={1000}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rate" className="flex items-center gap-2 text-foreground font-medium">
                    <Percent className="w-4 h-4 text-gold" />
                    Interest Rate (%)
                  </Label>
                  <div className="relative">
                    <Input
                      id="rate"
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="h-12 text-lg border-border focus:border-primary"
                      min={0.1}
                      max={30}
                      step={0.1}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    step={0.5}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="term" className="flex items-center gap-2 text-foreground font-medium">
                    <Calendar className="w-4 h-4 text-gold" />
                    Loan Term (months)
                  </Label>
                  <Input
                    id="term"
                    type="number"
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="h-12 text-lg border-border focus:border-primary"
                    min={6}
                    max={360}
                  />
                  <input
                    type="range"
                    min={6}
                    max={84}
                    step={6}
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-center">
                <div className="bg-primary rounded-2xl p-8 text-center">
                  <Calculator className="w-12 h-12 text-gold mx-auto mb-4" />
                  <p className="text-primary-foreground/80 text-sm uppercase tracking-wide mb-2">
                    Estimated Monthly Payment
                  </p>
                  <p className="text-5xl font-heading font-bold text-primary-foreground mb-6">
                    {formatCurrency(monthlyPayment)}
                  </p>
                  
                  <div className="border-t border-primary-foreground/20 pt-6 space-y-3">
                    <div className="flex justify-between text-primary-foreground/80">
                      <span>Total Payment</span>
                      <span className="font-semibold text-primary-foreground">
                        {formatCurrency(totalPayment)}
                      </span>
                    </div>
                    <div className="flex justify-between text-primary-foreground/80">
                      <span>Total Interest</span>
                      <span className="font-semibold text-gold">
                        {formatCurrency(totalPayment - amount)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
