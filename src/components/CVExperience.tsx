import { Briefcase, Calendar, MapPin, TrendingUp, ShoppingBag, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import expBg from "@/assets/exp-wall.jpg";

const CVExperience = () => {
  const experienceData = [
    {
      title: "Digital Marketing Intern",
      company: "JS Global Capital Limited",
      location: "Karachi, Pakistan",
      period: "July 8, 2025 - July 22, 2025",
      type: "Internship",
      description: "Completed a comprehensive internship in the Marketing Department at Head Office, gaining hands-on experience in digital marketing strategies and corporate marketing operations.",
      achievements: [
        "Worked on marketing campaigns and strategies",
        "Gained experience in corporate marketing environment",
        "Completed assigned projects successfully",
        "Proved to be a productive team member"
      ],
      icon: TrendingUp,
      color: "primary"
    },
    {
      title: "Entrepreneur & Marketing Strategist",
      company: "Personal Entrepreneurship Project",
      location: "Karachi, Pakistan", 
      period: "2024 - 2025",
      type: "Entrepreneurship",
      description: "Founded and managed a successful product business specializing in custom tote bags and accessories, handling everything from market research to sales execution.",
      achievements: [
        "Conducted comprehensive market research through social media and questionnaires",
        "Identified and analyzed target audience demographics and preferences",
        "Developed and executed social media marketing campaigns",
        "Managed entire sales process from production to customer delivery",
        "Built brand presence through strategic marketing initiatives"
      ],
      icon: ShoppingBag,
      color: "accent"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 blur-sm transition-all duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${expBg})` }}
      ></div>
      <div className="absolute inset-0 brightness-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Professional Experience
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in marketing and entrepreneurship
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, index) => {
            const IconComponent = exp.icon;
            
            return (
              <Card key={index} className="overflow-hidden transition-smooth hover:shadow-medium group bg-gradient-card border-0">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`p-4 rounded-xl ${
                        exp.color === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                      } group-hover:scale-110 transition-spring`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary mb-1">
                            {exp.company}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                        
                        <Badge variant={exp.type === 'Internship' ? 'default' : 'secondary'}>
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Key Achievements & Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CVExperience;