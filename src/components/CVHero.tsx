import { Mail, MapPin, Phone, Linkedin, Github, Star, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg2.jpg";
import AnimatedSection from "@/components/ui/animated-section";

const CVHero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center pt-6">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 transition-all duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      {/* Background decoration */}
      <div className="absolute inset-0 brightness-50 bg-gradient-hero opacity-50"></div>
      
      
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Main content */}
          <div className="text-white lg:col-span-2 space-y-12">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="whitespace-nowrap mt-6 text-3xl md:text-6xl font-bold leading-[1.2] tracking-tight text-center lg:text-left animate-fadeInUp">
                  <span className="inline mb-0 sm:mb-0 transition-all duration-700 hover:text-accent">Syeda Dur-e-</span>
                  <span className="bg-gradient-accent bg-clip-text text-transparent transition-all duration-700 hover:scale-105 inline-block">Sameen</span>
                </h1>
                
                <div className="space-y-8">
                  <h2 className="mb-12 text-lg md:text-3xl lg:text-4xl text-white/85 font-semibold italic leading-tight tracking-wide text-center lg:text-left animate-fadeInUp animate-stagger-1">
                    Digital Marketing Professional
                  </h2>
                  
                  <div className="max-w-4xl space-y-8 px-2 lg:px-0">
                    <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed font-medium animate-fadeInUp animate-stagger-2">
                      Passionate marketing strategist with proven expertise in:
                    </p>
                    
                    <div className="space-y-6 pl-0 lg:pl-6 sm:pl-0 sm:lg:pl-8">
                      <div className="flex items-start gap-6 animate-fadeInUp animate-stagger-3 hover:translate-x-2 transition-transform duration-300">
                        <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                        <div className="space-y-2">
                          <p className="text-lg sm:text-xl md:text-2xl text-accent font-bold transition-all duration-300 hover:scale-105">
                            Social Media Marketing
                          </p>
                          <p className="text-base sm:text-lg text-white/80 leading-loose">
                            Creating engaging campaigns that drive real results
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-6 animate-fadeInUp animate-stagger-4 hover:translate-x-2 transition-transform duration-300">
                        <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                        <div className="space-y-2">
                          <p className="text-lg sm:text-xl md:text-2xl text-accent font-bold transition-all duration-300 hover:scale-105">
                            Customer Relationship Management
                          </p>
                          <p className="text-base sm:text-lg text-white/80 leading-loose">
                            Building lasting connections with clients
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-6 animate-fadeInUp animate-stagger-5 hover:translate-x-2 transition-transform duration-300">
                        <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                        <div className="space-y-2">
                          <p className="text-lg sm:text-xl md:text-2xl text-accent font-bold transition-all duration-300 hover:scale-105">
                            Entrepreneurial Ventures
                          </p>
                          <p className="text-base sm:text-lg text-white/80 leading-loose">
                            Innovative business solutions and strategies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Key highlights - centered on small screens */}
                <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start">
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                    <Trophy className="w-5 h-5 text-accent animate-float" />
                    <span className="text-base text-white font-medium">HP LIFE Certified</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                    <Target className="w-5 h-5 text-accent animate-float" style={{animationDelay: '0.5s'}} />
                    <span className="text-base text-white font-medium">JS Global Certified</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                    <Star className="w-5 h-5 text-accent animate-float" style={{animationDelay: '1s'}} />
                    <span className="text-base text-white font-medium">Top Performer</span>
                  </div>
                </div>
              </div>
              
              {/* Buttons - centered on small screens */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-accent text-primary hover:shadow-accent transition-all duration-300 text-lg px-8 py-4 h-auto font-semibold hover:scale-105 hover:rotate-1"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                  Let's Work Together
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-blue-950 hover:bg-white/10 hover:text-white transition-all duration-300 text-lg px-8 py-4 h-auto font-semibold hover:scale-105 hover:-rotate-1"
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
              </div>
            </div>
          </div>
          
          {/* Professional Info Card - centered on small screens */}
          <div className="flex w-full justify-center lg:justify-end">
            <Card className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white/95 backdrop-blur-md shadow-strong border-0 hover-lift animate-fadeInUp animate-stagger-3">
              <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2 transition-all duration-300 hover:text-accent">Professional Profile</h3>
                    <p className="text-muted-foreground">Ready to make an impact</p>
                  </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent/20 hover:scale-110">
                        <Mail className="w-5 h-5 text-primary transition-all duration-300" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                        <a href="mailto:sameen.rizvi1512@gmail.com" className="font-medium hover:text-accent transition-colors duration-300">
                          sameen.rizvi1512@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent/20 hover:scale-110">
                        <MapPin className="w-5 h-5 text-primary transition-all duration-300" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                        <span className="font-medium hover:text-accent transition-colors duration-300">Karachi, Pakistan</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent/20 hover:scale-110">
                        <Trophy className="w-5 h-5 text-primary transition-all duration-300" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Experience</p>
                        <span className="font-medium hover:text-accent transition-colors duration-300">Marketing & Entrepreneurship</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="transition-all duration-300 hover:scale-105">
                        <p className="text-2xl font-bold text-primary">6+</p>
                        <p className="text-xs text-muted-foreground uppercase">Certifications</p>
                      </div>
                      <div className="transition-all duration-300 hover:scale-105">
                        <p className="text-2xl font-bold text-primary">3.45</p>
                        <p className="text-xs text-muted-foreground uppercase">CGPA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVHero;