import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Brand Design", href: "#" },
      { name: "Digital Marketing", href: "#" },
      { name: "Web Development", href: "#" },
      { name: "Content Strategy", href: "#" },
      { name: "Video Production", href: "#" },
      { name: "App Development", href: "#" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#contact" }
    ],
    resources: [
      { name: "E-Book", href: "/ebook" },
      { name: "Courses", href: "/courses" },
      { name: "Case Studies", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Tools", href: "#" },
      { name: "Support", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/4b142bf1-2cf8-49c7-9a25-776ae0bf0e52.png" 
                  alt="Spark Craft Studio Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold gradient-text">Spark Craft Studio</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming businesses through innovative design, strategic marketing, 
              and cutting-edge technology solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-sm">contact@sparkcraftstudio.xyz</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-sm">+8801858151299 (WhatsApp)</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">Banani, Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <social.icon size={18} className="text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-border/50 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Spark Craft Studio. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
