import { useState } from "react";
import { ExternalLink, Github, X, Layers, ShoppingCart, Globe, Bot } from "lucide-react";

/* ── Easy to modify: edit this array to update your projects ── */
const projects = [
  {
    icon: <ShoppingCart size={22} />,
    title: "Self-Checkout Intelligent",
    subtitle: "Leader Solution Tactile",
    description: "Solution de caisse automatique intelligente pour supermarchés.",
    fullDescription:
      "Conception et développement d'une solution self-checkout intelligente intégrant un modèle de machine learning (TensorFlow) pour la reconnaissance automatique de produits. L'application offre une interface moderne et fluide, avec une optimisation des performances de 30%.",
    tech: ["Next.js", "NestJS", "TypeScript", "Redux", "PostgreSQL", "TensorFlow"],
    highlights: [
      "Reconnaissance de produits par ML avec TensorFlow",
      "Optimisation des performances de 30%",
      "Architecture full-stack moderne",
    ],
    github: "#",
    demo: "#",
  },
  {
    icon: <Globe size={22} />,
    title: "Trip Hive",
    subtitle: "Verse",
    description: "Plateforme de tourisme éco-responsable avec interface moderne.",
    fullDescription:
      "Développement complet du site Trip Hive, une plateforme de tourisme éco-responsable. Le projet inclut une interface utilisateur performante et responsive, construite avec Next.js et MongoDB, déployée via Docker.",
    tech: ["Next.js", "MongoDB", "Docker", "Scrum"],
    highlights: [
      "Architecture conteneurisée avec Docker",
      "Base de données NoSQL performante",
      "Méthodologie Agile / Scrum",
    ],
    github: "#",
    demo: "#",
  },
  {
    icon: <Layers size={22} />,
    title: "Dashboards Interactifs",
    subtitle: "PeakSource",
    description: "Visualisation et suivi de données métiers en temps réel.",
    fullDescription:
      "Développement de dashboards interactifs pour la visualisation et le suivi de données métiers. Création d'interfaces utilisateurs modernes avec de bonnes pratiques de design, d'accessibilité et de performance.",
    tech: ["React.js", "Vite", "ChartJS", "Axios", "TailwindCSS"],
    highlights: [
      "Graphiques interactifs avec ChartJS",
      "Interface responsive et accessible",
      "Intégration API avec Axios",
    ],
    github: "#",
    demo: "#",
  },
  {
    icon: <Bot size={22} />,
    title: "RoboTech INSAT",
    subtitle: "Association",
    description: "Membre actif du club de robotique — projets Arduino & IoT.",
    fullDescription:
      "Participation active au sein du club RoboTech de l'INSAT. Travail sur des projets de robotique embarquée avec Arduino et capteurs IoT, développement de prototypes et collaboration en équipe sur des compétitions.",
    tech: ["Arduino", "IoT", "C++", "Prototypage"],
    highlights: [
      "Prototypage rapide de robots",
      "Programmation embarquée en C++",
      "Collaboration en équipe multidisciplinaire",
    ],
    github: "#",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  return (
    <>
      <section id="projects" className="py-24">
        <div className="container">
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mb-14">
            A selection of projects that showcase my approach to problem-solving
            and technical execution.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => setSelected(project)}
                className="glass-card text-left group hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary">{project.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold font-heading group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs text-primary">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-lg bg-card border border-border rounded-xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary">{selected.icon}</span>
              <div>
                <h3 className="text-xl font-bold font-heading">{selected.title}</h3>
                <p className="text-xs text-muted-foreground">{selected.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {selected.fullDescription}
            </p>

            {selected.highlights && (
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  Key Highlights
                </p>
                <ul className="space-y-2">
                  {selected.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {selected.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                >
                  <Github size={16} /> Source Code
                </a>
              )}
              {selected.demo && (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
