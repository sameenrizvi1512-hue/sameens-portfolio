import { useState, useEffect } from "react";
import { Menu, X, Download, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import s_wall from "@/assets/s-wall.jpg";

const CVNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["hero", "experience", "education", "certifications", "skills", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { id: "hero", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu after clicking a navigation link
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-elegant bg-white/70 backdrop-blur-md shadow-medium border-b border-border`}>
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 rounded-md" src={s_wall} alt="name-wallpaper" />
            <div>
              <h3 className="font-bold text-foreground text-lg">Sameen Rizvi</h3>
              <p className="text-muted-foreground text-sm">Digital Marketing Professional</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  activeSection === item.id 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
           <a href="/cv.pdf" download="CV-Syeda-Dur-e-Sameen.pdf">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-elegant"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </a>
            <Button
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary hover:shadow-accent transition-elegant"
            >
              <Mail className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="text-center pb-6 border-b border-border">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                      SS
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Syeda Sameen</h3>
                    <p className="text-muted-foreground">Digital Marketing Professional</p>
                  </div>
                  
                  <div className="space-y-3">
                    {navigationItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-elegant ${
                          activeSection === item.id 
                            ? "bg-primary text-primary-foreground" 
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  
                  <div className="space-y-3 pt-6 border-t border-border">
                    <a href="/cv.pdf" download="CV-Syeda-Dur-e-Sameen.pdf">
                      <Button
                        variant="outline"
                        className="w-full"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download CV
                      </Button>
                    </a>
                    <Button
                      className="w-full bg-gradient-primary"
                      onClick={() => scrollToSection("contact")}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Hire Me
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CVNavigation;
