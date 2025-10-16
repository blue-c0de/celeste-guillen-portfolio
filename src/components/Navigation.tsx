import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useEffect, useState } from 'react';
import { Language } from '../utils/i18n';
import { X } from 'lucide-react';

interface NavigationProps {
    onNavigate: (section: string) => void;
    activeSection: string;
    currentLang: Language;
    onLangChange: (lang: Language) => void;
    translations: any;
}

export function Navigation({ onNavigate, activeSection, currentLang, onLangChange, translations }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const sections = [
        { id: 'about', label: translations.nav.about },
        { id: 'skills', label: translations.nav.skills },
        { id: 'experience', label: translations.nav.experience },
        { id: 'education', label: translations.nav.education },
        { id: 'projects', label: translations.nav.projects },
        { id: 'contact', label: translations.nav.contact }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigate = (section: string) => {
        onNavigate(section);
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled || mobileMenuOpen
                    ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-sm'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => onNavigate('hero')}
                        className="transition-transform hover:scale-105 relative z-10"
                    >
                        <Logo variant="minimal" size="sm" />
                    </button>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => onNavigate(section.id)}
                                className={`text-sm transition-colors hover:text-cyan-500 relative ${
                                    activeSection === section.id
                                        ? 'text-cyan-500'
                                        : 'text-muted-foreground'
                                }`}
                            >
                                {section.label}
                                {activeSection === section.id && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-500 rounded-full" />
                                )}
                            </button>
                        ))}

                        <div className="ml-2 pl-6 border-l border-border">
                            <LanguageSwitcher currentLang={currentLang} onLangChange={onLangChange} />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4 relative z-10">
                        <LanguageSwitcher currentLang={currentLang} onLangChange={onLangChange} />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-foreground" />
                            ) : (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-foreground"
                                >
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-border mt-4 pt-4 pb-4 bg-background/95">
                        <div className="flex flex-col gap-2">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => handleNavigate(section.id)}
                                    className={`text-left px-4 py-3 rounded-lg transition-colors ${
                                        activeSection === section.id
                                            ? 'text-cyan-500 bg-cyan-500/10 font-medium'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}