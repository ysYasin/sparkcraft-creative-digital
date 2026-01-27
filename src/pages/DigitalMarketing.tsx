import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  Search, 
  Share2, 
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const DigitalMarketing = () => {
  const features = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and organic visibility"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Build and engage your community across all platforms"
    },
    {
      icon: Target,
      title: "PPC Campaigns",
      description: "Targeted advertising that delivers measurable ROI"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your campaigns"
    }
  ];

  const packages = [
    {
      name: "Starter",
      investment: "$1,800",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "SEO audit & optimization",
        "Social media management (2 platforms)",
        "Monthly analytics report",
        "Email support"
      ]
    },
    {
      name: "Growth",
      investment: "$3,500",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "PPC campaign management",
        "Content creation (8 posts/month)",
        "Social media management (4 platforms)",
        "Bi-weekly strategy calls",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      investment: "Custom",
      period: "",
      description: "For large-scale operations",
      features: [
        "Everything in Growth",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 support"
      ]
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-gradient-primary text-primary-foreground">
                <BarChart3 size={16} className="mr-2" />
                Digital Marketing
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Drive Growth with 
                <span className="gradient-text"> Data-Driven</span> Marketing
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Boost your online presence and drive measurable results with our comprehensive digital marketing strategies that convert visitors into customers.
              </p>
              <Button className="btn-gradient text-lg px-8 py-4" onClick={scrollToContact}>
                Get Free Marketing Audit
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                What's <span className="gradient-text">Included</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital marketing services designed to maximize your ROI
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="card-3d text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon size={32} className="text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Choose Your <span className="gradient-text">Package</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Flexible pricing options to fit your business needs and budget
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className={`card-3d relative ${pkg.popular ? 'border-primary scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                        <Star size={14} className="mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold gradient-text">{pkg.investment}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle size={16} className="text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={pkg.popular ? "btn-gradient w-full" : "w-full"} 
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={scrollToContact}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Accelerate</span> Your Growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a custom digital marketing strategy that drives real results for your business.
            </p>
            <Button className="btn-gradient text-lg px-8 py-4" onClick={scrollToContact}>
              Schedule Free Consultation
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
