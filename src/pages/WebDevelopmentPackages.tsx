import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Building2,
  Briefcase
} from "lucide-react";

const WebDevelopmentPackages = () => {
  const packages = [
    {
      icon: Rocket,
      name: "Starter Package",
      subtitle: "For Small Businesses & Startups",
      investment: "৳ 34,500",
      features: [
        "Up to 5 Pages Website",
        "Modern & Mobile Responsive Design",
        "Conversion-Focused Layout",
        "Basic Copywriting",
        "GTM Setup",
        "Meta / Google Pixel Setup",
        "Conversion API Setup",
        "Contact Form Integration",
        "WhatsApp / Call Button",
        "1 Professional Business Email",
        "Basic SEO Structure",
        "Speed Optimized Setup"
      ]
    },
    {
      icon: Briefcase,
      name: "Entrepreneur Package",
      subtitle: "For Growing Businesses & Brands",
      investment: "৳ 59,000",
      popular: true,
      includesStarter: true,
      features: [
        "Up to 10 Pages Website",
        "1 Year Hosting (5–10 GB)",
        "Advanced UI/UX Design",
        "Premium Sales-Driven Copywriting",
        "Blog / Portfolio Section",
        "Lead Funnel Structure",
        "Advanced CTA & Tracking Setup",
        "3 Professional Business Emails",
        "Basic On-Page SEO Optimization",
        "Image & Performance Optimization"
      ]
    },
    {
      icon: Building2,
      name: "Enterprise Package",
      subtitle: "For Large Companies & Corporate Brands",
      investment: "Custom Pricing",
      isCustom: true,
      features: [
        "Custom / Unlimited Pages",
        "Frontend UI + Backend Dashboard UI",
        "Advanced UI/UX & Brand-Aligned Design System",
        "Full Conversion Funnel Architecture",
        "Advanced Copywriting & Content Strategy",
        "CRM / Automation / API Integrations",
        "Multi-Language Capability (Optional)",
        "Advanced Analytics, Event & Funnel Tracking",
        "Scalable Infrastructure & Performance Optimization",
        "Role-Based Admin Panel (Optional)",
        "Dedicated Technical Consultation",
        "Priority Support & Maintenance Planning"
      ],
      note: "Features, integrations, hosting, and maintenance are fully scope-based. Every module, feature, or integration is discussed and quoted separately based on business requirements."
    }
  ];

  const includedInAll = [
    "Google Tag Manager (GTM) Setup",
    "Meta Pixel / Google Pixel Setup",
    "Conversion API Integration",
    "Mobile Responsive Design",
    "Conversion-Focused Structure",
    "Professional Copy Support"
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-gradient-primary text-primary-foreground">
                <Globe size={16} className="mr-2" />
                Web Development Packages
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Choose Your Perfect
                <span className="gradient-text"> Website Package</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Professional web development solutions tailored for businesses of all sizes. From startups to enterprises.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className={`card-3d relative flex flex-col ${pkg.popular ? 'border-primary border-2 scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                        <Star size={14} className="mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <pkg.icon size={32} className="text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                    <CardDescription className="text-base">{pkg.subtitle}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold gradient-text">{pkg.investment}</span>
                      {pkg.isCustom && (
                        <p className="text-sm text-muted-foreground mt-1">
                          (Pricing & Timeline Based on Scope Discussion)
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    {pkg.includesStarter && (
                      <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                        <p className="text-sm font-medium text-primary text-center">
                          ✨ Includes Everything in Starter +
                        </p>
                      </div>
                    )}
                    <ul className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle size={16} className="text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.note && (
                      <div className="mb-6 p-3 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground italic">
                          <strong>Note:</strong> {pkg.note}
                        </p>
                      </div>
                    )}
                    <Button 
                      className={pkg.popular ? "btn-gradient w-full" : "w-full"} 
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={scrollToContact}
                    >
                      {pkg.isCustom ? "Discuss Your Project" : "Get Started"}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Included in All Packages */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">
                  Included in <span className="gradient-text">All Packages</span>
                </h2>
                <p className="text-muted-foreground">
                  Every package comes with these essential features
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {includedInAll.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-background rounded-lg border">
                    <CheckCircle size={20} className="text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your <span className="gradient-text">Dream Website</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect package for your business needs.
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

export default WebDevelopmentPackages;
