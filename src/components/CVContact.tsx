import { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Send, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const CVContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("m1Rgf6QU3ot9MmY6x"); // You'll need to replace this with your actual public key

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
        to_email: 'sameen.rizvi1512@gmail.com',
        time: new Date().toLocaleString(), // Add this line
      };

      await emailjs.send(
        'service_52x7xk3', // You'll need to replace this with your actual service ID
        'template_sxhc839', // You'll need to replace this with your actual template ID
        templateParams
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or send an email directly to sameen.rizvi1512@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sameen.rizvi1512@gmail.com",
      href: "mailto:sameen.rizvi1512@gmail.com",
      primary: true
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      primary: false
    },
    {
      icon: Phone,
      label: "Available for",
      value: "Internships & Full-time Opportunities",
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about marketing and business.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm font-medium mb-1">
                          {contact.label}
                        </p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-white font-semibold hover:text-accent-light transition-smooth text-lg"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-white font-semibold text-lg">
                            {contact.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Status */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-white font-bold text-lg mb-4">Current Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-success text-success-foreground">
                      Available
                    </Badge>
                    <span className="text-white/90 text-sm">Open to opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-white/30 text-white">
                      Student
                    </Badge>
                    <span className="text-white/90 text-sm">Final year student</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-white/30 text-white">
                      Remote
                    </Badge>
                    <span className="text-white/90 text-sm">Remote work ready</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Actions</h4>
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-smooth"
                  onClick={() => window.open('mailto:sameen.rizvi1512@gmail.com?subject=Professional Inquiry', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <a href="/cv.pdf" download="CV-Syeda-Dur-e-Sameen.pdf">
                  <Button 
                    variant="outline"
                    className="border-white/30 text-blue-950 hover:bg-white/10 hover:text-white transition-smooth"
                  >
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-strong">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello!" 
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
              
              <p className="text-muted-foreground text-sm text-center mt-4">
                I typically respond within 24 hours during business days.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CVContact;