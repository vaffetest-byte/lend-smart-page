import { useState, useEffect } from "react";
import { DollarSign, Percent, Calendar, Briefcase, PiggyBank, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const CalculatorSection = () => {
  const [caseValue, setCaseValue] = useState(100000);
  const [settlementToday, setSettlementToday] = useState(50000);
  const [monthsUntilTrial, setMonthsUntilTrial] = useState(12);
  const [attorneyFeePercent, setAttorneyFeePercent] = useState(33);
  const [moneyNeeded, setMoneyNeeded] = useState(10000);

  const companyMonthlyRate = 2.5;
  const competitorMonthlyRate = 4.5;

  const [companyAdvanceCost, setCompanyAdvanceCost] = useState(0);
  const [competitorAdvanceCost, setCompetitorAdvanceCost] = useState(0);
  const [attorneyFees, setAttorneyFees] = useState(0);
  const [companyNetAmount, setCompanyNetAmount] = useState(0);
  const [competitorNetAmount, setCompetitorNetAmount] = useState(0);

  useEffect(() => {
    const attFees = (caseValue * attorneyFeePercent) / 100;
    setAttorneyFees(attFees);

    const companyCost = moneyNeeded * (companyMonthlyRate / 100) * monthsUntilTrial;
    const competitorCost = moneyNeeded * (competitorMonthlyRate / 100) * monthsUntilTrial;
    
    setCompanyAdvanceCost(companyCost);
    setCompetitorAdvanceCost(competitorCost);

    const companyNet = caseValue - attFees - moneyNeeded - companyCost;
    const competitorNet = caseValue - attFees - moneyNeeded - competitorCost;
    
    setCompanyNetAmount(companyNet);
    setCompetitorNetAmount(competitorNet);
  }, [caseValue, settlementToday, monthsUntilTrial, attorneyFeePercent, moneyNeeded]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const savings = competitorAdvanceCost - companyAdvanceCost;

  const companyChartData = [
    { name: "Net Amount", value: Math.max(0, companyNetAmount), color: "hsl(220 60% 35%)" },
    { name: "Attorney Fees", value: attorneyFees, color: "hsl(220 30% 75%)" },
    { name: "Advance + Cost", value: moneyNeeded + companyAdvanceCost, color: "hsl(0 65% 45%)" },
  ];

  const competitorChartData = [
    { name: "Net Amount", value: Math.max(0, competitorNetAmount), color: "hsl(220 10% 55%)" },
    { name: "Attorney Fees", value: attorneyFees, color: "hsl(220 10% 75%)" },
    { name: "Advance + Cost", value: moneyNeeded + competitorAdvanceCost, color: "hsl(220 10% 40%)" },
  ];

  const DonutChart = ({ data, centerValue, centerLabel, highlighted = false }: { 
    data: { name: string; value: number; color: string }[]; 
    centerValue: string; 
    centerLabel: string;
    highlighted?: boolean;
  }) => (
    <div className="relative w-44 h-44 mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={68}
            paddingAngle={2}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-xs uppercase tracking-wide ${highlighted ? 'text-primary/60' : 'text-muted-foreground'}`}>
          {centerLabel}
        </span>
        <span className={`text-lg font-bold ${highlighted ? 'text-primary' : 'text-foreground'}`}>
          {centerValue}
        </span>
      </div>
    </div>
  );

  return (
    <section id="calculator" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium mb-4">
            Savings Calculator
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            See How Much You Could Save
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare our competitive rates with other legal funding companies and see the difference.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-lg shadow-medium overflow-hidden border border-border">
            <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
              
              {/* Left Column - Inputs */}
              <div className="p-6 bg-muted/30">
                <h3 className="text-base font-heading font-semibold text-foreground mb-5 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  Your Case Details
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="caseValue" className="text-xs text-muted-foreground font-medium">
                      Case Value
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="caseValue"
                        type="number"
                        value={caseValue}
                        onChange={(e) => setCaseValue(Number(e.target.value))}
                        className="pl-9 h-10 bg-background border-border text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="settlementToday" className="text-xs text-muted-foreground font-medium">
                      Settlement Today
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="settlementToday"
                        type="number"
                        value={settlementToday}
                        onChange={(e) => setSettlementToday(Number(e.target.value))}
                        className="pl-9 h-10 bg-background border-border text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="monthsUntilTrial" className="text-xs text-muted-foreground font-medium">
                      Months Until Trial
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="monthsUntilTrial"
                        type="number"
                        value={monthsUntilTrial}
                        onChange={(e) => setMonthsUntilTrial(Number(e.target.value))}
                        className="pl-9 h-10 bg-background border-border text-sm"
                        min={1}
                        max={60}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="attorneyFeePercent" className="text-xs text-muted-foreground font-medium">
                      Attorney Fee %
                    </Label>
                    <div className="relative">
                      <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="attorneyFeePercent"
                        type="number"
                        value={attorneyFeePercent}
                        onChange={(e) => setAttorneyFeePercent(Number(e.target.value))}
                        className="pl-9 h-10 bg-background border-border text-sm"
                        min={0}
                        max={50}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="moneyNeeded" className="text-xs text-muted-foreground font-medium">
                      Money Needed
                    </Label>
                    <div className="relative">
                      <PiggyBank className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="moneyNeeded"
                        type="number"
                        value={moneyNeeded}
                        onChange={(e) => setMoneyNeeded(Number(e.target.value))}
                        className="pl-9 h-10 bg-background border-border text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column - Company (Featured) */}
              <div className="p-6 bg-primary/3 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
                
                <div className="text-center mb-5">
                  <span className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded mb-2">
                    RECOMMENDED
                  </span>
                  <h3 className="text-base font-heading font-semibold text-primary">
                    With Our Advance
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">2.5% Monthly Rate</p>
                </div>

                <DonutChart 
                  data={companyChartData}
                  centerValue={formatCurrency(caseValue)}
                  centerLabel="Case Value"
                  highlighted={true}
                />

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                      Cost of Advance
                    </span>
                    <span className="font-semibold text-sm text-primary">
                      {formatCurrency(companyAdvanceCost)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
                      Attorney Fees
                    </span>
                    <span className="font-semibold text-sm text-foreground">
                      {formatCurrency(attorneyFees)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2.5 bg-primary/10 rounded px-2.5 -mx-2.5">
                    <span className="text-xs font-medium text-primary flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5" />
                      Net Amount
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {formatCurrency(companyNetAmount)}
                    </span>
                  </div>
                </div>

                {savings > 0 && (
                  <div className="mt-4 p-2.5 bg-primary/10 border border-primary/20 rounded text-center">
                    <span className="text-primary font-semibold text-sm">
                      You Save {formatCurrency(savings)}
                    </span>
                  </div>
                )}
              </div>

              {/* Right Column - Competitor */}
              <div className="p-6 bg-muted/20">
                <div className="text-center mb-5">
                  <h3 className="text-base font-heading font-semibold text-muted-foreground mt-6">
                    Competitor
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">4.5% Monthly Rate</p>
                </div>

                <DonutChart 
                  data={competitorChartData}
                  centerValue={formatCurrency(caseValue)}
                  centerLabel="Case Value"
                  highlighted={false}
                />

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center justify-between py-2 border-b border-border/30">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <X className="w-3.5 h-3.5 text-accent" />
                      Cost of Advance
                    </span>
                    <span className="font-semibold text-sm text-muted-foreground">
                      {formatCurrency(competitorAdvanceCost)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-border/30">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-muted-foreground/60" />
                      Attorney Fees
                    </span>
                    <span className="font-semibold text-sm text-muted-foreground">
                      {formatCurrency(attorneyFees)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2.5 bg-muted/50 rounded px-2.5 -mx-2.5">
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5" />
                      Net Amount
                    </span>
                    <span className="text-lg font-bold text-muted-foreground">
                      {formatCurrency(competitorNetAmount)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-2.5 bg-accent/10 border border-accent/20 rounded text-center">
                  <span className="text-accent font-semibold text-sm">
                    Higher Cost: +{formatCurrency(savings)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-5 flex flex-wrap justify-center gap-5 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Net Amount (Ours)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
              <span className="text-muted-foreground">Advance + Cost</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-light"></div>
              <span className="text-muted-foreground">Attorney Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
