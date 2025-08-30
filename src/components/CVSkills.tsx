import { Brain, Users, Laptop, TrendingUp, MessageSquare, Target, BarChart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import skillBg from "@/assets/skills-bg2.jpg";

const CVSkills = () => {
  const skillCategories = [
    {
      title: "Marketing & Business",
      icon: TrendingUp,
      color: "primary",
      skills: [
        "Social Media Marketing",
        "Digital Marketing Strategy", 
        "Customer Relationship Management",
        "Market Research & Analysis",
        "Brand Development"
      ]
    },
    {
      title: "Technical & Digital",
      icon: Laptop,
      color: "accent",
      skills: [
        "Microsoft Office Suite",
        "Social Media Platforms",
        "Digital Analytics",
        "Content Creation"
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "success",
      skills: [
        "Communication",
        "Team Collaboration",
        "Problem Solving",
        "Adaptability",
        "Project Management"
      ]
    },
    {
      title: "Entrepreneurial",
      icon: Lightbulb,
      color: "accent",
      skills: [
        "Business Development",
        "Sales & Negotiation",
        "Strategic Planning",
        "Risk Management"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary',
          text: 'text-primary-foreground',
          light: 'bg-primary/10',
          border: 'border-primary/20'
        };
      case 'accent':
        return {
          bg: 'bg-accent',
          text: 'text-accent-foreground',
          light: 'bg-accent/10',
          border: 'border-accent/20'
        };
      case 'success':
        return {
          bg: 'bg-success',
          text: 'text-success-foreground',
          light: 'bg-success/10',
          border: 'border-success/20'
        };
      default:
        return {
          bg: 'bg-primary',
          text: 'text-primary-foreground',
          light: 'bg-primary/10',
          border: 'border-primary/20'
        };
    }
  };

  return (
    <section id="skills" className="mt-4 py-20 bg-background">
      {/* Background decoration */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 blur-sm transition-all duration-1000"
        style={{ backgroundImage: `url(${skillBg})` }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            Skills & Expertise
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <Card key={categoryIndex} className={`overflow-hidden transition-smooth hover:shadow-medium group bg-gradient-card ${colors.border}`}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl ${colors.bg} ${colors.text} group-hover:scale-110 transition-spring`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                   <div className="grid grid-cols-1 gap-3">
                     {category.skills.map((skill, skillIndex) => (
                       <div key={skillIndex} className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-smooth">
                         <div className="w-2 h-2 bg-primary rounded-full"></div>
                         <span className="text-foreground font-medium">{skill}</span>
                       </div>
                     ))}
                   </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-primary/20">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Continuous Learning Mindset
              </h3>
              <p className="text-muted-foreground">
                I believe in continuous improvement and staying updated with the latest trends 
                in digital marketing, technology, and business development. My skills are 
                constantly evolving through practical experience and professional development programs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CVSkills;