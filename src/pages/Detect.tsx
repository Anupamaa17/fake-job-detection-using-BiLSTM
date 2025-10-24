import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";

type AnalysisResult = "FAKE" | "GENUINE" | null;

const Detect = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult>(null);

  const handleAnalyzeJob = () => {
    if (!jobDescription.trim()) {
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    // Simulate analysis with placeholder logic
    setTimeout(() => {
      // Simple placeholder: if description contains certain keywords, mark as fake
      const suspiciousKeywords = ["wire transfer", "western union", "processing fee", "advance payment", "bitcoin"];
      const lowerDescription = jobDescription.toLowerCase();
      const isSuspicious = suspiciousKeywords.some(keyword => lowerDescription.includes(keyword));
      
      setResult(isSuspicious ? "FAKE" : "GENUINE");
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col py-12 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl flex-1">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Job Description Analysis</h1>
          <p className="text-lg text-muted-foreground">
            Paste the complete job description below for Bi-LSTM powered analysis
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border shadow-lg p-8">
          <div className="mb-6">
            <label htmlFor="jobDescription" className="block text-sm font-medium mb-2 text-card-foreground">
              Job Description
            </label>
            <Textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the full job description here for Bi-LSTM analysis...&#10;&#10;Include details like:&#10;- Job title and responsibilities&#10;- Company information&#10;- Required qualifications&#10;- Compensation details&#10;- Application process"
              className="min-h-[300px] text-base resize-y"
            />
          </div>

          <Button
            onClick={handleAnalyzeJob}
            disabled={!jobDescription.trim() || isAnalyzing}
            className="w-full text-lg py-6"
            size="lg"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing with Bi-LSTM model...
              </>
            ) : (
              "Analyze Job"
            )}
          </Button>

          {/* Results Display */}
          <div className="mt-8">
            {!result && !isAnalyzing && (
              <div className="text-center py-12 text-muted-foreground border-2 border-dashed border-border rounded-lg">
                Analysis results will appear here
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-lg text-muted-foreground">Processing with Bi-LSTM model...</p>
              </div>
            )}

            {result === "FAKE" && (
              <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-8 text-center animate-in fade-in duration-500">
                <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-destructive mb-2">
                  ⚠ FRAUD ALERT
                </h2>
                <p className="text-xl text-destructive/90">
                  This Job is Highly Likely to be FAKE
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Do not share personal information or make any payments. Report this posting to the platform.
                </p>
              </div>
            )}

            {result === "GENUINE" && (
              <div className="bg-success/10 border-2 border-success rounded-lg p-8 text-center animate-in fade-in duration-500">
                <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-success mb-2">
                  ✅ Verified
                </h2>
                <p className="text-xl text-success/90">
                  This Job is Highly Likely to be Genuine
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  While our analysis suggests this is legitimate, always do your own research before applying.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detect;
