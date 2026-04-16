import { Rocket, Globe, Code2, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ExperienceSection = () => {
  const { lang, t } = useLanguage();

  const experiences = [
    {
      period: "Jan 2025 — Jun 2025",
      company: "PeakSource",
      role: lang === "fr" ? "Stagiaire Développeur" : "Developer Intern",
      description: lang === "fr"
        ? "Développement de dashboards interactifs pour la visualisation et le suivi de données métiers. Création d'interfaces utilisateurs modernes avec bonnes pratiques de design et d'accessibilité."
        : "Development of interactive dashboards for business data visualization and tracking. Creation of modern user interfaces with best design and accessibility practices.",
      tech: ["React.js", "Vite", "ChartJS", "Axios", "TailwindCSS", "Jira"],
      icon: <Rocket size={20} />,
    },
    {
      period: "Sep 2024 — Dec 2024",
      company: "Verse",
      role: lang === "fr" ? "Développeur Web" : "Web Developer",
      description: lang === "fr"
        ? "Développement du site Trip Hive, une plateforme de tourisme éco-responsable. Interface moderne et performante avec collaboration directe client."
        : "Development of Trip Hive, an eco-responsible tourism platform. Modern and performant interface with direct client collaboration.",
      tech: ["Next.js", "MongoDB", "Docker", "Scrum"],
      icon: <Globe size={20} />,
    },
    {
      period: "Feb 2024 — May 2024",
      company: "Leader Solution Tactile",
      role: lang === "fr" ? "Stage PFE — Full Stack Developer" : "End-of-Study Internship — Full Stack Developer",
      description: lang === "fr"
        ? "Conception d'une solution self-checkout intelligente pour les supermarchés. Intégration d'un modèle ML (TensorFlow) de reconnaissance de produits. Optimisation des performances de 30%."
        : "Design of an intelligent self-checkout solution for supermarkets. Integration of an ML model (TensorFlow) for product recognition. 30% performance optimization.",
      tech: ["Next.js", "NestJS", "TypeScript", "Redux", "PostgreSQL", "TensorFlow"],
      icon: <Code2 size={20} />,
    },
    {
      period: "Jun 2023",
      company: "Leader Solution Tactile",
      role: lang === "fr" ? "Stage d'été" : "Summer Internship",
      description: lang === "fr"
        ? "Première immersion professionnelle. Apprentissage des bases de la gestion de projet et de la communication technique."
        : "First professional immersion. Learning the basics of project management and technical communication.",
      tech: ["React", "Node.js", "Express.js", "HTML/CSS"],
      icon: <Briefcase size={20} />,
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container">
        <p className="section-label mb-3">{t.experience.label}</p>
        <h2 className="section-title mb-14">{t.experience.title}</h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-start">
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-primary z-10">
                    {exp.icon}
                  </div>
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}>
                    <span className="text-xs text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-bold font-heading mt-1">{exp.company}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">{exp.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
