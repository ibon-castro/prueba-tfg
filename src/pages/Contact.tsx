import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@yunocode.com",
      subtext: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Code Street, Tech City, TC 12345",
      subtext: "Visit our office"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Online Support",
      subtext: "We're here when you need us"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Get in{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions about YunoCode? Need support? Want to share feedback? 
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtext}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What is this about?"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="hero" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Let's start a conversation</h3>
                    <p className="text-muted-foreground mb-6">
                      We're here to help you get the most out of YunoCode. Whether you're 
                      a developer looking for collaboration tools, a team lead evaluating 
                      our platform, or someone with feedback, we'd love to connect.
                    </p>
                  </div>

                  <Card className="bg-gradient-hero border-primary/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Quick Support</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Need immediate help? Check out our documentation or join our 
                        community Discord for real-time support.
                      </p>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm">
                          Documentation
                        </Button>
                        <Button variant="outline" size="sm">
                          Discord
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Enterprise Inquiries</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Looking for enterprise features, custom deployments, or volume pricing? 
                        Let's discuss how YunoCode can scale with your organization.
                      </p>
                      <Button variant="hero" size="sm">
                        Schedule a Demo
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;