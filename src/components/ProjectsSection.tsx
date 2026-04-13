import { useState } from "react";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";

/* ── Easy to modify: edit this array to update your projects ── */
const projects = [
  {
    category: "EDUCATION PLATFORM",
    title: "IRIS Exam",
    description:
      "Plateforme pour les étudiants IRIS afin de pratiquer des examens et suivre leurs progrès académiques.",
    fullDescription:
      "IRIS Exam est une plateforme dédiée aux étudiants IRIS permettant de pratiquer des examens en conditions réelles et de suivre leurs progrès. L'application offre un système de quiz interactif, un tableau de bord de suivi des performances, et une interface moderne construite avec React et TypeScript.",
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL", "Vite"],
    highlights: [
      "Système de quiz interactif avec correction automatique",
      "Tableau de bord de suivi des performances",
      "Interface responsive et accessible",
    ],
    image: "https://iyedmarzouki.vercel.app/IRIS1.png",
    github: "#",
    demo: "#",
  },
  {
    category: "E-COMMERCE",
    title: "Twizzy",
    description:
      "Boutique en ligne spécialisée dans la vente de vêtements et accessoires tendance pour jeunes adultes.",
    fullDescription:
      "Twizzy est une boutique en ligne spécialisée dans la vente de vêtements et accessoires tendance pour les jeunes adultes. Le site offre une expérience d'achat fluide avec un design moderne, un catalogue produits dynamique et un processus de commande simplifié.",
    tech: ["Shopify", "Liquid", "CSS", "JavaScript"],
    highlights: [
      "Catalogue produits dynamique et filtrable",
      "Expérience d'achat optimisée mobile-first",
      "Intégration Shopify complète",
    ],
    image: "https://iyedmarzouki.vercel.app/TWIZZY0.png",
    github: "#",
    demo: "#",
  },
  {
    category: "FULL STACK",
    title: "TripHive",
    description:
      "Plateforme de tourisme responsable inspirée par l'harmonie de la nature et des abeilles.",
    fullDescription:
      "Trip Hive est une plateforme de tourisme éco-responsable inspirée par l'harmonie de la nature. Le projet inclut une interface utilisateur performante et responsive, construite avec Next.js et Redux, avec une attention particulière portée à l'expérience utilisateur et à l'identité éthique du projet.",
    tech: ["Next.js", "Redux", "MongoDB", "Docker", "Scrum"],
    highlights: [
      "Architecture conteneurisée avec Docker",
      "Gestion d'état avancée avec Redux",
      "Méthodologie Agile / Scrum",
    ],
    image: "https://iyedmarzouki.vercel.app/trip1.png",
    github: "#",
    demo: "#",
  },
  {
    category: "ENTERPRISE",
    title: "Dashboards PeakSource",
    description:
      "Dashboards interactifs pour la visualisation et le suivi de données métiers en temps réel.",
    fullDescription:
      "Développement de dashboards interactifs pour la visualisation et le suivi de données métiers chez PeakSource. Création d'interfaces utilisateurs modernes avec de bonnes pratiques de design, d'accessibilité et de performance, intégrant des graphiques dynamiques et des filtres avancés.",
    tech: ["React.js", "Vite", "ChartJS", "Axios", "TailwindCSS"],
    highlights: [
      "Graphiques interactifs avec ChartJS",
      "Interface responsive et accessible",
      "Intégration API avec Axios",
    ],
    gradient: "from-violet-900/60 via-purple-900/40 to-card",
    github: "#",
    demo: "#",
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
            A collection of projects showcasing full-stack engineering,
            modern UI design, and real-world problem solving.
          </p>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Row 1 — large + medium */}
            <div
              onClick={() => setSelected(projects[0])}
              className="md:col-span-7 group cursor-pointer rounded-2xl border border-border overflow-hidden relative min-h-[340px] flex flex-col justify-end"
            >
              {"image" in projects[0] && (
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              <div className="relative p-6 z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
                  {projects[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                  {projects[0].title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <ArrowUpRight size={20} className="text-primary" />
              </div>
            </div>

            <div
              onClick={() => setSelected(projects[1])}
              className="md:col-span-5 group cursor-pointer rounded-2xl border border-border overflow-hidden relative min-h-[340px] flex flex-col justify-end"
            >
              {"image" in projects[1] && (
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              <div className="relative p-6 z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
                  {projects[1].category}
                </span>
                <h3 className="text-2xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                  {projects[1].title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <ArrowUpRight size={20} className="text-primary" />
              </div>
            </div>

            {/* Descriptions row 1 */}
            <p className="md:col-span-7 text-sm text-muted-foreground -mt-2 px-1">
              {projects[0].description}
            </p>
            <p className="md:col-span-5 text-sm text-muted-foreground -mt-2 px-1 hidden md:block">
              {projects[1].description}
            </p>

            {/* Row 2 — medium + large */}
            <div
              onClick={() => setSelected(projects[2])}
              className="md:col-span-5 group cursor-pointer rounded-2xl border border-border overflow-hidden relative min-h-[340px] flex flex-col justify-end mt-6"
            >
              {"image" in projects[2] && (
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              <div className="relative p-6 z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
                  {projects[2].category}
                </span>
                <h3 className="text-2xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                  {projects[2].title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <ArrowUpRight size={20} className="text-primary" />
              </div>
            </div>

            <div
              onClick={() => setSelected(projects[3])}
              className="md:col-span-7 group cursor-pointer rounded-2xl border border-border overflow-hidden relative min-h-[340px] flex flex-col justify-end mt-6"
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
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <ArrowUpRight size={20} className="text-primary" />
              </div>
            </div>

            {/* Descriptions row 2 */}
            <p className="md:col-span-5 text-sm text-muted-foreground -mt-2 px-1">
              {projects[2].description}
            </p>
            <p className="md:col-span-7 text-sm text-muted-foreground -mt-2 px-1 hidden md:block">
              {projects[3].description}
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
            className="relative z-10 w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image header */}
            {"image" in selected && selected.image && (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
            )}

            <div className="p-6">
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors bg-card/80 rounded-full p-1"
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
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
