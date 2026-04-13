import { useState } from "react";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";

/* ── Easy to modify: edit this array to update your projects ── */
const projects = [
  {
    category: "SYSTEM ARCHITECTURE",
    title: "Self-Checkout Intelligent",
    description:
      "Solution de caisse automatique intelligente pour supermarchés avec reconnaissance de produits par ML et optimisation des performances de 30%.",
    fullDescription:
      "Conception et développement d'une solution self-checkout intelligente intégrant un modèle de machine learning (TensorFlow) pour la reconnaissance automatique de produits. L'application offre une interface moderne et fluide, avec une optimisation des performances de 30%.",
    tech: ["Next.js", "NestJS", "TypeScript", "Redux", "PostgreSQL", "TensorFlow"],
    highlights: [
      "Reconnaissance de produits par ML avec TensorFlow",
      "Optimisation des performances de 30%",
      "Architecture full-stack moderne",
    ],
    gradient: "from-blue-900/80 via-indigo-900/60 to-card",
    size: "large" as const,
    github: "#",
    demo: "#",
  },
  {
    category: "FULL STACK",
    title: "Trip Hive",
    description:
      "Community-driven itinerary engine featuring intelligent geographic clustering for eco-responsible tourism.",
    fullDescription:
      "Développement complet du site Trip Hive, une plateforme de tourisme éco-responsable. Le projet inclut une interface utilisateur performante et responsive, construite avec Next.js et MongoDB, déployée via Docker.",
    tech: ["Next.js", "MongoDB", "Docker", "Scrum"],
    highlights: [
      "Architecture conteneurisée avec Docker",
      "Base de données NoSQL performante",
      "Méthodologie Agile / Scrum",
    ],
    gradient: "from-emerald-900/60 via-teal-900/40 to-card",
    size: "medium" as const,
    github: "#",
    demo: "#",
  },
  {
    category: "ENTERPRISE",
    title: "Dashboards Interactifs",
    description:
      "Visualisation et suivi de données métiers en temps réel avec graphiques interactifs et interfaces accessibles.",
    fullDescription:
      "Développement de dashboards interactifs pour la visualisation et le suivi de données métiers. Création d'interfaces utilisateurs modernes avec de bonnes pratiques de design, d'accessibilité et de performance.",
    tech: ["React.js", "Vite", "ChartJS", "Axios", "TailwindCSS"],
    highlights: [
      "Graphiques interactifs avec ChartJS",
      "Interface responsive et accessible",
      "Intégration API avec Axios",
    ],
    gradient: "from-violet-900/60 via-purple-900/40 to-card",
    size: "medium" as const,
    github: "#",
    demo: "#",
  },
  {
    category: "ROBOTICS & IOT",
    title: "RoboTech INSAT",
    description:
      "Projets de robotique embarquée avec Arduino et capteurs IoT — prototypage rapide et compétitions.",
    fullDescription:
      "Participation active au sein du club RoboTech de l'INSAT. Travail sur des projets de robotique embarquée avec Arduino et capteurs IoT, développement de prototypes et collaboration en équipe sur des compétitions.",
    tech: ["Arduino", "IoT", "C++", "Prototypage"],
    highlights: [
      "Prototypage rapide de robots",
      "Programmation embarquée en C++",
      "Collaboration en équipe multidisciplinaire",
    ],
    gradient: "from-cyan-900/60 via-sky-900/40 to-card",
    size: "full" as const,
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
          <h2 className="section-title mb-4">
            Selected <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-14">
            Exploring the intersection of high-performance architecture and
            modern digital experiences. A collection of full-stack engineering
            and product design.
          </p>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Row 1 — large + medium */}
            <div
              onClick={() => setSelected(projects[0])}
              className="md:col-span-7 group cursor-pointer rounded-2xl border border-border overflow-hidden relative min-h-[320px] flex flex-col justify-end"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${projects[0].gradient}`} />
              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
              <div className="relative p-6 z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
                  {projects[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                  {projects[0].title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-primary" />
              </div>
            </div>

            <div
              onClick={() => setSelected(projects[1])}
              className="md:col-span-5 group cursor-pointer rounded-2xl border border-border overflow-hidden relative min-h-[320px] flex flex-col justify-end"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${projects[1].gradient}`} />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
              <div className="relative p-6 z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
                  {projects[1].category}
                </span>
                <h3 className="text-2xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                  {projects[1].title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-primary" />
              </div>
            </div>

            {/* Row 2 — medium + medium */}
            <div
              onClick={() => setSelected(projects[2])}
              className="md:col-span-5 group cursor-pointer rounded-2xl border border-border overflow-hidden relative min-h-[320px] flex flex-col justify-end"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${projects[2].gradient}`} />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
              <div className="relative p-6 z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
                  {projects[2].category}
                </span>
                <h3 className="text-2xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                  {projects[2].title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-primary" />
              </div>
            </div>

            <div
              onClick={() => setSelected(projects[3])}
              className="md:col-span-7 group cursor-pointer rounded-2xl border border-border overflow-hidden relative min-h-[320px] flex flex-col justify-end"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${projects[3].gradient}`} />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
              <div className="relative p-6 z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
                  {projects[3].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                  {projects[3].title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-primary" />
              </div>
            </div>

            {/* Descriptions row */}
            <p className="md:col-span-7 text-sm text-muted-foreground -mt-2 px-1">
              {projects[0].description}
            </p>
            <p className="md:col-span-5 text-sm text-muted-foreground -mt-2 px-1 hidden md:block">
              {projects[1].description}
            </p>
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
            className="relative z-10 w-full max-w-lg bg-card border border-border rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
              {selected.category}
            </span>
            <h3 className="text-2xl font-bold font-heading mb-4">{selected.title}</h3>

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
                  className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-lg"
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
