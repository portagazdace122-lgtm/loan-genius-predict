import { useState } from "react";
import { LoanForm, LoanApplication } from "@/components/LoanForm";
import { PredictionResult, PredictionData } from "@/components/PredictionResult";
import { StatsOverview } from "@/components/StatsOverview";
import { predictLoanApproval } from "@/utils/loanPrediction";
import { Button } from "@/components/ui/button";
import { Building2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [prediction, setPrediction] = useState<PredictionData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: LoanApplication) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      const result = predictLoanApproval(data);
      setPrediction(result);
      
      toast.success("Prediction complete!", {
        description: result.approved ? "Your loan has been approved!" : "See details below for more information.",
      });
    } catch (error) {
      toast.error("Prediction failed", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPrediction(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">LoanPredict AI</h1>
              <p className="text-sm text-muted-foreground">Smart Loan Approval System</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Stats Overview */}
        <div className="mb-8 animate-fade-in">
          <StatsOverview />
        </div>

        {/* Application Form or Results */}
        <div className="animate-fade-in">
          {!prediction ? (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Apply for a Loan</h2>
                <p className="text-muted-foreground">
                  Our AI-powered system analyzes your application in seconds
                </p>
              </div>
              <LoanForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <Button
                onClick={handleReset}
                variant="outline"
                className="mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                New Application
              </Button>
              <PredictionResult prediction={prediction} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 LoanPredict AI. Powered by advanced machine learning algorithms.</p>
          <p className="mt-2">
            This is a demonstration system. Predictions are simulated and for educational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
