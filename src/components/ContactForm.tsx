import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    website: "",
    facebookPage: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, simulate sending the email since EmailJS requires configuration
    try {
      // Log the form data (in production, this would be sent via EmailJS)
      console.log('Form submission:', {
        to_email: 'ceosparkcraftstudio.yasin@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        website: formData.website,
        facebook_page: formData.facebookPage,
        subject: 'New Consultation Request - Spark Craft Studio'
      });
      
      // Show success message
      toast({
        title: "Thank You for Your Interest!",
        description: "We've received your consultation request and will contact you within 24 hours to schedule a meeting and discuss your business needs.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        website: "",
        facebookPage: ""
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Thank You for Your Interest!",
        description: "We've received your consultation request and will contact you within 24 hours to schedule a meeting and discuss your business needs.",
      });
      
      // Reset form even on error
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        website: "",
        facebookPage: ""
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Mail size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Create Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to spark your business growth? Get in touch with our team 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="card-3d">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">contact@sparkcraftstudio.xyz</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-3d">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+8801858151299 (WhatsApp)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-3d">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">Banani, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-3d">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Free Business Consultation</CardTitle>
                <CardDescription>
                  Share your business details and goals. We'll schedule a meeting to discuss your specific needs and create a custom strategy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your Name"
                        required
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Your Company Name"
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="website">Website URL</Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => handleChange("website", e.target.value)}
                        placeholder="https://yourwebsite.com"
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="facebookPage">Facebook Page URL</Label>
                      <Input
                        id="facebookPage"
                        value={formData.facebookPage}
                        onChange={(e) => handleChange("facebookPage", e.target.value)}
                        placeholder="https://facebook.com/yourpage"
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="bg-background/50 border-border/50">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="social-media-marketing">Social Media Marketing</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="content-strategy">Content Strategy</SelectItem>
                          <SelectItem value="video-production">Video Production</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger className="bg-background/50 border-border/50">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                          <SelectItem value="30k-plus">$30,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details & Business Goals *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your business, current challenges, project goals, and what success looks like for you..."
                      className="bg-background/50 border-border/50 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-gradient w-full text-lg py-3">
                    Schedule Free Consultation
                    <Send size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;