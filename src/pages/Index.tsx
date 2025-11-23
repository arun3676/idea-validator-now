import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, MessageSquare, BarChart3, CheckCircle2 } from "lucide-react";

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
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
              <h2 className="text-2xl font-bold text-foreground">IdeaProof</h2>
            </div>
            <Button variant="outline" size="sm" className="font-medium">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(158,64%,52%,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(14,90%,63%,0.05)_0%,transparent_50%)]" />
        
        <div className="container mx-auto max-w-5xl text-center relative space-y-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              147 ideas validated in 48 hours
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Validate Your Startup<br />
              Idea in <span className="text-primary">90 Seconds</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
              AI advisors research competitors and tell you if your idea is worth building—<strong className="text-foreground">before you waste months</strong>.
            </p>
          </div>

          {/* Input Form */}
          <div className="max-w-2xl mx-auto space-y-6">
            <Card className="p-2 shadow-strong border-border/50">
              <Textarea
                placeholder="Describe your startup idea in a few sentences..."
                className="min-h-[160px] text-base resize-none border-0 focus-visible:ring-0 bg-background"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
              />
              <Button
                size="lg"
                className="w-full text-lg h-14 font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={handleValidate}
              >
                Validate My Idea
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
            <p className="text-sm text-muted-foreground font-medium">
              Free • Takes 90 seconds • No signup required
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
              Three steps to validate your next big idea
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="p-10 border-border/50 bg-background shadow-elevated hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">AI Research</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Searches Product Hunt, Google, and 50+ sources to find every competitor in your space
              </p>
            </Card>

            <Card className="p-10 border-border/50 bg-background shadow-elevated hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Expert Analysis</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Two AI advisors debate your idea and give brutally honest feedback
              </p>
            </Card>

            <Card className="p-10 border-border/50 bg-background shadow-elevated hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
                <BarChart3 className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Clear Verdict</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Get competition score, market size, and pivot suggestions in one report
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              See a Real Validation
            </h2>
            <p className="text-xl text-muted-foreground font-normal">
              Here's what founders get in 90 seconds
            </p>
          </div>
          
          <Card className="p-12 md:p-16 border-border/50 bg-background shadow-strong">
            <div className="space-y-12">
              <div>
                <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">Idea Analyzed</p>
                <p className="text-xl font-medium text-foreground leading-relaxed">
                  "An AI-powered meal planning app that generates personalized recipes based on dietary restrictions and generates shopping lists"
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
                  <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Competitors Found</p>
                  <p className="text-6xl font-bold text-foreground mb-3">12</p>
                  <p className="text-sm text-muted-foreground">Including Yummly, Mealime</p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                  <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Opportunity Score</p>
                  <p className="text-6xl font-bold text-primary mb-3">7.2<span className="text-2xl text-muted-foreground">/10</span></p>
                  <p className="text-sm text-muted-foreground">Worth pursuing</p>
                </div>
                <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
                  <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Market Size</p>
                  <p className="text-6xl font-bold text-foreground mb-3">$8.2B</p>
                  <p className="text-sm text-muted-foreground">Global TAM 2025</p>
                </div>
              </div>

              <div className="border-t border-border/50 pt-12">
                <p className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wide">Advisor Verdict</p>
                <div className="bg-muted/30 rounded-xl p-8 border border-border/50">
                  <p className="text-lg text-foreground leading-relaxed">
                    "Strong market demand exists, but you'll need to differentiate from established players like Yummly and Mealime. 
                    <strong className="text-primary"> Consider focusing on a specific niche</strong> like athletes or people with rare food allergies. 
                    The AI-powered shopping list is your strongest feature—lean into automation and time-saving."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 text-center">
            <div className="p-12">
              <p className="text-7xl font-bold mb-4">147</p>
              <p className="text-xl opacity-90 font-normal">Ideas validated in 48 hours</p>
            </div>
            <div className="p-12">
              <p className="text-7xl font-bold mb-4 text-primary">96.6%</p>
              <p className="text-xl opacity-90 font-normal">Founders found it helpful</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Ready to validate your idea?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal">
              Join hundreds of founders who validated before building
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <Card className="p-2 shadow-strong border-border/50">
              <Textarea
                placeholder="Describe your startup idea..."
                className="min-h-[160px] text-base resize-none border-0 focus-visible:ring-0 bg-background"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
              />
              <Button
                size="lg"
                className="w-full text-lg h-14 font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={handleValidate}
              >
                Validate My Idea
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-primary" />
            <span className="font-bold text-lg text-foreground">IdeaProof</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 IdeaProof. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;