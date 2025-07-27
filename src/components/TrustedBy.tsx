import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users, Award } from "lucide-react";

const TrustedBy = () => {
  const companies = [
    "TechCorp", "InnovateCo", "GrowthLabs", "CreativeStudio", 
    "DataDriven", "FutureForward", "ScaleUp", "BrandBoost"
  ];

  const testimonials = [
    {
      quote: "Spark Craft Studio transformed our brand completely. Our conversion rates increased by 340% in just 3 months!",
      author: "Sarah Johnson",
      position: "CEO, TechCorp",
      rating: 5
    },
    {
      quote: "The team's creativity and technical expertise are unmatched. They delivered beyond our expectations.",
      author: "Michael Chen",
      position: "Marketing Director, InnovateCo",
      rating: 5
    },
    {
      quote: "Working with Spark Craft Studio was the best decision we made for our digital transformation.",
      author: "Emily Rodriguez",
      position: "Founder, GrowthLabs",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "340%", label: "Avg. ROI Increase" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Star, value: "4.9", label: "Client Rating" }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Award size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">500+</span> Companies
            <br />
            Trust Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startups to Fortune 500 companies, businesses worldwide choose 
            Spark Craft Studio for their digital transformation needs.
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="bg-muted/30 px-6 py-3 rounded-lg border border-border/30 hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-semibold text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card-3d p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-3d p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Badge variant="outline" className="px-4 py-2 text-sm">
            <Star size={16} className="text-yellow-400 mr-2" />
            Google Partner
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm">
            <Award size={16} className="text-blue-400 mr-2" />
            Certified Agency
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm">
            <TrendingUp size={16} className="text-green-400 mr-2" />
            Top 1% Results
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;