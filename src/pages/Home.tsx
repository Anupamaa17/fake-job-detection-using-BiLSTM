import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, AlertTriangle, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Stop Financial Fraud and Data Theft: Verify Job Offers Instantly
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                With the rapid expansion of fake online job portals, job seekers face severe risks including 
                financial fraud, identity theft, and loss of trust. Our advanced Bi-LSTM powered system 
                analyzes job descriptions to protect you from fraudulent postings.
              </p>
              <Button 
                onClick={() => navigate("/detect")}
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Start Detection
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Why Use Our System?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Advanced Protection</h3>
                <p className="text-muted-foreground">
                  Bi-LSTM deep learning technology analyzes contextual patterns to identify fraudulent job postings with high accuracy.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Fraud Prevention</h3>
                <p className="text-muted-foreground">
                  Protect yourself from financial loss, data theft, and identity fraud by verifying job offers before applying.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Instant Analysis</h3>
                <p className="text-muted-foreground">
                  Get immediate results on job posting authenticity. Simply paste the description and analyze in seconds.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
