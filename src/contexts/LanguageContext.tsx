import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "fr";

type Translations = typeof en;

const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    role: "Full Stack Developer",
    heading1: "Building Digital",
    heading2: "Experiences",
    bio: "Master's student in Expert IT Dev & Data at École IRIS. Passionate about software development, I build performant applications and polished user experiences.",
    location: "Paris, France",
    school: "École IRIS",
    cta: "Get In Touch",
    work: "View Work",
  },
  skills: {
    label: "Core Competencies",
    title: "Technical Arsenal",
    subtitle: "A multi-layered stack engineered for performance, scalability, and seamless user experiences.",
    coreEng: "Core Engineering",
    dataBackend: "Data & Backend",
    devops: "DevOps & Tools",
    frontend: "Frontend Precision",
  },
  projects: {
    label: "Portfolio",
    title1: "Selected ",
    title2: "Works",
    subtitle: "A collection of projects showcasing full-stack engineering, modern UI design, and real-world problem solving.",
    highlights: "Key Highlights",
    source: "Source Code",
    demo: "Live Demo",
  },
  experience: {
    label: "Journey",
    title: "Experience Narrative",
  },
  education: {
    title: "Education",
    ecosystem: "Ecosystem",
    contact: "Get In Touch",
    contactDesc: "Open for architectural consultations, full-stack projects, or just a deep dive into technical innovation. Let's build something significant.",
    name: "Name",
    email: "Email Address",
    message: "Message",
    send: "Send Message",
    sending: "Sending…",
    success: "Message sent successfully!",
    error: "Failed to send. Please try again.",
  },
  footer: {
    built: "BUILT WITH PRECISION.",
  },
};

const fr: Translations = {
  nav: {
    home: "Accueil",
    projects: "Projets",
    skills: "Compétences",
    experience: "Expérience",
    education: "Formation",
    contact: "Contact",
    resume: "CV",
  },
  hero: {
    role: "Développeur Full Stack",
    heading1: "Créer des Expériences",
    heading2: "Numériques",
    bio: "Étudiant en Mastère Expert IT Dev et Data à l'école IRIS. Passionné par le développement logiciel, je conçois des applications performantes et des expériences utilisateur soignées.",
    location: "Paris, France",
    school: "École IRIS",
    cta: "Me Contacter",
    work: "Voir Mes Travaux",
  },
  skills: {
    label: "Compétences Clés",
    title: "Arsenal Technique",
    subtitle: "Un stack multi-couches conçu pour la performance, la scalabilité et des expériences utilisateur fluides.",
    coreEng: "Ingénierie Core",
    dataBackend: "Data & Backend",
    devops: "DevOps & Outils",
    frontend: "Précision Frontend",
  },
  projects: {
    label: "Portfolio",
    title1: "Travaux ",
    title2: "Sélectionnés",
    subtitle: "Une collection de projets mettant en avant l'ingénierie full-stack, le design UI moderne et la résolution de problèmes réels.",
    highlights: "Points Clés",
    source: "Code Source",
    demo: "Démo Live",
  },
  experience: {
    label: "Parcours",
    title: "Récit d'Expérience",
  },
  education: {
    title: "Formation",
    ecosystem: "Écosystème",
    contact: "Me Contacter",
    contactDesc: "Ouvert aux consultations architecturales, aux projets full-stack, ou simplement à une discussion approfondie sur l'innovation technique. Construisons quelque chose de significatif.",
    name: "Nom",
    email: "Adresse Email",
    message: "Message",
    send: "Envoyer",
    sending: "Envoi…",
    success: "Message envoyé avec succès !",
    error: "Échec de l'envoi. Veuillez réessayer.",
  },
  footer: {
    built: "CONSTRUIT AVEC PRÉCISION.",
  },
};

const translations = { en, fr };

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
