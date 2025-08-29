import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CVEducation = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Accounting & Finance",
      institution: "Mohammad Ali Jinnah University",
      location: "Karachi, Pakistan",
      period: "February 2023 - Present",
      status: "In Progress",
      gpa: "Current CGPA: 3.45",
      isMain: true
    },
    {
      degree: "Intermediate in Commerce",
      institution: "Khatoon-e-Pakistan Girls Government College",
      location: "Karachi, Pakistan",
      period: "July 2022",
      status: "Completed",
      isMain: false
    },
    {
      degree: "Matriculation, Vision High School",
      institution: "Vision High School",
      location: "Karachi, Pakistan",
      period: "May 2020",
      status: "Completed",
      isMain: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Education
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Academic Background</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My educational journey focusing on business, finance, and commerce
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className={`overflow-hidden transition-smooth hover:shadow-medium group ${
              edu.isMain ? 'border-primary/20 bg-gradient-card' : 'bg-card'
            }`}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${
                        edu.isMain ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      } group-hover:scale-110 transition-spring`}>
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-medium text-primary mb-1">
                          {edu.institution}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                        </div>
                        
                        {edu.gpa && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {edu.gpa}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Badge variant={edu.status === 'In Progress' ? 'default' : 'secondary'}>
                      {edu.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVEducation;