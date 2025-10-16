import {ImageWithFallback} from './figma/ImageWithFallback';
import {ArrowDown} from 'lucide-react';

interface HeroSectionProps {
    onScrollDown: () => void;
    profileImage: string;
    translations: any;
}

export function HeroSection({onScrollDown, profileImage, translations}: HeroSectionProps) {
    return (
        <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"/>
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"/>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                {/* Profile Image */}
                <div className="relative inline-block">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse"/>
                    <div
                        className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-background shadow-2xl">
                        <ImageWithFallback
                            src={profileImage}
                            alt="Celeste Guillén"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Name and Title */}
                <div className="space-y-4">
                    <h1 className="bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                        Celeste Guillén
                    </h1>

                    <div className="space-y-2">
                        <p className="text-muted-foreground">{translations.hero.role}</p>
                        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                            {translations.hero.description}
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <button
                        onClick={onScrollDown}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                    >
                        {translations.hero.viewWork}
                    </button>
                    <a href={translations.hero.href} target="_blank" rel="noopener noreferrer">
                        <button className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
                            {translations.hero.downloadCV}
                        </button>
                    </a>
                </div>

                <br/>
                <br/>

                {/* Scroll Indicator */}
                <button
                    onClick={onScrollDown}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <ArrowDown className="w-6 h-6 text-muted-foreground"/>
                </button>
            </div>

            <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </section>
    );
}
