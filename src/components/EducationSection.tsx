import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award } from 'lucide-react';

interface EducationSectionProps {
  translations: any;
}

export function EducationSection({ translations }: EducationSectionProps) {
  const education = translations.education.educations;

  return (
    <section className="min-h-screen flex items-center py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {translations.education.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {translations.education.subtitle}
            </p>
          </div>

          {/* Education Grid */}
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <a href={edu.href} target="_blank" rel="noopener noreferrer">
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            edu.type === 'degree' 
                              ? 'bg-gradient-to-br from-cyan-500 to-blue-600' 
                              : 'bg-gradient-to-br from-purple-500 to-pink-600'
                          }`}>
                            {edu.type === 'degree' ? (
                              <GraduationCap className="w-6 h-6 text-white" />
                            ) : (
                              <Award className="w-6 h-6 text-white" />
                            )}
                          </div>
                          <div className="space-y-1">
                            <h3>{edu.degree}</h3>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="whitespace-nowrap">
                          {edu.period}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {edu.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
