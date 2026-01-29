import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceLeadForm from "@/components/ServiceLeadForm";
import { 
  Palette, 
  BarChart3, 
  Globe, 
  Video,
  Image,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";
const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const services = [
    {
      icon: BarChart3,
      title: "Social Media Marketing",
      description: "Comprehensive social media strategies that build brand awareness and drive engagement across all platforms.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics & Reporting"],
      investment: "$350",
      slug: "social-media-marketing"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers and grow your business.",
      features: ["Custom Development", "E-commerce", "CMS Integration", "Mobile Responsive"],
      investment: "Starts from $250",
      slug: "web-development"
    },
    {
      icon: Image,
      title: "Monthly Graphics Package",
      description: "Professional graphic design services to elevate your brand's visual presence across all platforms.",
      features: ["8 Graphic design", "Strategy building", "Result-driven", "Every content in 3 ratios"],
      investment: "Starts from $150",
      slug: "monthly-graphics-package"
    },
    {
      icon: Video,
      title: "Promotional Video Content",
      description: "Professional video content that captures attention and drives engagement across all platforms.",
      features: ["Result driven content planning", "4 video edits", "2 variation of ratio", "3 non-paid revisions"],
      investment: "$200",
      slug: "promotional-video-content"
    },
    {
      icon: Target,
      title: "Paid Marketing",
      description: "Strategic paid advertising campaigns across multiple platforms to maximize your ROI and reach.",
      features: ["Meta Marketing", "Google Ads", "TikTok Ads", "LinkedIn", "Pinterest / Snapchat"],
      investment: "$250 for 1 (+$100 each additional)",
      slug: "paid-marketing"
    },
    {
      icon: Sparkles,
      title: "AI Generated Video Ads",
      description: "Cutting-edge AI-powered video advertisements that deliver results with efficiency and creativity.",
      features: ["Result driven content planning", "Video edits", "1 variation of ratio", "3 non-paid revisions"],
      investment: "Contact for pricing",
      slug: "ai-video-ads"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Palette size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive <span className="gradient-text">Solutions</span>
            <br />
            for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We spark your business growth with our comprehensive social media marketing, 
            web development, content strategy, and video production services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-3d group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">Investment: </span>
                  <span className="text-lg font-bold gradient-text">{service.investment}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center">
                  {service.slug === "web-development" ? (
                    <Button 
                      className="w-full btn-gradient"
                      onClick={() => navigate('/web-development/packages')}
                    >
                      See Packages
                      <ArrowRight size={16} className="ml-1" />
                    </Button>
                  ) : (
                    <Button 
                      className="w-full btn-gradient"
                      onClick={() => setSelectedService(service.title)}
                    >
                      Get Quote
                      <ArrowRight size={16} className="ml-1" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for your business.
          </p>
          <Button 
            className="btn-gradient text-lg px-8 py-4"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Consultation
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Service Lead Form Modal */}
      {selectedService && (
        <ServiceLeadForm
          service={selectedService}
          isOpen={true}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;
