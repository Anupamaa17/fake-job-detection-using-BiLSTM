import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Users, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Project Overview: Fake Job Detection System
          </h1>
          <p className="text-lg text-muted-foreground">
            Academic Year: 2025-2026
          </p>
        </div>

        {/* The Challenge */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <Shield className="h-6 w-6 text-destructive" />
              </div>
              <CardTitle className="text-2xl">The Challenge</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The rapid expansion of online job portals has created unprecedented opportunities for job seekers. 
              However, this growth has also given rise to a concerning trend: fake job postings. These fraudulent 
              listings result in severe consequences including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Financial fraud through advance fee scams and fake payment requests</li>
              <li>Data theft and identity theft through collection of personal information</li>
              <li>Loss of trust in legitimate online recruitment platforms</li>
              <li>Wasted time and emotional distress for job seekers</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The problem has reached a scale where manual verification is no longer feasible, necessitating 
              automated detection systems.
            </p>
          </CardContent>
        </Card>

        {/* The Solution */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">The Solution: Advanced Technology</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our system employs a hybrid approach that combines traditional machine learning techniques with 
              advanced deep learning architecture. At its core is the <strong>Bidirectional Long Short-Term 
              Memory (Bi-LSTM)</strong> neural network.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Why Bi-LSTM?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bi-LSTM captures contextual dependencies from both past and future contexts in sequential data, 
                enabling nuanced analysis of job descriptions. Unlike traditional methods that analyze text in 
                isolation, Bi-LSTM understands the relationships between words and phrases, detecting subtle 
                patterns that indicate fraudulent intent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-card-foreground">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Contextual text analysis</li>
                  <li>• Pattern recognition</li>
                  <li>• Real-time processing</li>
                  <li>• High accuracy detection</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-card-foreground">Technology Stack</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Deep Learning (Bi-LSTM)</li>
                  <li>• Natural Language Processing</li>
                  <li>• Machine Learning algorithms</li>
                  <li>• React web interface</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Team */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-success/10 rounded-lg">
                <Users className="h-6 w-6 text-success" />
              </div>
              <CardTitle className="text-2xl">Project Team</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg text-foreground">Project Guide</h3>
                </div>
                <p className="text-muted-foreground">
                  <strong>Geethu A</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Assistant Professor, Department of Computer Science & Engineering
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Team Members</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center border border-border">
                    <p className="font-semibold text-foreground">Aloki Umesh</p>
                    <p className="text-sm text-muted-foreground">PJR22CS005</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center border border-border">
                    <p className="font-semibold text-foreground">Anupama M S</p>
                    <p className="text-sm text-muted-foreground">PJR22CS010</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center border border-border">
                    <p className="font-semibold text-foreground">Sitharamol S</p>
                    <p className="text-sm text-muted-foreground">PJR22CS036</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
