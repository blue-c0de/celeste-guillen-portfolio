import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase } from 'lucide-react';

interface ExperienceSectionProps {
  translations: any;
}

export function ExperienceSection({ translations }: ExperienceSectionProps) {
  const experiences = translations.experience.experiences;

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {translations.experience.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {translations.experience.subtitle}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-background" />
                  
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="space-y-1">
                          <h3>{exp.position}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <p className="text-xs font-semibold text-muted-foreground">{exp.contract}</p>
                        </div>
                        <Badge variant="secondary" className="whitespace-nowrap">
                          {exp.period}
                        </Badge>
                      </div>

                      <ul className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description.map((func) => (
                            <li key={func}>{func}</li>
                        ))
                        }
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
