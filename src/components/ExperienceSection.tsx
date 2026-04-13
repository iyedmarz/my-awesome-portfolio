import { Rocket, Globe, Code2, Briefcase } from "lucide-react";

/* ── Easy to modify: edit this array to update your experience ── */
const experiences = [
  {
    period: "Jan 2025 — Jun 2025",
    company: "PeakSource",
    role: "Stagiaire Développeur",
    description:
      "Développement de dashboards interactifs pour la visualisation et le suivi de données métiers. Création d'interfaces utilisateurs modernes avec bonnes pratiques de design et d'accessibilité.",
    tech: ["React.js", "Vite", "ChartJS", "Axios", "TailwindCSS", "Jira"],
    icon: <Rocket size={20} />,
  },
  {
    period: "Sep 2024 — Dec 2024",
    company: "Verse",
    role: "Développeur Web",
    description:
      "Développement du site Trip Hive, une plateforme de tourisme éco-responsable. Interface moderne et performante avec collaboration directe client.",
    tech: ["Next.js", "MongoDB", "Docker", "Scrum"],
    icon: <Globe size={20} />,
  },
  {
    period: "Feb 2024 — May 2024",
    company: "Leader Solution Tactile",
    role: "Stage PFE — Full Stack Developer",
    description:
      "Conception d'une solution self-checkout intelligente pour les supermarchés. Intégration d'un modèle ML (TensorFlow) de reconnaissance de produits. Optimisation des performances de 30%.",
    tech: ["Next.js", "NestJS", "TypeScript", "Redux", "PostgreSQL", "TensorFlow"],
    icon: <Code2 size={20} />,
  },
  {
    period: "Jun 2023",
    company: "Leader Solution Tactile",
    role: "Stage d'été",
    description:
      "Première immersion professionnelle. Apprentissage des bases de la gestion de projet et de la communication technique.",
    tech: ["React", "Node.js", "Express.js", "HTML/CSS"],
    icon: <Briefcase size={20} />,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <p className="section-label mb-3">Journey</p>
        <h2 className="section-title mb-14">
          Experience Narrative
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-primary z-10">
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-14 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                    }`}
                  >
                    <span className="text-xs text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-bold font-heading mt-1">{exp.company}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">{exp.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                        >
                          {t}
                        </span>
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
