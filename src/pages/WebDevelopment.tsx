import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Database,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const WebDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored websites built with modern technologies"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect experience across all devices and screen sizes"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Powerful online stores that drive sales and revenue"
    },
    {
      icon: Database,
      title: "CMS Integration",
      description: "Easy content management for non-technical users"
    }
  ];

  const packages = [
    {
      name: "Business",
      investment: "$3,500",
      period: "",
      description: "Perfect for small to medium businesses",
      features: [
        "5-page responsive website",
        "Custom design & development",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact forms",
        "3 months support"
      ]
    },
    {
      name: "E-commerce",
      investment: "$7,500",
      period: "",
      description: "Complete online store solution",
      features: [
        "Everything in Business",
        "Product catalog management",
        "Payment gateway integration",
        "Shopping cart functionality",
        "Inventory management",
        "Order tracking system",
        "6 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      investment: "Custom",
      period: "",
      description: "Large-scale web applications",
      features: [
        "Unlimited pages & features",
        "Advanced functionality",
        "API integrations",
        "Custom admin dashboard",
        "Performance optimization",
        "12 months support",
        "Dedicated project manager"
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", 
    "Shopify", "WordPress", "Strapi", "MongoDB", "PostgreSQL"
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
                <Globe size={16} className="mr-2" />
                Web Development
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Modern Websites That
                <span className="gradient-text"> Convert</span> Visitors
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Responsive, fast-loading websites built with cutting-edge technology that turn your visitors into customers and grow your business.
              </p>
              <Button className="btn-gradient text-lg px-8 py-4" onClick={scrollToContact}>
                Start Your Project
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
                What We <span className="gradient-text">Build</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From simple landing pages to complex web applications
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

        {/* Technologies */}
        <section className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Technologies</span> We Use
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We work with the latest and most reliable technologies
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-lg px-4 py-2">
                  {tech}
                </Badge>
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
                Flexible options to fit your project requirements and budget
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
              Ready to Build Your <span className="gradient-text">Dream Website</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a website that perfectly represents your brand.
            </p>
            <Button className="btn-gradient text-lg px-8 py-4" onClick={scrollToContact}>
              Get Free Quote
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
