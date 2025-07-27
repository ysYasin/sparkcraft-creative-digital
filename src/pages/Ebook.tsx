import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { 
  Download, 
  BookOpen, 
  Star, 
  CheckCircle, 
  Users,
  TrendingUp,
  Lightbulb,
  Target
} from "lucide-react";

const Ebook = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Download link sent to your email! Check your inbox.");
    setEmail("");
    setName("");
  };

  const benefits = [
    "Proven strategies used by 500+ successful businesses",
    "Step-by-step implementation guides",
    "Real-world case studies and examples",
    "Templates and checklists for immediate use",
    "Expert insights from industry leaders",
    "Actionable tips for immediate results"
  ];

  const chapters = [
    {
      title: "Understanding Your Market",
      description: "Deep dive into market research and customer analysis"
    },
    {
      title: "Brand Positioning Strategy",
      description: "How to position your brand for maximum impact"
    },
    {
      title: "Digital Marketing Foundations",
      description: "Building a strong digital presence across all channels"
    },
    {
      title: "Content That Converts",
      description: "Creating compelling content that drives action"
    },
    {
      title: "Social Media Mastery",
      description: "Leveraging social platforms for business growth"
    },
    {
      title: "Measuring Success",
      description: "KPIs and metrics that matter for your business"
    }
  ];

  const testimonials = [
    {
      quote: "This e-book transformed how we approach marketing. Our leads increased by 200% in just 2 months!",
      author: "Jennifer Walsh",
      position: "Marketing Director",
      rating: 5
    },
    {
      quote: "Practical, actionable advice that actually works. The templates alone saved us weeks of work.",
      author: "David Kim",
      position: "Small Business Owner",
      rating: 5
    },
    {
      quote: "A comprehensive guide that covers everything you need to know about modern marketing.",
      author: "Lisa Rodriguez",
      position: "Startup Founder",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float" />
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl float" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6 px-4 py-2">
                  <BookOpen size={16} className="mr-2" />
                  Free E-Book
                </Badge>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="gradient-text">Makanisome:</span>
                  <br />
                  The Ultimate Marketing Playbook
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  Discover the proven strategies that have helped over 500 businesses 
                  transform their marketing and achieve unprecedented growth.
                </p>

                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Users size={20} className="text-primary" />
                    <span className="text-sm text-muted-foreground">10,000+ Downloads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">4.9/5 Rating</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Form */}
              <div className="card-3d p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Download size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Download Your Free Copy</h3>
                  <p className="text-muted-foreground">
                    Get instant access to the complete 120-page marketing playbook
                  </p>
                </div>

                <form onSubmit={handleDownload} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <Button type="submit" className="btn-gradient w-full text-lg py-3">
                    Download Free E-Book
                    <Download size={20} className="ml-2" />
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  No spam. Unsubscribe at any time. Your data is 100% secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What's <span className="gradient-text">Inside</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                120 pages of actionable strategies, real-world examples, and proven frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chapters.map((chapter, index) => (
                <Card key={index} className="card-3d">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                    <CardTitle className="text-xl">{chapter.title}</CardTitle>
                    <CardDescription>{chapter.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why <span className="gradient-text">10,000+</span> Business Owners
                  <br />
                  Love This Guide
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  This isn't just another marketing e-book. It's a comprehensive playbook 
                  based on real strategies that have generated millions in revenue.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Proven Results</h4>
                      <p className="text-sm text-muted-foreground">Strategies tested with real businesses</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Actionable Insights</h4>
                      <p className="text-sm text-muted-foreground">No fluff, just practical advice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Step-by-Step</h4>
                      <p className="text-sm text-muted-foreground">Easy to follow implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Templates Included</h4>
                      <p className="text-sm text-muted-foreground">Ready-to-use resources</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Readers Are <span className="gradient-text">Saying</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-3d">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Marketing?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of business owners who have already downloaded Makanisome 
              and are seeing real results in their marketing efforts.
            </p>
            <Button className="btn-gradient text-lg px-8 py-4">
              Download Your Free Copy Now
              <Download size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ebook;