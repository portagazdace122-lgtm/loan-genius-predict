import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using LoanPredict AI, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. Service Description</h2>
            <p>LoanPredict AI provides AI-powered loan approval predictions. These predictions are estimates and do not guarantee actual loan approval.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. User Responsibilities</h2>
            <p>You agree to provide accurate information and use the service only for lawful purposes. Any misuse may result in service termination.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
            <p>All content, algorithms, and trademarks on this platform are owned by LoanPredict AI and protected by intellectual property laws.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
            <p>LoanPredict AI is not liable for any decisions made based on our predictions. Users should consult with financial advisors for official advice.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance of new terms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">7. Contact</h2>
            <p>Questions about these terms? Contact us at support@loanpredict.ai</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
