import { Heart, Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import s_wall from "@/assets/s-wall.jpg";

const CVFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Professional Summary */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img className="w-12 h-12 rounded-md" src={s_wall} alt="name-wallpaper" />
              <div>
                <h3 className="font-bold text-xl">Syeda Dur-e-Sameen</h3>
                <p className="text-white/80">Digital Marketing Professional</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Passionate marketing strategist with expertise in social media marketing, 
              customer relationship management, and entrepreneurial ventures. Ready to make 
              an impact in your organization.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-accent">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-4 h-4 text-accent" />
                <a 
                  href="mailto:sameenrizvi2025@gmail.com"
                  className="hover:text-accent transition-smooth"
                >
                  sameen.rizvi1512@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Calendar className="w-4 h-4 text-accent" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Professional Status */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-accent">Current Status</h4>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-accent font-semibold mb-1">🎓 Final Year Student</p>
                <p className="text-white/80 text-sm">
                  Bachelor's in Accounting & Finance<br />
                  Mohammad Ali Jinnah University
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-accent font-semibold mb-1">✅ Available</p>
                <p className="text-white/80 text-sm">
                  Open for internships and<br />
                  full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-accent">Ready to Work Together?</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              I'm passionate about creating impactful marketing strategies and building meaningful 
              customer relationships. Let's discuss how I can contribute to your team's success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-accent text-primary hover:shadow-accent transition-elegant"
                onClick={() => window.open('mailto:sameen.rizvi1512@gmail.com?subject=Professional Opportunity', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
              <a href="/cv.pdf" download="CV-Syeda-Dur-e-Sameen.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-blue-950 hover:text-white hover:bg-white/10 transition-elegant"
                >
                  Download My CV
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Syeda Dur-e-Sameen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CVFooter;