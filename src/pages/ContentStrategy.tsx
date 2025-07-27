import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Megaphone, 
  PenTool, 
  BookOpen, 
  Mail, 
  Calendar, 
  Target,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const ContentStrategy = () => {
  const features = [
    {
      icon: Calendar,
      title: "Content Planning",
      description: "Strategic content calendars aligned with your business goals"
    },
    {
      icon: PenTool,
      title: "Professional Copywriting",
      description: "Compelling copy that resonates with your target audience"
    },
    {
      icon: BookOpen,
      title: "Blog Strategy",
      description: "SEO-optimized blog content that drives organic traffic"
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Engaging email sequences that nurture leads and drive sales"
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "$1,200",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "Monthly content strategy",
        "4 blog posts per month",
        "Social media content (8 posts)",
        "Basic email templates",
        "Content calendar"
      ]
    },
    {
      name: "Professional",
      price: "$2,500",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Essential",
        "8 blog posts per month",
        "Email campaign sequences",
        "Social media content (16 posts)",
        "Landing page copy",
        "Monthly strategy calls",
        "Performance analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale content operations",
      features: [
        "Everything in Professional",
        "Unlimited blog posts",
        "Multi-channel campaigns",
        "Brand voice guidelines",
        "Content audit & optimization",
        "Dedicated content manager",
        "White-label options"
      ]
    }
  ];

  const contentTypes = [
    "Blog Posts", "Website Copy", "Email Sequences", "Social Media Content", 
    "Landing Pages", "Case Studies", "White Papers", "Product Descriptions",
    "Press Releases", "Newsletter Content"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-gradient-primary text-primary-foreground">
                <Megaphone size={16} className="mr-2" />
                Content Strategy
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Content That
                <span className="gradient-text"> Converts</span> and Connects
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Strategic content creation that tells your story, builds meaningful connections with your audience, and drives measurable business results.
              </p>
              <Button className="btn-gradient text-lg px-8 py-4">
                Get Content Audit
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
                Our <span className="gradient-text">Content Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive content solutions that engage and convert
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
                <span className="gradient-text">Content Types</span> We Create
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From blog posts to email campaigns, we've got you covered
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
                Flexible content solutions to match your business needs
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
                      <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
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
              Ready to Tell Your <span className="gradient-text">Story</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create content that resonates with your audience and drives real business results.
            </p>
            <Button className="btn-gradient text-lg px-8 py-4">
              Start Content Strategy
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