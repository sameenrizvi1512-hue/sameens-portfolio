import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CVCertifications = () => {
  const certifications = [
    {
      title: "Certificate in Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      date: "2024",
      description: "Comprehensive foundation course covering essential digital marketing principles, strategies, and best practices for online business growth.",
      skills: ["Digital Marketing", "SEO Basics", "Online Advertising", "Analytics", "Content Marketing"],
      verified: true,
      isRecent: false
    },
    {
      title: "Social Media Marketing",
      issuer: "HP LIFE (HP Foundation)",
      date: "July 23, 2025",
      certificateId: "9e5df829-f25e-4ae8-b576-cf0cd6af7860",
      description: "Comprehensive course covering advertising across social platforms, effective social media marketing campaigns, and targeted social media advertising strategies.",
      skills: ["Social Media Strategy", "Digital Advertising", "Campaign Management", "Target Audience Analysis"],
      verified: true,
      isRecent: false
    },
    {
      title: "Effective Presentations",
      issuer: "HP LIFE (HP Foundation)",
      date: "August 21, 2025",
      certificateId: "936ee5a2-4697-4f96-ac7e-ffc3be3c04bc01",
      description: "Advanced training in tailoring information for audiences, delivering persuasive presentations, and creating effective and well-designed presentations.",
      skills: ["Presentation Skills", "Audience Analysis", "Persuasive Communication", "Presentation Design"],
      verified: true,
      isRecent: false
    },
    {
      title: "Customer Relationship Management",
      issuer: "HP LIFE (HP Foundation)", 
      date: "August 19, 2025",
      certificateId: "354d473e-f9fe-1443-d838-8f7b0885c153",
      description: "Advanced training in understanding customer needs, buying habits, and developing customer relationship management strategies for business growth.",
      skills: ["Customer Analysis", "CRM Strategy", "Business Development", "Customer Retention"],
      verified: true,
      isRecent: false
    },
    {
      title: "Industrial Insight Symposium: Bridging Industries Through Oral Communication",
      issuer: "Mohammad Ali Jinnah University",
      date: "June 13, 2024",
      type: "Presenter",
      description: "Participated as a presenter in university symposium focusing on industrial communication and cross-industry collaboration.",
      skills: ["Public Speaking", "Industry Analysis", "Communication", "Presentation Skills"],
      verified: true,
      isRecent: false
    },
    {
      title: "Certificate of Appreciation - Seminar Participation",
      issuer: "Mohammad Ali Jinnah University",
      date: "June 8, 2024",
      type: "Participant",
      description: "Recognized for active participation in educational development programme seminar, demonstrating commitment to continuous learning.",
      skills: ["Professional Development", "Academic Excellence", "Continuous Learning"],
      verified: true,
      isRecent: false
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Certifications & Achievements
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className={`overflow-hidden transition-smooth hover:shadow-medium group bg-card border-primary/20`}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-spring">
                      <Award className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg leading-tight mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    {cert.verified && (
                      <div className="flex items-center gap-1 text-success text-xs">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </div>
                    )}
                    {cert.isRecent && (
                      <Badge variant="default" className="bg-success text-success-foreground">
                        Recent
                      </Badge>
                    )}
                    {cert.type && (
                      <Badge variant="secondary">
                        {cert.type}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
                
                {cert.certificateId && (
                  <div className="text-xs text-muted-foreground">
                    Certificate ID: {cert.certificateId}
                  </div>
                )}
                
                <div className="space-y-3 pt-2">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            All certifications are independently verified and include official certificate numbers where applicable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CVCertifications;