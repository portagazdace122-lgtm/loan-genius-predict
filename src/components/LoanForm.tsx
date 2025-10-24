import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface LoanApplication {
  gender: string;
  married: string;
  dependents: string;
  education: string;
  selfEmployed: string;
  applicantIncome: number;
  coapplicantIncome: number;
  loanAmount: number;
  loanAmountTerm: number;
  creditHistory: string;
  propertyArea: string;
}

interface LoanFormProps {
  onSubmit: (data: LoanApplication) => void;
  isLoading?: boolean;
}

export const LoanForm = ({ onSubmit, isLoading }: LoanFormProps) => {
  const [formData, setFormData] = useState<LoanApplication>({
    gender: "",
    married: "",
    dependents: "",
    education: "",
    selfEmployed: "",
    applicantIncome: 0,
    coapplicantIncome: 0,
    loanAmount: 0,
    loanAmountTerm: 360,
    creditHistory: "",
    propertyArea: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateField = (field: keyof LoanApplication, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="w-full shadow-lg border-2 hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardTitle className="text-3xl">Loan Application</CardTitle>
          <CardDescription className="text-base">Fill in your details to check loan eligibility instantly</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={formData.gender} onValueChange={(value) => updateField("gender", value)}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="married">Marital Status</Label>
              <Select value={formData.married} onValueChange={(value) => updateField("married", value)}>
                <SelectTrigger id="married">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Married</SelectItem>
                  <SelectItem value="No">Single</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dependents">Dependents</Label>
              <Select value={formData.dependents} onValueChange={(value) => updateField("dependents", value)}>
                <SelectTrigger id="dependents">
                  <SelectValue placeholder="Number of dependents" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Education</Label>
              <Select value={formData.education} onValueChange={(value) => updateField("education", value)}>
                <SelectTrigger id="education">
                  <SelectValue placeholder="Select education" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Graduate">Graduate</SelectItem>
                  <SelectItem value="Not Graduate">Not Graduate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="selfEmployed">Self Employed</Label>
              <Select value={formData.selfEmployed} onValueChange={(value) => updateField("selfEmployed", value)}>
                <SelectTrigger id="selfEmployed">
                  <SelectValue placeholder="Employment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="creditHistory">Credit History</Label>
              <Select value={formData.creditHistory} onValueChange={(value) => updateField("creditHistory", value)}>
                <SelectTrigger id="creditHistory">
                  <SelectValue placeholder="Select credit history" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Good (Meets guidelines)</SelectItem>
                  <SelectItem value="0">Poor (Does not meet)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="applicantIncome">Applicant Income ($)</Label>
              <Input
                id="applicantIncome"
                type="number"
                value={formData.applicantIncome || ""}
                onChange={(e) => updateField("applicantIncome", Number(e.target.value))}
                placeholder="5000"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coapplicantIncome">Co-applicant Income ($)</Label>
              <Input
                id="coapplicantIncome"
                type="number"
                value={formData.coapplicantIncome || ""}
                onChange={(e) => updateField("coapplicantIncome", Number(e.target.value))}
                placeholder="0"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan Amount ($)</Label>
              <Input
                id="loanAmount"
                type="number"
                value={formData.loanAmount || ""}
                onChange={(e) => updateField("loanAmount", Number(e.target.value))}
                placeholder="150000"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="loanAmountTerm">Loan Term (months)</Label>
              <Input
                id="loanAmountTerm"
                type="number"
                value={formData.loanAmountTerm || ""}
                onChange={(e) => updateField("loanAmountTerm", Number(e.target.value))}
                placeholder="360"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="propertyArea">Property Area</Label>
              <Select value={formData.propertyArea} onValueChange={(value) => updateField("propertyArea", value)}>
                <SelectTrigger id="propertyArea">
                  <SelectValue placeholder="Select area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Urban">Urban</SelectItem>
                  <SelectItem value="Semiurban">Semi-urban</SelectItem>
                  <SelectItem value="Rural">Rural</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 text-lg py-6 shadow-md hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? "Analyzing..." : "Check Loan Eligibility"}
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
    </motion.div>
  );
};
