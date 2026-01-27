import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  FileVideo, 
  Layers, 
  RefreshCw, 
  Target,
  Play,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const VideoProduction = () => {
  const features = [
    {
      icon: Target,
      title: "Result Driven Content Planning",
      description: "Strategic planning focused on achieving your business goals"
    },
    {
      icon: FileVideo,
      title: "4 Video Edits",
      description: "Professional editing for up to 4 promotional videos"
    },
    {
      icon: Layers,
      title: "2 Variation of Ratio",
      description: "Videos optimized for different platform requirements"
    },
    {
      icon: RefreshCw,
      title: "3 Non-Paid Revisions",
      description: "Three rounds of revisions included at no extra cost"
    }
  ];

  const packages = [
    {
      name: "Starter",
      investment: "$200",
      period: "",
      description: "Perfect for small business videos",
      features: [
        "Result driven content planning",
        "4 video edits",
        "2 variation of ratio",
        "3 non-paid revisions",
        "HD delivery"
      ]
    },
    {
      name: "Professional",
      investment: "$500",
      period: "",
      description: "Comprehensive video production",
      features: [
        "Everything in Starter",
        "8 video edits",
        "3 variation of ratio",
        "Advanced editing & effects",
        "Motion graphics",
        "4K delivery",
        "Unlimited revisions"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      investment: "Custom",
      period: "",
      description: "Full-scale video campaigns",
      features: [
        "Unlimited videos",
        "All ratio variations",
        "Professional animations",
        "Custom graphics",
        "Rush delivery options",
        "Dedicated video editor",
        "Priority support"
      ]
    }
  ];

  const videoTypes = [
    "Product Demos", "Social Media Ads", "Promotional Videos", "Explainer Videos", 
    "Testimonials", "Brand Stories", "Event Coverage", "Tutorial Videos"
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
                <Video size={16} className="mr-2" />
                Promotional Video Content
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Videos That
                <span className="gradient-text"> Captivate</span> and Convert
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Professional promotional video content that captures attention, tells your story, and drives engagement across all platforms.
              </p>
              <Button className="btn-gradient text-lg px-8 py-4" onClick={scrollToContact}>
                Start Your Video Project
                <Play size={20} className="ml-2" />
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
                Everything you need for professional promotional videos
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

        {/* Video Types */}
        <section className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Video Types</span> We Specialize In
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Every video type you need to grow your business
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {videoTypes.map((type, index) => (
                <Card key={index} className="card-3d text-center p-4">
                  <p className="font-medium text-sm">{type}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional videos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your goals and vision" },
                { step: "02", title: "Planning", desc: "Content strategy and storyboarding" },
                { step: "03", title: "Production", desc: "Professional editing and effects" },
                { step: "04", title: "Delivery", desc: "Final review and multi-format delivery" }
              ].map((item, index) => (
                <Card key={index} className="card-3d text-center">
                  <CardHeader>
                    <div className="text-4xl font-bold gradient-text mb-4">{item.step}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
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
                Flexible video production options for every budget
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
              Ready to Create <span className="gradient-text">Amazing Videos</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with professional video production that gets results.
            </p>
            <Button className="btn-gradient text-lg px-8 py-4" onClick={scrollToContact}>
              Get Video Quote
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideoProduction;
