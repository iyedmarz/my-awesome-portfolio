import { useState } from "react";
import { ExternalLink, Github, X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ── Easy to modify: edit this array to update your projects ── */
const projects = [
  {
    category: "EDUCATION PLATFORM",
    title: "IRIS Exam",
    description:
      "Plateforme pour les étudiants IRIS afin de pratiquer des examens et suivre leurs progrès académiques.",
    fullDescription:
      "IRIS Exam est une plateforme dédiée aux étudiants IRIS permettant de pratiquer des examens en conditions réelles et de suivre leurs progrès. L'application offre un système de quiz interactif, un tableau de bord de suivi des performances, et une interface moderne construite avec React et TypeScript.",
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express.js", "PostgreSQL"],
    highlights: [
      "Système de quiz interactif avec correction automatique",
      "Tableau de bord de suivi des performances",
      "Interface responsive et accessible",
    ],
    image: "/IRIS1.png",
    images: ["/IRIS1.png", "/IRIS2.png", "/IRIS3.png", "/IRIS4.png", "/IRIS5.png", "/IRIS6.png", "/IRIS7.png", "/IRIS8.png"],
    github: "#",
    demo: "#",
  },
  {
    category: "E-COMMERCE",
    title: "Twizzy",
    description:
      "Boutique en ligne spécialisée dans la vente de vêtements et accessoires tendance pour jeunes adultes.",
    fullDescription:
      "Twizzy est une boutique en ligne spécialisée dans la vente de vêtements et accessoires tendance pour les jeunes adultes. Le site offre une expérience d'achat fluide avec une navigation intuitive, des descriptions détaillées des produits et un processus de paiement sécurisé.",
    tech: ["Shopify", "Liquid", "CSS", "JavaScript"],
    highlights: [
      "Catalogue produits dynamique et filtrable",
      "Expérience d'achat optimisée mobile-first",
      "Intégration Shopify complète",
    ],
    image: "/TWIZZY0.png",
    images: ["/TWIZZY0.png", "/twizzy1.png", "/twizzy2.png"],
    github: "#",
    demo: "https://twizzytn.myshopify.com/",
  },
  {
    category: "FULL STACK",
    title: "TripHive",
    description:
      "Plateforme de tourisme responsable inspirée par l'harmonie de la nature et des abeilles.",
    fullDescription:
      "Trip Hive est une plateforme de tourisme éco-responsable inspirée par l'harmonie de la nature. Fondée à Ain Jeloula, elle transforme chaque voyage en un acte durable en plantant un arbre pour chaque réservation. Le projet inclut une interface performante et responsive construite avec Next.js et Redux.",
    tech: ["Next.js", "Redux", "MongoDB", "Docker", "Scrum"],
    highlights: [
      "Architecture conteneurisée avec Docker",
      "Gestion d'état avancée avec Redux",
      "Méthodologie Agile / Scrum",
    ],
    image: "/trip1.png",
    images: ["/trip1.png", "/trip2.png", "/trip3.png", "/trip4.png"],
    github: "#",
    demo: "https://www.trip-hive.com/",
  },
  {
    category: "AI / RETAIL",
    title: "ETK-SCO",
    description:
      "Système de caisse libre-service alimenté par l'IA avec reconnaissance automatique des produits.",
    fullDescription:
      "Une solution innovante de caisse libre-service qui permet aux clients de scanner et de reconnaître automatiquement les produits à l'aide de l'apprentissage automatique. Le système intègre la vision par ordinateur pour la détection des produits, un processus de paiement fluide et une interface conviviale.",
    tech: ["Next.js", "Nest.js", "PostgreSQL", "TensorFlow", "Redux", "TypeScript", "Tauri"],
    highlights: [
      "Vision par ordinateur pour la détection des produits",
      "Machine Learning avec TensorFlow",
      "Application desktop avec Tauri",
    ],
    image: "/SCO1.png",
    images: ["/SCO1.png", "/SCO2.png", "/SCO3.png", "/SCO4.png", "/SCO5.png", "/SCO6.png"],
    github: "#",
    demo: "#",
  },
  {
    category: "RESTAURANT",
    title: "FoodTuck",
    description:
      "Site de restaurant moderne permettant d'explorer le menu et de commander en ligne facilement.",
    fullDescription:
      "FoodTuck est un site Web de restaurant moderne et convivial où les clients peuvent explorer un menu interactif avec des descriptions détaillées des plats et des images. Le site offre une expérience de commande fluide avec des options de repas personnalisables et des méthodes de paiement sécurisées.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Redux", "TailwindCSS"],
    highlights: [
      "Menu interactif avec descriptions détaillées",
      "Commande en ligne pour livraison ou retrait",
      "Interface responsive et moderne",
    ],
    image: "/foodtuck.png",
    images: ["/foodtuck.png"],
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
            <ProjectCard project={projects[0]} span="md:col-span-7" onClick={() => setSelected(projects[0])} />
            <ProjectCard project={projects[1]} span="md:col-span-5" onClick={() => setSelected(projects[1])} />


            {/* Row 2 — medium + large */}
            <ProjectCard project={projects[2]} span="md:col-span-5" onClick={() => setSelected(projects[2])} className="mt-6" />
            <ProjectCard project={projects[3]} span="md:col-span-7" onClick={() => setSelected(projects[3])} className="mt-6" />

            {/* Row 3 — full width */}
            <ProjectCard project={projects[4]} span="md:col-span-12" onClick={() => setSelected(projects[4])} className="mt-6" />
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

/* ── Reusable Card ── */
function ProjectCard({
  project,
  span,
  onClick,
  className = "",
}: {
  project: (typeof projects)[number];
  span: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`${span} ${className} group cursor-pointer rounded-2xl border border-border overflow-hidden relative min-h-[340px] flex flex-col justify-end`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-top opacity-40 group-hover:opacity-50 transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
      <div className="relative p-6 z-10">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <ArrowUpRight size={20} className="text-primary" />
      </div>
    </div>
  );
}

/* ── Modal ── */
function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
) {
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [currentImg, setCurrentImg] = useState(0);

  const prev = () => setCurrentImg((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrentImg((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 overflow-hidden">
          <img src={images[currentImg]} alt={project.title} className="w-full h-full object-cover object-top transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          {images.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-card/70 hover:bg-card rounded-full p-1.5 text-foreground transition-colors z-10">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-card/70 hover:bg-card rounded-full p-1.5 text-foreground transition-colors z-10">
                <ChevronRight size={18} />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentImg(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === currentImg ? "bg-primary scale-110" : "bg-muted-foreground/50"}`} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors bg-card/80 rounded-full p-1"
          >
            <X size={20} />
          </button>

          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold font-heading mb-4">{project.title}</h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {project.fullDescription}
          </p>

          {project.highlights && (
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Key Highlights</p>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}


          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-lg">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
                <Github size={16} /> Source Code
              </a>
            )}
            {project.demo && project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
