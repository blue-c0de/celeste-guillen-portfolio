import { Languages } from 'lucide-react';
import { Language } from '../utils/i18n';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLang, onLangChange }: LanguageSwitcherProps) {
  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' }
  ];

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-4 h-4 text-muted-foreground" />
      <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onLangChange(lang.code)}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              currentLang === lang.code
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
