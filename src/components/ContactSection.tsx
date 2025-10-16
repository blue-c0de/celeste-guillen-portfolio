import { useState } from "react";
import { Card } from './ui/card';
import { Mail, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
    translations: any;
}

export function ContactSection({ translations }: ContactSectionProps) {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const socialLinks = [
        { icon: Github, label: 'GitHub', href: 'https://github.com/blue-c0de', color: 'hover:text-foreground' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/celeste-guill%C3%A9n-996ba1305/', color: 'hover:text-blue-500' },
        { icon: Mail, label: 'Email', href: 'mailto:cxsguillen@gmail.com', color: 'hover:text-red-500' }
    ];

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // @ts-ignore
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!formData.name || !formData.email || !formData.message) {
            setError("Por favor, completa todos los campos.");
            return;
        }

        if (!validateEmail(formData.email)) {
            setError("El correo no es válido.");
            return;
        }

        // Envía correo con EmailJS
        emailjs.send(
            "service_rc8w89t",
            "template_vkr988z",
            formData,
            "8yLt8aHAh77felbfS"
        ).then(() => {
            setSuccess("Correo enviado correctamente!");
            setFormData({ name: "", email: "", message: "" });
        }).catch(() => {
            setError("Error al enviar el correo. Intenta más tarde.");
        });
    };

    return (
        <section className="min-h-screen flex items-center py-20 px-6">
            <div className="max-w-4xl mx-auto w-full">
                <div className="space-y-12">
                    {/* Section Header */}
                    <div className="text-center space-y-4">
                        <h2 className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            {translations.contact.title}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {translations.contact.subtitle}
                        </p>
                    </div>

                    {/* Contact Card */}
                    <Card className="p-8 md:p-12 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Contact Info */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="mb-2">{translations.contact.info}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {translations.contact.infoDesc}
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="pt-4">
                                    <p className="text-sm mb-4">{translations.contact.socials}</p>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center transition-colors ${social.color}`}
                                                aria-label={social.label}
                                                target="_blank"
                                            >
                                                <social.icon className="w-5 h-5"/>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {error && <p className="text-sm text-red-500">{error}</p>}
                                {success && <p className="text-sm text-green-500">{success}</p>}

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm">{translations.contact.name}</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder={translations.contact.namePlaceholder}
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:border-cyan-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm">{translations.contact.email}</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder={translations.contact.emailPlaceholder}
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:border-cyan-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm">{translations.contact.message}</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder={translations.contact.messagePlaceholder}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                                >
                                    {translations.contact.send}
                                </button>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}