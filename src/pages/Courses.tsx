import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PlayCircle, 
  Clock, 
  Users, 
  Star, 
  CheckCircle,
  Award,
  BookOpen,
  Video,
  Download,
  ArrowRight
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Digital Marketing Mastery",
      description: "Complete guide to modern digital marketing strategies and tactics",
      price: "$299",
      originalPrice: "$499",
      duration: "12 hours",
      students: "2,547",
      rating: 4.9,
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      features: [
        "SEO & SEM Strategies",
        "Social Media Marketing",
        "Email Marketing Automation",
        "Analytics & Reporting",
        "Conversion Optimization",
        "Content Marketing"
      ],
      modules: 8,
      certificate: true
    },
    {
      title: "Brand Design Fundamentals",
      description: "Learn to create compelling brand identities that resonate with audiences",
      price: "$199",
      originalPrice: "$349",
      duration: "8 hours",
      students: "1,823",
      rating: 4.8,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=250&fit=crop",
      features: [
        "Logo Design Principles",
        "Color Theory & Psychology",
        "Typography Selection",
        "Brand Guidelines Creation",
        "Visual Identity Systems",
        "Brand Strategy"
      ],
      modules: 6,
      certificate: true
    },
    {
      title: "Sales Funnel Optimization",
      description: "Build high-converting sales funnels that turn visitors into customers",
      price: "$399",
      originalPrice: "$599",
      duration: "15 hours",
      students: "1,456",
      rating: 4.9,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      features: [
        "Funnel Architecture",
        "Landing Page Design",
        "A/B Testing Strategies",
        "Customer Journey Mapping",
        "Conversion Tracking",
        "CRO Best Practices"
      ],
      modules: 10,
      certificate: true
    },
    {
      title: "Content Creation Blueprint",
      description: "Master the art of creating engaging content across all platforms",
      price: "$249",
      originalPrice: "$399",
      duration: "10 hours",
      students: "3,124",
      rating: 4.7,
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      features: [
        "Content Strategy Development",
        "Video Production Basics",
        "Copywriting Techniques",
        "Social Media Content",
        "Blog Writing Mastery",
        "Content Distribution"
      ],
      modules: 7,
      certificate: true
    },
    {
      title: "E-commerce Growth Hacking",
      description: "Advanced strategies to scale your online store and maximize revenue",
      price: "$449",
      originalPrice: "$699",
      duration: "18 hours",
      students: "987",
      rating: 4.9,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      features: [
        "Product Launch Strategies",
        "Customer Acquisition",
        "Retention Marketing",
        "Marketplace Optimization",
        "International Expansion",
        "Data-Driven Decisions"
      ],
      modules: 12,
      certificate: true
    },
    {
      title: "Leadership & Team Building",
      description: "Build and lead high-performing marketing teams",
      price: "$349",
      originalPrice: "$549",
      duration: "14 hours",
      students: "765",
      rating: 4.8,
      level: "Management",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      features: [
        "Team Structure Design",
        "Performance Management",
        "Hiring Best Practices",
        "Communication Skills",
        "Project Management",
        "Culture Building"
      ],
      modules: 9,
      certificate: true
    }
  ];

  const benefits = [
    {
      icon: Video,
      title: "HD Video Lessons",
      description: "High-quality video content with clear explanations"
    },
    {
      icon: Download,
      title: "Downloadable Resources",
      description: "Templates, checklists, and tools for immediate use"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Industry-recognized certificates upon completion"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join exclusive student community and networking"
    }
  ];

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
              <BookOpen size={16} className="mr-2" />
              Professional Courses
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Master <span className="gradient-text">Marketing</span>
              <br />
              With Expert Courses
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              Learn from industry experts and gain the skills you need to succeed in 
              digital marketing, design, and business growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="card-3d p-6">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-muted-foreground">Expert Courses</p>
              </div>
              <div className="card-3d p-6">
                <div className="text-3xl font-bold gradient-text mb-2">10k+</div>
                <p className="text-muted-foreground">Students Enrolled</p>
              </div>
              <div className="card-3d p-6">
                <div className="text-3xl font-bold gradient-text mb-2">4.8</div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <div className="card-3d p-6">
                <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                <p className="text-muted-foreground">Completion Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Benefits */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our <span className="gradient-text">Courses?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get access to premium content, expert instruction, and practical tools 
                that will accelerate your career growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-3d text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon size={32} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured <span className="gradient-text">Courses</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our comprehensive library of courses designed to help you 
                master the skills that matter most in today's digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="card-3d overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-background/90 rounded-lg px-2 py-1">
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-sm">{course.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{course.students} students</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {course.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-muted-foreground">
                            <CheckCircle size={12} className="text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold gradient-text">{course.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <PlayCircle size={14} />
                        <span>{course.modules} modules</span>
                      </div>
                    </div>

                    <Button className="w-full btn-gradient">
                      Enroll Now
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Level Up</span> Your Skills?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their careers with our courses. 
              Start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient text-lg px-8 py-4">
                Browse All Courses
                <BookOpen size={20} className="ml-2" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;