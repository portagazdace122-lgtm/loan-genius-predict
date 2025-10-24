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
    <div className="space-y-6 animate-fade-in">
      <Card className={`shadow-lg border-2 ${prediction.approved ? "border-success" : "border-destructive"}`}>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {prediction.approved ? (
              <CheckCircle2 className="h-20 w-20 text-success" />
            ) : (
              <XCircle className="h-20 w-20 text-destructive" />
            )}
          </div>
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
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Confidence Score</span>
              <span className="text-sm font-bold">{prediction.confidence}%</span>
            </div>
            <Progress value={prediction.confidence} className="h-3" />
          </div>

          {prediction.recommendation && (
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">{prediction.recommendation}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="shadow-md">
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
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
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
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
