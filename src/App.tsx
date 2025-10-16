import { useRef, useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Language, useTranslations } from './utils/i18n';

export function App() {
    const [activeSection, setActiveSection] = useState('hero');
    const [currentLang, setCurrentLang] = useState<Language>('es');

    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const sectionRefs: { // @ts-ignore
        [key: string]: React.RefObject<HTMLDivElement> } = {
        hero: heroRef,
        about: aboutRef,
        skills: skillsRef,
        experience: experienceRef,
        education: educationRef,
        projects: projectsRef,
        contact: contactRef
    };

    const translations = useTranslations(currentLang);

    // Profile image
    const profileImage = "https://media.licdn.com/dms/image/v2/D5603AQGIissyTO3U5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719156379981?e=1763596800&v=beta&t=7LG2eSd7Pcy6KaEZiLRhAXsZaTHmZlRirwb5XvNXyCk";

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const ref = sectionRefs[sectionId];
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    // Handle scroll down from hero
    const handleScrollDown = () => {
        scrollToSection('about');
    };

    // Detect active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const [sectionId, ref] of Object.entries(sectionRefs)) {
                if (ref.current) {
                    const {offsetTop, offsetHeight} = ref.current;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation
                onNavigate={scrollToSection}
                activeSection={activeSection}
                currentLang={currentLang}
                onLangChange={setCurrentLang}
                translations={translations}
            />

            <div ref={heroRef}>
                <HeroSection
                    onScrollDown={handleScrollDown}
                    profileImage={profileImage}
                    translations={translations}
                />
            </div>

            <div ref={aboutRef}>
                <AboutSection translations={translations}/>
            </div>

            <div ref={skillsRef}>
                <SkillsSection translations={translations}/>
            </div>

            <div ref={experienceRef}>
                <ExperienceSection translations={translations}/>
            </div>

            <div ref={educationRef}>
                <EducationSection translations={translations}/>
            </div>

            <div ref={projectsRef}>
                <ProjectsSection translations={translations}/>
            </div>

            <div ref={contactRef}>
                <ContactSection translations={translations}/>
            </div>

            {/* Footer */}
            <footer className="py-8 border-t border-border">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Celeste Guillén.
                    </p>
                </div>
            </footer>
        </div>
    );
}
