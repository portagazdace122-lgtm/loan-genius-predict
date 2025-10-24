import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files stored on your device that help us improve your experience and analyze site usage.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. Types of Cookies We Use</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Analytics Cookies:</strong> Collect information about site usage and performance</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. How We Use Cookies</h2>
            <p>We use cookies to enhance user experience, maintain session data, analyze traffic patterns, and improve our prediction algorithms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Managing Cookies</h2>
            <p>You can control cookies through your browser settings. Note that disabling cookies may affect site functionality.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Third-Party Cookies</h2>
            <p>We may use third-party services that set their own cookies for analytics and service improvement purposes.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Updates to This Policy</h2>
            <p>We may update this Cookie Policy periodically. Check this page regularly for any changes.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">7. Contact</h2>
            <p>Questions about our cookie usage? Contact us at support@loanpredict.ai</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
