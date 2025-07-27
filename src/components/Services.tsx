import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  BarChart3, 
  Megaphone, 
  Globe, 
  Video, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that boost your online presence and drive measurable results.",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns", "Analytics"],
      price: "Starting at $1,800",
      slug: "digital-marketing"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers and grow your business.",
      features: ["Custom Development", "E-commerce", "CMS Integration", "Mobile Responsive"],
      price: "Starting at $3,500",
      slug: "web-development"
    },
    {
      icon: Megaphone,
      title: "Content Strategy",
      description: "Engaging content that tells your story and builds meaningful connections with your audience.",
      features: ["Content Planning", "Copywriting", "Blog Strategy", "Email Campaigns"],
      price: "Starting at $1,200",
      slug: "content-strategy"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video content that captures attention and drives engagement across all platforms.",
      features: ["Commercial Videos", "Social Content", "Animation", "Live Streaming"],
      price: "Starting at $2,000",
      slug: "video-production"
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
            From brand design to digital marketing, we offer end-to-end solutions 
            that help your business thrive in the digital landscape.
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
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold gradient-text">{service.price}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.location.href = `/${service.slug}`}
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
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
          <Button className="btn-gradient text-lg px-8 py-4">
            Get Free Consultation
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;