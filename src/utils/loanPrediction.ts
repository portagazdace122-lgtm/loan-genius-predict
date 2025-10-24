import { LoanApplication } from "@/components/LoanForm";
import { PredictionData } from "@/components/PredictionResult";

/**
 * Simulated ML model for loan prediction
 * In production, this would call a real ML API endpoint
 */
export const predictLoanApproval = (application: LoanApplication): PredictionData => {
  // Calculate basic scoring factors
  const totalIncome = application.applicantIncome + application.coapplicantIncome;
  const incomeToLoanRatio = totalIncome / (application.loanAmount || 1);
  const hasGoodCredit = application.creditHistory === "1";
  const isGraduate = application.education === "Graduate";
  
  // Scoring algorithm (simplified ML simulation)
  let score = 50;
  
  // Credit history is most important
  if (hasGoodCredit) score += 25;
  else score -= 20;
  
  // Income to loan ratio
  if (incomeToLoanRatio > 0.4) score += 15;
  else if (incomeToLoanRatio > 0.25) score += 10;
  else if (incomeToLoanRatio > 0.15) score += 5;
  else score -= 10;
  
  // Education
  if (isGraduate) score += 8;
  
  // Employment status
  if (application.selfEmployed === "No") score += 5;
  
  // Property area (Urban is preferred)
  if (application.propertyArea === "Urban") score += 7;
  else if (application.propertyArea === "Semiurban") score += 4;
  
  // Loan term (longer terms are riskier)
  if (application.loanAmountTerm <= 360) score += 5;
  else score -= 3;
  
  // Married and dependents
  if (application.married === "Yes") score += 3;
  if (application.dependents === "0") score += 2;
  
  // Cap score between 0 and 100
  score = Math.max(0, Math.min(100, score));
  
  const approved = score >= 60;
  
  // Generate factors
  const factors = [
    {
      name: "Credit History",
      impact: hasGoodCredit ? ("positive" as const) : ("negative" as const),
      value: hasGoodCredit ? "Good - Meets guidelines" : "Poor - Does not meet guidelines",
    },
    {
      name: "Income to Loan Ratio",
      impact: incomeToLoanRatio > 0.25 ? ("positive" as const) : ("negative" as const),
      value: `${(incomeToLoanRatio * 100).toFixed(1)}% (${incomeToLoanRatio > 0.25 ? "Strong" : "Weak"})`,
    },
    {
      name: "Total Income",
      impact: totalIncome > 5000 ? ("positive" as const) : ("neutral" as const),
      value: `$${totalIncome.toLocaleString()} monthly`,
    },
    {
      name: "Education",
      impact: isGraduate ? ("positive" as const) : ("neutral" as const),
      value: application.education,
    },
    {
      name: "Property Area",
      impact: application.propertyArea === "Urban" ? ("positive" as const) : ("neutral" as const),
      value: application.propertyArea,
    },
    {
      name: "Loan Term",
      impact: application.loanAmountTerm <= 360 ? ("positive" as const) : ("negative" as const),
      value: `${application.loanAmountTerm} months`,
    },
  ];
  
  // Generate recommendation
  let recommendation = "";
  if (approved) {
    recommendation = "Your application shows strong financial indicators. We're pleased to offer you this loan.";
  } else {
    if (!hasGoodCredit) {
      recommendation = "Improving your credit history would significantly increase your approval chances.";
    } else if (incomeToLoanRatio < 0.15) {
      recommendation = "Consider applying for a smaller loan amount or increasing your income sources.";
    } else {
      recommendation = "We recommend building your financial profile before reapplying.";
    }
  }
  
  return {
    approved,
    confidence: score,
    factors,
    recommendation,
  };
};
