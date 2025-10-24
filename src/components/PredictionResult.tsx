import { motion } from "framer-motion";
import { CheckCircle2, XCircle, TrendingUp, DollarSign, Calendar, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export interface PredictionData {
  approved: boolean;
  confidence: number;
  factors: {
    name: string;
    impact: "positive" | "negative" | "neutral";
    value: string;
  }[];
  recommendation?: string;
}

interface PredictionResultProps {
  prediction: PredictionData;
}

export const PredictionResult = ({ prediction }: PredictionResultProps) => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className={`shadow-xl border-2 ${prediction.approved ? "border-success" : "border-destructive"}`}>
          <CardHeader className="text-center">
            <motion.div 
              className="flex justify-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {prediction.approved ? (
                <CheckCircle2 className="h-20 w-20 text-success" />
              ) : (
                <XCircle className="h-20 w-20 text-destructive" />
              )}
            </motion.div>
            <CardTitle className="text-3xl">
              {prediction.approved ? "Loan Approved!" : "Loan Not Approved"}
            </CardTitle>
            <CardDescription className="text-lg">
              {prediction.approved
                ? "Congratulations! Your loan application has been approved."
                : "Unfortunately, your loan application does not meet our current criteria."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Confidence Score</span>
                <span className="text-sm font-bold">{prediction.confidence}%</span>
              </div>
              <Progress value={prediction.confidence} className="h-3" />
            </motion.div>

            {prediction.recommendation && (
              <motion.div 
                className="bg-muted p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm text-muted-foreground">{prediction.recommendation}</p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Contributing Factors
          </CardTitle>
          <CardDescription>Key factors influencing the decision</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {prediction.factors.map((factor, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  {factor.name.includes("Income") && <DollarSign className="h-4 w-4 text-muted-foreground" />}
                  {factor.name.includes("Term") && <Calendar className="h-4 w-4 text-muted-foreground" />}
                  {factor.name.includes("Property") && <Home className="h-4 w-4 text-muted-foreground" />}
                  <div>
                    <p className="text-sm font-medium">{factor.name}</p>
                    <p className="text-xs text-muted-foreground">{factor.value}</p>
                  </div>
                </div>
                <Badge
                  variant={
                    factor.impact === "positive"
                      ? "default"
                      : factor.impact === "negative"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {factor.impact === "positive" ? "+" : factor.impact === "negative" ? "-" : "~"}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
      </motion.div>
    </div>
  );
};
