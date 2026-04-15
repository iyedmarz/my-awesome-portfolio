import { GraduationCap, Users } from "lucide-react";

/* ── Education data — easy to edit ── */
const education = [
  {
    degree: "Mastère Expert IT, Dev et Data",
    school: "École IRIS Paris",
    period: "2025 — Present",
    description:
      "Spécialisation en Full-Stack Architecture et Modern Software Engineering au cœur de Paris.",
    tags: ["Cloud Architecture", "System Design", "Data"],
  },
  {
    degree: "Licence en Génie Logiciel",
    school: "Université de Monastir",
    period: "2021 — 2024",
    description:
      "Formation fondamentale en informatique avec accent sur la complexité algorithmique et le développement web.",
    tags: ["Algorithms", "Software Engineering"],
  },
];

const affiliations = [
  {
    name: "Club RoboTech Monastir",
    description:
      "Développement de compétences en électronique et robotique. 1ère place à la compétition ENISo 2022 (robot suiveur de ligne).",
  },
  {
    name: "Jeunesse et Science Tunis",
    description:
      "De participant à encadrant : apprentissage de la programmation puis mentorat de jeunes apprenants.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={24} className="text-primary" />
              <h2 className="text-2xl font-bold font-heading">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="glass-card">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold font-heading">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap ml-4">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.school}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-secondary text-foreground rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Affiliations */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <Users size={20} className="text-primary" />
                <h3 className="text-xl font-bold font-heading">Ecosystem</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {affiliations.map((a) => (
                  <div key={a.name} className="glass-card">
                    <h4 className="font-bold mb-2">{a.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact */}
          <div id="contact">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary text-2xl">@</span>
              <h2 className="text-2xl font-bold font-heading">Get In Touch</h2>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Open for architectural consultations, full-stack projects, or just
              a deep dive into technical innovation. Let's build something
              significant.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {[
                {
                  label: "EMAIL",
                  value: "iyedmarz@gmail.com",
                  href: "mailto:iyedmarz@gmail.com",
                },
                {
                  label: "LINKEDIN",
                  value: "linkedin.com/in/iyed-marzouki",
                  href: "https://linkedin.com/in/iyed-marzouki",
                },
                {
                  label: "GITHUB",
                  value: "github.com/iyedmarzougui",
                  href: "https://github.com/iyedmarzougui",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-4 hover:border-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg  flex items-center justify-center text-primary text-sm font-bold">
                    <img
                      src={`/${c.label}.svg`}
                      alt=""
                      width="50"
                      height="50"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm text-foreground">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:iyedmarz@gmail.com`;
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message
                <span>➤</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
