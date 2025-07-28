import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { X, ArrowRight } from "lucide-react";

interface ServiceLeadFormProps {
  service: string;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceLeadForm = ({ service, isOpen, onClose }: ServiceLeadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    budget: "",
    timeline: "",
    description: "",
    facebookPage: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailContent = `
New ${service} Lead from Website

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company: ${formData.company}
- Website: ${formData.website}
- Facebook Page: ${formData.facebookPage}

Project Details:
- Service: ${service}
- Budget: ${formData.budget}
- Timeline: ${formData.timeline}
- Description: ${formData.description}
    `;

    try {
      // In a real application, you would send this to your backend
      console.log("Lead data:", { service, ...formData, emailContent });
      
      toast({
        title: "Thank You!",
        description: "We've received your information and will contact you within 24 hours to schedule a consultation.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        budget: "",
        timeline: "",
        description: "",
        facebookPage: ""
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto card-3d">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl gradient-text">{service} Consultation</CardTitle>
            <CardDescription>
              Let's discuss your project and create a custom solution for your business needs.
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
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
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-background/50"
                />
              </div>
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="bg-background/50"
                />
              </div>
              <div>
                <Label htmlFor="facebookPage">Facebook Page URL</Label>
                <Input
                  id="facebookPage"
                  value={formData.facebookPage}
                  onChange={(e) => handleChange("facebookPage", e.target.value)}
                  placeholder="https://facebook.com/yourpage"
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="budget">Project Budget</Label>
                <Select onValueChange={(value) => handleChange("budget", value)}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-plus">$50,000+</SelectItem>
                    <SelectItem value="discuss">Let's discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="timeline">Project Timeline</Label>
                <Select onValueChange={(value) => handleChange("timeline", value)}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="3-months">Within 3 months</SelectItem>
                    <SelectItem value="6-months">Within 6 months</SelectItem>
                    <SelectItem value="flexible">I'm flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Tell us about your project goals, current challenges, and what success looks like for your business..."
                className="bg-background/50 min-h-[120px]"
                required
              />
            </div>

            <Button type="submit" className="w-full btn-gradient text-lg py-3">
              Schedule Free Consultation
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceLeadForm;