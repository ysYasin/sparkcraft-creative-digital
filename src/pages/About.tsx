import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award,
  ArrowRight,
  Quote
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional results."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring every project reflects their vision."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we implement is designed to achieve measurable business outcomes."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from design to execution."
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float" />
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl float" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-8 px-4 py-2">
              <Users size={16} className="mr-2" />
              About Our Story
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              We're <span className="gradient-text">Spark Craft Studio</span>
              <br />
              Creative Innovators
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              Founded in 2018, we're a passionate team of designers, marketers, and developers 
              who believe in the power of creativity to transform businesses and inspire audiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card-3d p-6">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="card-3d p-6">
                <div className="text-3xl font-bold gradient-text mb-2">6</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="card-3d p-6">
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <p className="text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  To empower businesses of all sizes with innovative design solutions, 
                  strategic marketing, and cutting-edge technology that drives real growth 
                  and creates lasting impact in the digital world.
                </p>
                <Button className="btn-gradient" onClick={scrollToContact}>
                  Learn More About Our Work
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>
              
              <div className="card-3d p-8">
                <Quote size={48} className="text-primary mb-6" />
                <blockquote className="text-xl italic mb-6">
                  "We don't just create beautiful designs or run marketing campaigns. 
                  We craft experiences that connect brands with people and drive meaningful results."
                </blockquote>
                <cite className="text-muted-foreground">— Yaasin Arafat, CEO & Head of SMM</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Core <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These principles guide everything we do and shape how we work with our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-3d text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                      <value.icon size={32} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work <span className="gradient-text">Together?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss your project and create something amazing that drives real results for your business.
            </p>
            <Button className="btn-gradient text-lg px-8 py-4" onClick={scrollToContact}>
              Start Your Project
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
