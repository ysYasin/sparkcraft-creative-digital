import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-accent/20 rounded-full blur-xl float" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Creative Marketing Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">Spark</span> Your Brand's
            <br />
            Digital <span className="gradient-text">Revolution</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge marketing strategies, stunning designs, 
            and data-driven campaigns that convert visitors into loyal customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-gradient text-lg px-8 py-4 group">
              Start Your Journey
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-border/50 hover:bg-muted/50">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="card-3d p-6">
              <div className="flex items-center justify-center mb-2">
                <Zap className="text-primary mr-2" size={24} />
                <span className="text-3xl font-bold gradient-text">500+</span>
              </div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="card-3d p-6">
              <div className="flex items-center justify-center mb-2">
                <Rocket className="text-secondary mr-2" size={24} />
                <span className="text-3xl font-bold gradient-text">98%</span>
              </div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="card-3d p-6">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="text-accent mr-2" size={24} />
                <span className="text-3xl font-bold gradient-text">2M+</span>
              </div>
              <p className="text-muted-foreground">Leads Generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;