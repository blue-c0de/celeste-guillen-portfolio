import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { Card } from './ui/card';

interface AboutSectionProps {
  translations: any;
}

export function AboutSection({ translations }: AboutSectionProps) {
  const highlights = [
    {
      icon: Code2,
      title: translations.about.cleanCode,
      description: translations.about.cleanCodeDesc
    },
    {
      icon: Palette,
      title: translations.about.uiux,
      description: translations.about.uiuxDesc
    },
    {
      icon: Rocket,
      title: translations.about.performance,
      description: translations.about.performanceDesc
    },
    {
      icon: Users,
      title: translations.about.collaboration,
      description: translations.about.collaborationDesc
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {translations.about.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {translations.about.subtitle}
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {translations.about.paragraph1}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {translations.about.paragraph2}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {translations.about.paragraph3}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <p className="text-cyan-500">2</p>
                  <p className="text-sm text-muted-foreground">{translations.about.years}</p>
                </div>
                <div className="text-center">
                  <p className="text-cyan-500">2</p>
                  <p className="text-sm text-muted-foreground">{translations.about.projects}</p>
                </div>
                <div className="text-center">
                  <p className="text-cyan-500">1+</p>
                  <p className="text-sm text-muted-foreground">{translations.about.clients}</p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm">{highlight.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
