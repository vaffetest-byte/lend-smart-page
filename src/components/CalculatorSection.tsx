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

  // Company rates (lower/better)
  const companyMonthlyRate = 2.5; // 2.5% per month
  // Competitor rates (higher)
  const competitorMonthlyRate = 4.5; // 4.5% per month

  const [companyAdvanceCost, setCompanyAdvanceCost] = useState(0);
  const [competitorAdvanceCost, setCompetitorAdvanceCost] = useState(0);
  const [attorneyFees, setAttorneyFees] = useState(0);
  const [companyNetAmount, setCompanyNetAmount] = useState(0);
  const [competitorNetAmount, setCompetitorNetAmount] = useState(0);

  useEffect(() => {
    // Calculate attorney fees
    const attFees = (caseValue * attorneyFeePercent) / 100;
    setAttorneyFees(attFees);

    // Calculate advance costs (simple interest for demo)
    const companyCost = moneyNeeded * (companyMonthlyRate / 100) * monthsUntilTrial;
    const competitorCost = moneyNeeded * (competitorMonthlyRate / 100) * monthsUntilTrial;
    
    setCompanyAdvanceCost(companyCost);
    setCompetitorAdvanceCost(competitorCost);

    // Calculate net amounts
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

  // Donut chart data for company
  const companyChartData = [
    { name: "Net Amount", value: Math.max(0, companyNetAmount), color: "hsl(var(--primary))" },
    { name: "Attorney Fees", value: attorneyFees, color: "hsl(210 40% 80%)" },
    { name: "Advance + Cost", value: moneyNeeded + companyAdvanceCost, color: "hsl(var(--gold))" },
  ];

  // Donut chart data for competitor
  const competitorChartData = [
    { name: "Net Amount", value: Math.max(0, competitorNetAmount), color: "hsl(0 0% 60%)" },
    { name: "Attorney Fees", value: attorneyFees, color: "hsl(0 0% 80%)" },
    { name: "Advance + Cost", value: moneyNeeded + competitorAdvanceCost, color: "hsl(0 0% 45%)" },
  ];

  const DonutChart = ({ data, centerValue, centerLabel, highlighted = false }: { 
    data: { name: string; value: number; color: string }[]; 
    centerValue: string; 
    centerLabel: string;
    highlighted?: boolean;
  }) => (
    <div className="relative w-48 h-48 mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={75}
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
        <span className={`text-xs uppercase tracking-wide ${highlighted ? 'text-primary/70' : 'text-muted-foreground'}`}>
          {centerLabel}
        </span>
        <span className={`text-xl font-bold ${highlighted ? 'text-primary' : 'text-foreground'}`}>
          {centerValue}
        </span>
      </div>
    </div>
  );

  return (
    <section id="calculator" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Savings Calculator
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            See How Much You Could Save
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare our competitive rates with other legal funding companies and see the difference.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-medium overflow-hidden">
            <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
              
              {/* Left Column - Inputs */}
              <div className="p-6 lg:p-8 bg-secondary/20">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Your Case Details
                </h3>
                
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="caseValue" className="text-sm text-muted-foreground font-medium">
                      Case Value
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                      <Input
                        id="caseValue"
                        type="number"
                        value={caseValue}
                        onChange={(e) => setCaseValue(Number(e.target.value))}
                        className="pl-9 h-11 bg-background border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="settlementToday" className="text-sm text-muted-foreground font-medium">
                      Settlement Today
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                      <Input
                        id="settlementToday"
                        type="number"
                        value={settlementToday}
                        onChange={(e) => setSettlementToday(Number(e.target.value))}
                        className="pl-9 h-11 bg-background border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthsUntilTrial" className="text-sm text-muted-foreground font-medium">
                      Months Until Trial
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                      <Input
                        id="monthsUntilTrial"
                        type="number"
                        value={monthsUntilTrial}
                        onChange={(e) => setMonthsUntilTrial(Number(e.target.value))}
                        className="pl-9 h-11 bg-background border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                        min={1}
                        max={60}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attorneyFeePercent" className="text-sm text-muted-foreground font-medium">
                      Attorney Fee Percentage
                    </Label>
                    <div className="relative">
                      <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                      <Input
                        id="attorneyFeePercent"
                        type="number"
                        value={attorneyFeePercent}
                        onChange={(e) => setAttorneyFeePercent(Number(e.target.value))}
                        className="pl-9 h-11 bg-background border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                        min={0}
                        max={50}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="moneyNeeded" className="text-sm text-muted-foreground font-medium">
                      Money Needed Now
                    </Label>
                    <div className="relative">
                      <PiggyBank className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                      <Input
                        id="moneyNeeded"
                        type="number"
                        value={moneyNeeded}
                        onChange={(e) => setMoneyNeeded(Number(e.target.value))}
                        className="pl-9 h-11 bg-background border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column - Company (Featured) */}
              <div className="p-6 lg:p-8 bg-primary/5 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-gold"></div>
                
                <div className="text-center mb-6">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                    RECOMMENDED
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-primary">
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

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Cost of Advance
                    </span>
                    <span className="font-semibold text-primary">
                      {formatCurrency(companyAdvanceCost)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary/60" />
                      Attorney Fees
                    </span>
                    <span className="font-semibold text-foreground">
                      {formatCurrency(attorneyFees)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 bg-primary/10 rounded-lg px-3 -mx-3">
                    <span className="text-sm font-medium text-primary flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Net Amount
                    </span>
                    <span className="text-xl font-bold text-primary">
                      {formatCurrency(companyNetAmount)}
                    </span>
                  </div>
                </div>

                {savings > 0 && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                    <span className="text-green-700 font-semibold text-sm">
                      You Save {formatCurrency(savings)}!
                    </span>
                  </div>
                )}
              </div>

              {/* Right Column - Competitor */}
              <div className="p-6 lg:p-8 bg-muted/30">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-heading font-semibold text-muted-foreground mt-7">
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

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-border/30">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400" />
                      Cost of Advance
                    </span>
                    <span className="font-semibold text-muted-foreground">
                      {formatCurrency(competitorAdvanceCost)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-border/30">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-muted-foreground/60" />
                      Attorney Fees
                    </span>
                    <span className="font-semibold text-muted-foreground">
                      {formatCurrency(attorneyFees)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 bg-muted/50 rounded-lg px-3 -mx-3">
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Net Amount
                    </span>
                    <span className="text-xl font-bold text-muted-foreground">
                      {formatCurrency(competitorNetAmount)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-center">
                  <span className="text-red-600 font-semibold text-sm">
                    Higher Cost: +{formatCurrency(savings)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Net Amount (Ours)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold"></div>
              <span className="text-muted-foreground">Advance + Cost</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(210 40% 80%)' }}></div>
              <span className="text-muted-foreground">Attorney Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
