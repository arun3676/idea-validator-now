import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, MessageSquare, BarChart3 } from "lucide-react";

const Index = () => {
  const [idea, setIdea] = useState("");

  const handleValidate = () => {
    if (idea.trim()) {
      console.log("Validating idea:", idea);
      // TODO: Connect to validation API
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">IdeaProof</h2>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Validate Your Startup Idea in 90 Seconds
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            AI advisors research competitors and tell you if your idea is worth building—before you waste months.
          </p>

          {/* Input Form */}
          <div className="max-w-2xl mx-auto mb-4">
            <Textarea
              placeholder="Describe your startup idea..."
              className="min-h-[120px] text-base resize-none"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <Button
              size="lg"
              className="w-full mt-4 text-lg h-14"
              onClick={handleValidate}
            >
              Validate My Idea
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Free • Takes 90 seconds • No signup required
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-border bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">🔍 AI Research</h3>
              <p className="text-muted-foreground">
                Searches Product Hunt, Google, and 50+ sources
              </p>
            </Card>

            <Card className="p-8 text-center border-border bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">💬 Expert Analysis</h3>
              <p className="text-muted-foreground">
                Two AI advisors give honest feedback
              </p>
            </Card>

            <Card className="p-8 text-center border-border bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">📊 Clear Verdict</h3>
              <p className="text-muted-foreground">
                Get competition score + pivot suggestions
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            See It In Action
          </h2>
          <Card className="p-8 border-border bg-card">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Idea Analyzed:</p>
                <p className="text-base font-medium text-foreground">
                  "An AI-powered meal planning app that generates personalized recipes based on dietary restrictions"
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Competitors Found</p>
                  <p className="text-3xl font-bold text-foreground">12</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Opportunity Score</p>
                  <p className="text-3xl font-bold text-primary">7.2/10</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Market Size</p>
                  <p className="text-3xl font-bold text-foreground">$8.2B</p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-semibold text-foreground mb-2">Advisor Feedback:</p>
                <p className="text-base text-muted-foreground italic">
                  "Strong market demand exists, but you'll need to differentiate from established players like Yummly and Mealime. 
                  Consider focusing on a specific niche like athletes or people with rare food allergies..."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <Card className="p-8 border-border bg-card">
              <p className="text-4xl font-bold text-foreground mb-2">147</p>
              <p className="text-muted-foreground">Ideas validated in 48 hours</p>
            </Card>
            <Card className="p-8 border-border bg-card">
              <p className="text-4xl font-bold text-primary mb-2">96.6%</p>
              <p className="text-muted-foreground">Success rate</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to validate your idea?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of founders who validated their ideas before building.
          </p>
          <div className="max-w-xl mx-auto">
            <Textarea
              placeholder="Describe your startup idea..."
              className="min-h-[100px] text-base resize-none"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <Button
              size="lg"
              className="w-full mt-4 text-lg h-14"
              onClick={handleValidate}
            >
              Validate My Idea
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 IdeaProof. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;