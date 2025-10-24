import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoanForm, LoanApplication } from "@/components/LoanForm";
import { PredictionResult, PredictionData } from "@/components/PredictionResult";
import { StatsOverview } from "@/components/StatsOverview";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ModelInsights } from "@/components/ModelInsights";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { predictLoanApproval } from "@/utils/loanPrediction";
import { Button } from "@/components/ui/button";
import { Building2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [prediction, setPrediction] = useState<PredictionData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (data: LoanApplication) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      const result = predictLoanApproval(data);
      setPrediction(result);
      
      toast.success("Prediction complete!", {
        description: result.approved ? "Your loan has been approved!" : "See details below for more information.",
      });

      // Scroll to results
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
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
    setTimeout(scrollToForm, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b bg-card/80 backdrop-blur-sm shadow-sm sticky top-0 z-40"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">LoanPredict AI</h1>
                <p className="text-xs text-muted-foreground">Smart Loan Approval System</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
              <a href="#insights" className="text-sm hover:text-primary transition-colors">Insights</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main>
        {!prediction ? (
          <>
            <Hero onGetStarted={scrollToForm} />
            <Features />
            <ModelInsights />
            <About />

            {/* Application Form Section */}
            <section id="apply" ref={formRef} className="py-20 bg-background">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-bold mb-4 md:text-4xl">
                    Apply for a Loan
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Our AI-powered system analyzes your application in seconds
                  </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    <StatsOverview />
                  </div>
                  <LoanForm onSubmit={handleSubmit} isLoading={isLoading} />
                </div>
              </div>
            </section>

            <Contact />
          </>
        ) : (
          <section className="py-12 min-h-screen">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="mb-6 hover:bg-muted transition-all duration-300"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    New Application
                  </Button>
                </motion.div>
                <PredictionResult prediction={prediction} />
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
