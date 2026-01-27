import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Image, 
  PenTool, 
  Palette, 
  Layout, 
  Layers, 
  Target,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const ContentStrategy = () => {
  const features = [
    {
      icon: Palette,
      title: "8 Graphic Designs",
      description: "Professional graphic designs tailored to your brand"
    },
    {
      icon: Target,
      title: "Strategy Building",
      description: "Data-driven content strategy aligned with your goals"
    },
    {
      icon: Layers,
      title: "Result-Driven",
      description: "Every design is optimized for maximum engagement"
    },
    {
      icon: Layout,
      title: "3 Ratio Variations",
      description: "Every content provided in 3 different aspect ratios"
    }
  ];

  const packages = [
    {
      name: "Essential",
      investment: "$150",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "8 Graphic designs",
        "Strategy building",
        "Result-driven approach",
        "Content in 3 ratios",
        "Basic revisions"
      ]
    },
    {
      name: "Professional",
      investment: "$300",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Essential",
        "16 Graphic designs",
        "Advanced strategy sessions",
        "Priority support",
        "Unlimited revisions",
        "Brand consistency review"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      investment: "Custom",
      period: "",
      description: "For large-scale content operations",
      features: [
        "Everything in Professional",
        "Unlimited designs",
        "Dedicated designer",
        "Multi-brand support",
        "Custom templates",
        "Rush delivery options"
      ]
    }
  ];

  const contentTypes = [
    "Social Media Posts", "Instagram Stories", "Facebook Covers", "LinkedIn Graphics", 
    "Ad Creatives", "Promotional Banners", "Event Graphics", "Infographics",
    "Quote Graphics", "Product Showcases"
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
                <Image size={16} className="mr-2" />
                Monthly Graphics Package
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Graphics That
                <span className="gradient-text"> Elevate</span> Your Brand
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Professional graphic design services that build your brand presence and drive engagement across all platforms.
              </p>
              <Button className="btn-gradient text-lg px-8 py-4" onClick={scrollToContact}>
                Get Started
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
                Comprehensive graphic design services that engage and convert
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

        {/* Content Types */}
        <section className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Graphics</span> We Create
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From social media posts to promotional banners
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {contentTypes.map((type, index) => (
                <Card key={index} className="card-3d text-center p-4">
                  <p className="font-medium text-sm">{type}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Choose Your <span className="gradient-text">Package</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Flexible graphic design solutions to match your business needs
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
                      <span className="text-sm text-muted-foreground">Investment: </span>
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
              Ready to Elevate Your <span className="gradient-text">Brand</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create stunning graphics that resonate with your audience and drive real business results.
            </p>
            <Button className="btn-gradient text-lg px-8 py-4" onClick={scrollToContact}>
              Start Your Graphics Package
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContentStrategy;
