export type Language = 'es' | 'en' | 'de';

const experience1 = calcularMeses('2022-03-01', '2022-06-30');
const experience2 = calcularMeses('2024-03-01', '2024-06-30');
const experience3 = calcularMeses('2024-07-01', new Date());

export const translations = {
    es: {
        nav: {
            about: 'Sobre mí',
            skills: 'Habilidades',
            experience: 'Experiencia',
            education: 'Educación',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        hero: {
            role: 'Desarrolladora Full Stack',
            description: '📍 Madrid, Comunidad de Madrid, España',
            viewWork: 'Sobre mí',
            downloadCV: 'Descargar CV',
            href: '/celeste-guillen-portfolio/pdf/Curriculum Vitae - Celeste Guillen - ES.pdf'
        },
        about: {
            title: 'Sobre mí',
            subtitle: 'Mi curiosidad es el motor que impulsa mi crecimiento en IT.',
            paragraph1: 'Desarrolladora Full Stack con 2 años de experiencia en el desarrollo y despliegue de aplicaciones web, móviles y de escritorio. Actualmente, compagino mi actividad profesional en INECO con mis estudios en Inteligencia Artificial y Computación.',
            paragraph2: 'Poseo formación técnica superior en Desarrollo de Aplicaciones Multiplataforma y técnica en Sistemas de Microinformática y Redes, lo que me permite abordar proyectos desde una perspectiva integral, tanto en desarrollo como en soporte técnico y administración de infraestructuras.',
            paragraph3: 'Soy trilingüe en español, inglés y alemán, y me destaco por mi capacidad de aprendizaje constante, adaptabilidad y trabajo en equipo.',
            years: 'Años',
            projects: 'Proyectos propios',
            clients: 'Clientes',
            cleanCode: 'Clean Code',
            cleanCodeDesc: 'Código limpio, mantenible y escalable',
            uiux: 'UI/UX Design',
            uiuxDesc: 'Diseños intuitivos y modernos',
            performance: 'Performance',
            performanceDesc: 'Optimización y velocidad',
            collaboration: 'Colaboración',
            collaborationDesc: 'Trabajo en equipo efectivo'
        },
        skills: {
            title: 'Habilidades',
            subtitle: 'Tecnologías y herramientas con las que trabajo',
            frontend: 'Frontend',
            backend: 'Backend',
            tools: 'Herramientas'
        },
        experience: {
            title: 'Experiencia',
            subtitle: 'Mi trayectoria profesional',
            experiences: [
                {
                    company: 'INECO',
                    position: 'Desarrolladora Full Stack',
                    period: 'Jun 2024 - Presente',
                    contract: `Jornada Completa - ${experience3}`,
                    description: [
                        'Continuación de las funciones realizadas durante las prácticas, sumando nuevas actividades como:',
                        '- Desarrollo de servicios REST/SOAP y verificación mediante Postman y SoapUI.',
                        '- Integración de la aplicación con otros sistemas y servicios externos.',
                        '- Gestión y despliegue de la aplicación en tres entornos diferenciados (desarrollo, preproducción y producción).',
                        '- Participación activa en el proceso de salida a producción, incluyendo validaciones finales, resolución de incidencias y seguimiento post-despliegue.',
                        '- Monitoreo y análisis de logs mediante Graylog.'
                    ],
                    technologies: ['JSON', 'REST', 'SOAP', 'Postman API', 'Graylog']
                },
                {
                    company: 'INECO',
                    position: 'Desarrolladora Full Stack',
                    period: 'Mar 2024 - Jun 2024',
                    contract: `Contrato de Prácticas - ${experience2}`,
                    description: [
                        '- Desarrollo y mantenimiento de aplicaciones web tanto backend como frontend.',
                        '- Lanzamiento y pruebas de aplicaciones en entorno local utilizando Apache Tomcat.',
                        '- Realización de consultas, actualizaciones y eliminaciones de datos en bases de datos (SQL).',
                        '- Uso de herramientas de control de versiones como GitLab para la gestión del código.',
                        '- Uso de Jenkins para la integración y despliegue continuo.',
                        '- Seguimiento de tareas y planificación del trabajo mediante JIRA.',
                        '- Colaboración con el resto del equipo para implementar nuevas funcionalidades y mantenimiento de las existentes.'
                    ],
                    technologies: ['Java', 'JSP', 'Oracle SQL Developer', 'Maven', 'Tomcat', 'Jenkins', 'Gitlab']
                },
                {
                    company: 'NETCheck',
                    position: 'Soporte Informático y Redes',
                    period: 'Mar 2022 - Jun 2022',
                    contract: `Contrato de Prácticas - ${experience1}`,
                    description: [
                        '- Configuración y mantenimiento de redes LAN, incluyendo switches, routers y firewalls.',
                        '- Instalación del sistema operativo propio de la empresa, derivado de Linux.',
                        '- Implementación de políticas de seguridad informática.',
                        '- Gestión de back-ups y recuperación de datos.',
                        '- Mantenimiento de equipos informáticos.',
                        '- Soporte técnico a usuarios.'
                    ],
                    technologies: ['Disk Management', 'Anydesk', 'TeamViewer', 'Parted', 'Clonezilla', 'MemTest86', 'Filezilla']
                }
            ]
        },
        education: {
            title: 'Educación',
            subtitle: 'Formación académica y certificaciones',
            educations: [
                {
                    type: 'degree',
                    institution: 'Universidad Alfonso X el Sabio',
                    degree: 'Grado Inteligencia Artificial y Computación',
                    period: 'Oct 2024 - Jun 2027',
                    description: 'Nota: Primer Curso - 8.0',
                    technologies: ['Python', 'R', 'Scala']
                },
                {
                    type: 'degree',
                    institution: 'Instituto Juan de la Cierva',
                    degree: 'Grado Superior de Desarrollo de Aplicaciones Multiplataforma',
                    period: 'Sep 2022 - Jun 2024',
                    description: 'Nota: 8.00',
                    technologies: ['AndroidStudio', 'Java', 'JavaScript', 'CSS', 'HTML5', 'SQL', 'PL/SQL']
                },
                {
                    type: 'degree',
                    institution: 'Instituto Juan de la Cierva',
                    degree: 'Grado Medio de Sistemas de Microinformática y Redes',
                    period: 'Sep 2020 - Jun 2022',
                    description: 'Nota: 8.09',
                    technologies: ['Packet Tracer', 'Windows', 'Cisco Routers', 'Putty', 'Linux']
                },
                {
                    type: 'certification',
                    institution: 'AWS Certifications',
                    degree: 'AWS Certified Solutions Architect 🔗',
                    period: 'Oct 2025',
                    technologies: ['AWS', 'Cloud Computing', 'DevOps'],
                    href: '#'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Programación en Inteligencia Artificial y Big Data 🔗',
                    period: 'Jul 2025',
                    technologies: ['Aprendizaje automático', 'Aprendizaje profundo', 'NLP', 'Big data'],
                    href: '/celeste-guillen-portfolio/pdf/Programación en Inteligencia Artificial y Big Data.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Desarrollo de Aplicaciones Web con Angular - Tomo 2 🔗',
                    period: 'Mar 2025',
                    technologies: ['AngularJS', 'Angular Material', 'Ionic Framework', 'Bootstrap'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollo de Aplicaciones Web con Angular - Tomo 2.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Google Analytics y Google Metatags 🔗',
                    period: 'Mar 2025',
                    technologies: ['Google Analytics', 'Google Tag Manager', 'Google Ads', 'Google Metatags'],
                    href: '/celeste-guillen-portfolio/pdf/Google Analytics y Google Metatags.pdf'
                },
                {
                    type: 'certification',
                    institution: 'INECO',
                    degree: 'Microsoft Power BI 🔗',
                    period: 'Mar 2025',
                    technologies: ['Microsoft Power BI', 'Expresiones de análisis de datos (DAX)', 'Visualización de datos', 'Análisis de datos', 'Microsoft Power Query'],
                    href: '/celeste-guillen-portfolio/pdf/Microsoft Power BI.pdf'
                },
                {
                    type: 'certification',
                    institution: 'CAS Training',
                    degree: 'Bases de Datos NoSQL: MongoDB Y CouchDB 🔗',
                    period: 'Dic 2024',
                    technologies: ['NoSQL', 'MongoDB', 'CouchDB', 'Big data', 'Optimización'],
                    href: '/celeste-guillen-portfolio/pdf/Bases de Datos NoSQL - MongoDB Y CouchDB.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Student Ambassador Program with IBM SkillsBuild ',
                    degree: 'Desarrollo de Aplicaciones en Python 🔗',
                    period: 'Nov 2024',
                    technologies: ['Python', 'Django', 'Programación orientada a objetos (POO)', 'Pruebas', 'Git'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollo de Aplicaciones en Python.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Desarrollo de Aplicaciones Web con Angular - Tomo 1 🔗',
                    period: 'Oct 2024',
                    technologies: ['Angular', 'TypeScript', 'PIPEs', 'JSON', 'Observables y Promesas (RxJS)'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollo de Aplicaciones Web con Angular - Tomo 1.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Experis España',
                    degree: 'Desarrollador de Soluciones en la Nube de AWS 🔗',
                    period: 'Ago 2024',
                    technologies: ['Amazon S3', 'Amazon Dynamodb', 'Amazon EC2', 'Amazon VPC', 'AWS Lambda', 'API Gateways', 'AWS CloudFormation', 'Implementación de CI/CD'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollador de Soluciones en la Nube de AWS.pdf'
                }
            ]
        },
        projects: {
            title: 'Proyectos',
            subtitle: 'Trabajos destacados y casos de estudio',
            viewProject: 'Ver proyecto',
            viewCode: 'Ver código',
            projects: [
                {
                    title: 'MadridIndustria',
                    description: 'Es una app para despertar el interés y el aprecio por el patrimonio industrial en la Comunidad de Madrid. Permite explorar sitios históricos, marcarlos en un mapa interactivo y organizar favoritos. Los gestores pueden agregar, actualizar y eliminar información.',
                    image: 'https://play-lh.googleusercontent.com/aLQzhGptlbF-1ND3IwU2cLk32X7-d3-Z0NeASn3l79Nfe3LD-yJUhWlf7Sigox2Nr-4=w5120-h2880-rw',
                    technologies: ['Java', 'SQLite', 'Firebase', 'Figma'],
                    github: 'https://github.com/YanetC04/MadridIndustria',
                    demo: 'https://play.google.com/store/apps/details?id=com.proyectointegrador.madridindustria&hl=en_US'
                },
                {
                    title: 'SmartOper / SmartOfic',
                    description: 'SmartOper y SmartOfic son componentes de un mini ERP. En SmartOfic, se crea, modifica e imprime incidencias. En SmartOper, los operarios reciben estas incidencias asignadas. Se resuelven ingresando datos como fechas de inicio y finalización, así como adjuntando pruebas visuales, que validen la ejecución del trabajo.',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
                    technologies: ['ERP Software', 'Java', 'MySQL', 'Maven', 'Gradle', 'Firebase'],
                    github: 'https://github.com/blue-c0de/SmartOfic',
                    demo: 'https://github.com/blue-c0de/SmartOper'
                }
            ]
        },
        contact: {
            title: 'Contacto',
            subtitle: '¿Tienes un proyecto en mente? Hablemos',
            info: 'Información',
            infoDesc: 'Estoy disponible para proyectos freelance y oportunidades de colaboración. No dudes en contactarme.',
            email: 'Email',
            socials: 'Redes sociales',
            name: 'Nombre',
            namePlaceholder: 'Tu nombre',
            emailPlaceholder: 'tu@email.com',
            message: 'Mensaje',
            messagePlaceholder: 'Tu mensaje...',
            send: 'Enviar mensaje'
        }
    },
    en: {
        nav: {
            about: 'About Me',
            skills: 'Skills',
            experience: 'Experience',
            education: 'Education',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            role: 'Full Stack Developer',
            description: '📍 Madrid, Community of Madrid, Spain',
            viewWork: 'About Me',
            downloadCV: 'Download CV',
            href: '/celeste-guillen-portfolio/pdf/Curriculum Vitae - Celeste Guillen - EN.pdf'
        },
        about: {
            title: 'About Me',
            subtitle: 'My curiosity is the engine driving my growth in IT.',
            paragraph1: 'Full Stack Developer with 2 years of experience in the development and deployment of web, mobile, and desktop applications. Currently, I combine my professional work at INECO with my studies in Artificial Intelligence and Computing.',
            paragraph2: 'I have higher technical training in Multiplatform Application Development and technical training in Microcomputer Systems and Networks, which allows me to approach projects from a comprehensive perspective, both in development and in technical support and infrastructure management.',
            paragraph3: 'I am trilingual in Spanish, English, and German, and I stand out for my constant learning ability, adaptability, and teamwork.',
            years: 'Years',
            projects: 'Personal Projects',
            clients: 'Clients',
            cleanCode: 'Clean Code',
            cleanCodeDesc: 'Clean, maintainable, and scalable code',
            uiux: 'UI/UX Design',
            uiuxDesc: 'Intuitive and modern designs',
            performance: 'Performance',
            performanceDesc: 'Optimization and speed',
            collaboration: 'Collaboration',
            collaborationDesc: 'Effective teamwork'
        },
        skills: {
            title: 'Skills',
            subtitle: 'Technologies and tools I work with',
            frontend: 'Frontend',
            backend: 'Backend',
            tools: 'Tools'
        },
        experience: {
            title: 'Experience',
            subtitle: 'My professional journey',
            experiences: [
                {
                    company: 'INECO',
                    position: 'Full Stack Developer',
                    period: 'Jun 2024 - Present',
                    contract: `Full-time - ${experience3}`,
                    description: [
                        'Continuation of the functions performed during the internship, adding new activities such as:',
                        '- Development of REST/SOAP services and verification via Postman and SoapUI.',
                        '- Integration of the application with other systems and external services.',
                        '- Management and deployment of the application in three differentiated environments (development, pre-production, and production).',
                        '- Active participation in the production release process, including final validations, issue resolution, and post-deployment monitoring.',
                        '- Monitoring and analysis of logs using Graylog.'
                    ],
                    technologies: ['JSON', 'REST', 'SOAP', 'Postman API', 'Graylog']
                },
                {
                    company: 'INECO',
                    position: 'Full Stack Developer',
                    period: 'Mar 2024 - Jun 2024',
                    contract: `Internship - ${experience2}`,
                    description: [
                        '- Development and maintenance of web applications, both backend and frontend.',
                        '- Deployment and testing of applications in local environments using Apache Tomcat.',
                        '- Performing database queries, updates, and deletions (SQL).',
                        '- Using version control tools like GitLab for code management.',
                        '- Using Jenkins for continuous integration and deployment.',
                        '- Task tracking and work planning via JIRA.',
                        '- Collaborating with the team to implement new features and maintain existing ones.'
                    ],
                    technologies: ['Java', 'JSP', 'Oracle SQL Developer', 'Maven', 'Tomcat', 'Jenkins', 'Gitlab']
                },
                {
                    company: 'NETCheck',
                    position: 'IT Support and Networks',
                    period: 'Mar 2022 - Jun 2022',
                    contract: `Internship - ${experience1}`,
                    description: [
                        '- Configuration and maintenance of LAN networks, including switches, routers, and firewalls.',
                        '- Installation of the company’s proprietary operating system, derived from Linux.',
                        '- Implementation of IT security policies.',
                        '- Backup management and data recovery.',
                        '- Maintenance of computer equipment.',
                        '- Technical support for users.'
                    ],
                    technologies: ['Disk Management', 'Anydesk', 'TeamViewer', 'Parted', 'Clonezilla', 'MemTest86', 'Filezilla']
                }
            ]
        },
        education: {
            title: 'Education',
            subtitle: 'Academic background and certifications',
            educations: [
                {
                    type: 'degree',
                    institution: 'Alfonso X el Sabio University',
                    degree: 'Bachelor’s Degree in Artificial Intelligence and Computing',
                    period: 'Oct 2024 - Jun 2027',
                    description: 'GPA: First Year - 8.0',
                    technologies: ['Python', 'R', 'Scala']
                },
                {
                    type: 'degree',
                    institution: 'Juan de la Cierva Institute',
                    degree: 'Advanced Vocational Training in Multiplatform Application Development',
                    period: 'Sep 2022 - Jun 2024',
                    description: 'GPA: 8.00',
                    technologies: ['AndroidStudio', 'Java', 'JavaScript', 'CSS', 'HTML5', 'SQL', 'PL/SQL']
                },
                {
                    type: 'degree',
                    institution: 'Juan de la Cierva Institute',
                    degree: 'Intermediate Vocational Training in Microcomputer Systems and Networks',
                    period: 'Sep 2020 - Jun 2022',
                    description: 'GPA: 8.09',
                    technologies: ['Packet Tracer', 'Windows', 'Cisco Routers', 'Putty', 'Linux']
                },
                {
                    type: 'certification',
                    institution: 'AWS Certifications',
                    degree: 'AWS Certified Solutions Architect 🔗',
                    period: 'Oct 2025',
                    technologies: ['AWS', 'Cloud Computing', 'DevOps'],
                    href: '#'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Programming in Artificial Intelligence and Big Data 🔗',
                    period: 'Jul 2025',
                    technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Big Data'],
                    href: '/celeste-guillen-portfolio/pdf/Programación en Inteligencia Artificial y Big Data.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Web Application Development with Angular - Volume 2 🔗',
                    period: 'Mar 2025',
                    technologies: ['AngularJS', 'Angular Material', 'Ionic Framework', 'Bootstrap'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollo de Aplicaciones Web con Angular - Tomo 2.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Google Analytics and Google Metatags 🔗',
                    period: 'Mar 2025',
                    technologies: ['Google Analytics', 'Google Tag Manager', 'Google Ads', 'Google Metatags'],
                    href: '/celeste-guillen-portfolio/pdf/Google Analytics y Google Metatags.pdf'
                },
                {
                    type: 'certification',
                    institution: 'INECO',
                    degree: 'Microsoft Power BI 🔗',
                    period: 'Mar 2025',
                    technologies: ['Microsoft Power BI', 'Data Analysis Expressions (DAX)', 'Data Visualization', 'Data Analysis', 'Microsoft Power Query'],
                    href: '/celeste-guillen-portfolio/pdf/Microsoft Power BI.pdf'
                },
                {
                    type: 'certification',
                    institution: 'CAS Training',
                    degree: 'NoSQL Databases: MongoDB and CouchDB 🔗',
                    period: 'Dec 2024',
                    technologies: ['NoSQL', 'MongoDB', 'CouchDB', 'Big Data', 'Optimization'],
                    href: '/celeste-guillen-portfolio/pdf/Bases de Datos NoSQL - MongoDB Y CouchDB.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Student Ambassador Program with IBM SkillsBuild',
                    degree: 'Python Application Development 🔗',
                    period: 'Nov 2024',
                    technologies: ['Python', 'Django', 'Object-Oriented Programming (OOP)', 'Testing', 'Git'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollo de Aplicaciones en Python.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Web Application Development with Angular - Volume 1 🔗',
                    period: 'Oct 2024',
                    technologies: ['Angular', 'TypeScript', 'PIPEs', 'JSON', 'Observables and Promises (RxJS)'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollo de Aplicaciones Web con Angular - Tomo 1.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Experis Spain',
                    degree: 'AWS Cloud Solutions Developer 🔗',
                    period: 'Aug 2024',
                    technologies: ['Amazon S3', 'Amazon DynamoDB', 'Amazon EC2', 'Amazon VPC', 'AWS Lambda', 'API Gateways', 'AWS CloudFormation', 'CI/CD Implementation'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollador de Soluciones en la Nube de AWS.pdf'
                }

            ]
        },
        projects: {
            title: 'Projects',
            subtitle: 'Featured work and case studies',
            viewProject: 'View Project',
            viewCode: 'View Code',
            projects: [
                {
                    title: 'MadridIndustria',
                    description: 'It is an app to spark interest and appreciation for industrial heritage in the Community of Madrid. It allows users to explore historical sites, mark them on an interactive map, and organize favorites. Managers can add, update, and delete information.',
                    image: 'https://play-lh.googleusercontent.com/aLQzhGptlbF-1ND3IwU2cLk32X7-d3-Z0NeASn3l79Nfe3LD-yJUhWlf7Sigox2Nr-4=w5120-h2880-rw',
                    technologies: ['Java', 'SQLite', 'Firebase', 'Figma'],
                    github: 'https://github.com/YanetC04/MadridIndustria',
                    demo: 'https://play.google.com/store/apps/details?id=com.proyectointegrador.madridindustria&hl=en_US'
                },
                {
                    title: 'SmartOper / SmartOfic',
                    description: 'SmartOper and SmartOfic are components of a mini ERP system. In SmartOfic, incidents can be created, modified, and printed. In SmartOper, operators receive the assigned incidents. They are resolved by entering data such as start and end dates, as well as attaching visual evidence to validate the completion of the work.',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
                    technologies: ['ERP Software', 'Java', 'MySQL', 'Maven', 'Gradle', 'Firebase'],
                    github: 'https://github.com/blue-c0de/SmartOfic',
                    demo: 'https://github.com/blue-c0de/SmartOper'
                }
            ]
        },
        contact: {
            title: 'Contact',
            subtitle: 'Do you have a project in mind? Let’s talk',
            info: 'Information',
            infoDesc: 'I am available for freelance projects and collaboration opportunities. Do not hesitate to contact me.',
            email: 'Email',
            socials: 'Social networks',
            name: 'Name',
            namePlaceholder: 'Your name',
            emailPlaceholder: 'your@email.com',
            message: 'Message',
            messagePlaceholder: 'Your message...',
            send: 'Send Message'
        }
    },

    de: {
        nav: {
            about: 'Über mich',
            skills: 'Fähigkeiten',
            experience: 'Erfahrung',
            education: 'Ausbildung',
            projects: 'Projekte',
            contact: 'Kontakt'
        },
        hero: {
            role: 'Full-Stack-Entwicklerin',
            description: '📍 Madrid, Gemeinschaft Madrid, Spanien',
            viewWork: 'Über mich',
            downloadCV: 'Lebenslauf herunterladen',
            href: '/celeste-guillen-portfolio/pdf/Curriculum Vitae - Celeste Guillen - DE.pdf'
        },
        about: {
            title: 'Über mich',
            subtitle: 'Meine Neugier ist der Motor, der mein Wachstum in der IT antreibt.',
            paragraph1: 'Full-Stack-Entwicklerin mit 2 Jahren Erfahrung in der Entwicklung und Bereitstellung von Web-, Mobil- und Desktop-Anwendungen. Derzeit kombiniere ich meine berufliche Tätigkeit bei INECO mit meinem Studium in Künstlicher Intelligenz und Informatik.',
            paragraph2: 'Ich habe eine höhere technische Ausbildung in der Entwicklung von Multiplattform-Anwendungen und eine technische Ausbildung in Mikroinformatik und Netzwerken, die es mir ermöglicht, Projekte aus einer umfassenden Perspektive zu betrachten – sowohl in der Entwicklung als auch im technischen Support und in der Verwaltung von Infrastrukturen.',
            paragraph3: 'Ich bin dreisprachig in Spanisch, Englisch und Deutsch und zeichne mich durch meine Fähigkeit zum ständigen Lernen, Anpassungsfähigkeit und Teamarbeit aus.',
            years: 'Jahre',
            projects: 'Eigene Projekte',
            clients: 'Kunden',
            cleanCode: 'Clean Code',
            cleanCodeDesc: 'Sauberer, wartbarer und skalierbarer Code',
            uiux: 'UI/UX Design',
            uiuxDesc: 'Intuitive und moderne Designs',
            performance: 'Leistung',
            performanceDesc: 'Optimierung und Geschwindigkeit',
            collaboration: 'Zusammenarbeit',
            collaborationDesc: 'Effektive Teamarbeit'
        },
        skills: {
            title: 'Fähigkeiten',
            subtitle: 'Technologien und Tools, mit denen ich arbeite',
            frontend: 'Frontend',
            backend: 'Backend',
            tools: 'Tools'
        },
        experience: {
            title: 'Erfahrung',
            subtitle: 'Mein beruflicher Werdegang',
            experiences: [
                {
                    company: 'INECO',
                    position: 'Full-Stack-Entwicklerin',
                    period: 'Jun 2024 - Gegenwart',
                    contract: `Vollzeit - ${experience3}`,
                    description: [
                        'Fortsetzung der während des Praktikums ausgeführten Aufgaben, ergänzt durch neue Tätigkeiten wie:',
                        '- Entwicklung von REST/SOAP-Diensten und Überprüfung über Postman und SoapUI.',
                        '- Integration der Anwendung mit anderen Systemen und externen Diensten.',
                        '- Verwaltung und Bereitstellung der Anwendung in drei verschiedenen Umgebungen (Entwicklung, Vorproduktion und Produktion).',
                        '- Aktive Teilnahme am Produktionsfreigabeprozess, einschließlich abschließender Validierungen, Fehlerbehebung und Post-Deployment-Überwachung.',
                        '- Überwachung und Analyse von Logs mit Graylog.'
                    ],
                    technologies: ['JSON', 'REST', 'SOAP', 'Postman API', 'Graylog']
                },
                {
                    company: 'INECO',
                    position: 'Full-Stack-Entwicklerin',
                    period: 'Mär 2024 - Jun 2024',
                    contract: `Praktikum - ${experience2}`,
                    description: [
                        '- Entwicklung und Wartung von Webanwendungen, sowohl Backend als auch Frontend.',
                        '- Bereitstellung und Tests von Anwendungen in lokalen Umgebungen mit Apache Tomcat.',
                        '- Durchführung von Datenbankabfragen, Aktualisierungen und Löschungen (SQL).',
                        '- Nutzung von Versionskontrolltools wie GitLab zur Codeverwaltung.',
                        '- Nutzung von Jenkins für kontinuierliche Integration und Bereitstellung.',
                        '- Aufgabenverfolgung und Arbeitsplanung über JIRA.',
                        '- Zusammenarbeit mit dem Team zur Implementierung neuer Funktionen und zur Wartung bestehender.'
                    ],
                    technologies: ['Java', 'JSP', 'Oracle SQL Developer', 'Maven', 'Tomcat', 'Jenkins', 'Gitlab']
                },
                {
                    company: 'NETCheck',
                    position: 'IT-Support und Netzwerke',
                    period: 'Mär 2022 - Jun 2022',
                    contract: `Praktikum - ${experience1}`,
                    description: [
                        '- Konfiguration und Wartung von LAN-Netzwerken, einschließlich Switches, Router und Firewalls.',
                        '- Installation des firmeneigenen Betriebssystems, abgeleitet von Linux.',
                        '- Umsetzung von IT-Sicherheitsrichtlinien.',
                        '- Backup-Management und Datenwiederherstellung.',
                        '- Wartung der Computerhardware.',
                        '- Technischer Support für Benutzer.'
                    ],
                    technologies: ['Disk Management', 'Anydesk', 'TeamViewer', 'Parted', 'Clonezilla', 'MemTest86', 'Filezilla']
                }
            ]
        },
        education: {
            title: 'Ausbildung',
            subtitle: 'Akademischer Hintergrund und Zertifikate',
            educations: [
                {
                    type: 'degree',
                    institution: 'Universität Alfonso X el Sabio',
                    degree: 'Bachelor in Künstlicher Intelligenz und Informatik',
                    period: 'Okt 2024 - Jun 2027',
                    description: 'GPA: Erstes Jahr - 8.0',
                    technologies: ['Python', 'R', 'Scala']
                },
                {
                    type: 'degree',
                    institution: 'Institut Juan de la Cierva',
                    degree: 'Höhere Berufsbildung in Multiplattform-Anwendungsentwicklung',
                    period: 'Sep 2022 - Jun 2024',
                    description: 'GPA: 8.00',
                    technologies: ['AndroidStudio', 'Java', 'JavaScript', 'CSS', 'HTML5', 'SQL', 'PL/SQL']
                },
                {
                    type: 'degree',
                    institution: 'Institut Juan de la Cierva',
                    degree: 'Mittlere Berufsbildung in Mikrocomputersystemen und Netzwerken',
                    period: 'Sep 2020 - Jun 2022',
                    description: 'GPA: 8.09',
                    technologies: ['Packet Tracer', 'Windows', 'Cisco Router', 'Putty', 'Linux']
                },
                {
                    type: 'certification',
                    institution: 'AWS-Zertifizierungen',
                    degree: 'AWS Certified Solutions Architect 🔗',
                    period: 'Okt 2025',
                    technologies: ['AWS', 'Cloud Computing', 'DevOps'],
                    href: '#'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Programmierung in Künstlicher Intelligenz und Big Data 🔗',
                    period: 'Jul 2025',
                    technologies: ['Maschinelles Lernen', 'Tiefes Lernen', 'NLP', 'Big Data'],
                    href: '/celeste-guillen-portfolio/pdf/Programación en Inteligencia Artificial y Big Data.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Webanwendungsentwicklung mit Angular - Band 2 🔗',
                    period: 'Mär 2025',
                    technologies: ['AngularJS', 'Angular Material', 'Ionic Framework', 'Bootstrap'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollo de Aplicaciones Web con Angular - Tomo 2.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Google Analytics und Google Metatags 🔗',
                    period: 'Mär 2025',
                    technologies: ['Google Analytics', 'Google Tag Manager', 'Google Ads', 'Google Metatags'],
                    href: '/celeste-guillen-portfolio/pdf/Google Analytics y Google Metatags.pdf'
                },
                {
                    type: 'certification',
                    institution: 'INECO',
                    degree: 'Microsoft Power BI 🔗',
                    period: 'Mär 2025',
                    technologies: ['Microsoft Power BI', 'Datenanalyseausdrücke (DAX)', 'Datenvisualisierung', 'Datenanalyse', 'Microsoft Power Query'],
                    href: '/celeste-guillen-portfolio/pdf/Microsoft Power BI.pdf'
                },
                {
                    type: 'certification',
                    institution: 'CAS Training',
                    degree: 'NoSQL-Datenbanken: MongoDB und CouchDB 🔗',
                    period: 'Dez 2024',
                    technologies: ['NoSQL', 'MongoDB', 'CouchDB', 'Big Data', 'Optimierung'],
                    href: '/celeste-guillen-portfolio/pdf/Bases de Datos NoSQL - MongoDB Y CouchDB.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Student Ambassador Program mit IBM SkillsBuild',
                    degree: 'Python-Anwendungsentwicklung 🔗',
                    period: 'Nov 2024',
                    technologies: ['Python', 'Django', 'Objektorientierte Programmierung (OOP)', 'Tests', 'Git'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollo de Aplicaciones en Python.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Grouplance AM Servicios, S.L.',
                    degree: 'Webanwendungsentwicklung mit Angular - Band 1 🔗',
                    period: 'Okt 2024',
                    technologies: ['Angular', 'TypeScript', 'PIPEs', 'JSON', 'Observables und Promises (RxJS)'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollo de Aplicaciones Web con Angular - Tomo 1.pdf'
                },
                {
                    type: 'certification',
                    institution: 'Experis Spanien',
                    degree: 'AWS Cloud Solutions Entwickler 🔗',
                    period: 'Aug 2024',
                    technologies: ['Amazon S3', 'Amazon DynamoDB', 'Amazon EC2', 'Amazon VPC', 'AWS Lambda', 'API Gateways', 'AWS CloudFormation', 'CI/CD-Implementierung'],
                    href: '/celeste-guillen-portfolio/pdf/Desarrollador de Soluciones en la Nube de AWS.pdf'
                }

            ]
        },
        projects: {
            title: 'Projekte',
            subtitle: 'Hervorgehobene Arbeiten und Fallstudien',
            viewProject: 'Projekt ansehen',
            viewCode: 'Code ansehen',
            projects: [
                {
                    title: 'MadridIndustria',
                    description: 'Es ist eine App, um Interesse und Wertschätzung für das industrielle Erbe in der Gemeinschaft Madrid zu wecken. Benutzer können historische Stätten erkunden, sie auf einer interaktiven Karte markieren und Favoriten organisieren. Manager können Informationen hinzufügen, aktualisieren und löschen.',
                    image: 'https://play-lh.googleusercontent.com/aLQzhGptlbF-1ND3IwU2cLk32X7-d3-Z0NeASn3l79Nfe3LD-yJUhWlf7Sigox2Nr-4=w5120-h2880-rw',
                    technologies: ['Java', 'SQLite', 'Firebase', 'Figma'],
                    github: 'https://github.com/YanetC04/MadridIndustria',
                    demo: 'https://play.google.com/store/apps/details?id=com.proyectointegrador.madridindustria&hl=en_US'
                },
                {
                    title: 'SmartOper / SmartOfic',
                    description: 'SmartOper und SmartOfic sind Komponenten eines Mini-ERP-Systems. In SmartOfic können Vorfälle erstellt, bearbeitet und gedruckt werden. In SmartOper erhalten die Mitarbeiter die zugewiesenen Vorfälle. Diese werden gelöst, indem Daten wie Start- und Enddatum eingegeben und visuelle Nachweise angehängt werden, um die Ausführung der Arbeit zu bestätigen.',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
                    technologies: ['ERP-Software', 'Java', 'MySQL', 'Maven', 'Gradle', 'Firebase'],
                    github: 'https://github.com/blue-c0de/SmartOfic',
                    demo: 'https://github.com/blue-c0de/SmartOper'
                }
            ]
        },
        contact: {
            title: 'Kontakt',
            subtitle: 'Hast du ein Projekt im Kopf? Lass uns sprechen',
            info: 'Information',
            infoDesc: 'Ich stehe für Freelance-Projekte und Kooperationsmöglichkeiten zur Verfügung. Zögere nicht, mich zu kontaktieren.',
            email: 'E-Mail',
            socials: 'Soziale Netzwerke',
            name: 'Name',
            namePlaceholder: 'Dein Name',
            emailPlaceholder: 'deine@email.com',
            message: 'Nachricht',
            messagePlaceholder: 'Deine Nachricht...',
            send: 'Nachricht senden'
        }
    }
};

function calcularMeses(fechaInicio: string | Date, fechaFin: string | Date) {
    const start = new Date(fechaInicio);
    const end = new Date(fechaFin);

    let totalMeses = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

    if (totalMeses < 12) {
        // Menos de un año → solo meses
        return totalMeses + (totalMeses === 1 ? ' mes' : ' meses');
    } else {
        // 12 meses o más → calcular años y meses restantes
        const años = Math.floor(totalMeses / 12);
        const mesesRestantes = totalMeses % 12;

        let resultado = años + (años === 1 ? ' año' : ' años');

        if (mesesRestantes > 0) {
            resultado += ' y ' + mesesRestantes + (mesesRestantes === 1 ? ' mes' : ' meses');
        }

        return resultado;
    }
}

export function useTranslations(lang: Language) {
    return translations[lang];
}
