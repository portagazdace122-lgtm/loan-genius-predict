import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>We collect information you provide when using our loan prediction service, including personal details, financial information, and application data.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>Your data is used to provide accurate loan predictions, improve our services, and communicate with you about your application status.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal and financial information from unauthorized access.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal information. Data may be shared with authorized financial institutions only with your consent.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information at any time by contacting us.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Contact Us</h2>
            <p>For privacy-related questions, contact us at support@loanpredict.ai or +91 40 1234 5678.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
