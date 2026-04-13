import { Code2, Database, Cloud, Layout } from "lucide-react";

/* ── Easy to modify: just edit these arrays ── */
const skillCategories = [
  {
    icon: <Code2 size={22} />,
    title: "Core Engineering",
    type: "tags" as const,
    items: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "C++", "SQL"],
  },
  {
    icon: <Database size={22} />,
    title: "Data & Backend",
    type: "list" as const,
    items: [
      { name: "PostgreSQL", level: "Expert" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Node.js / NestJS", level: "Advanced" },
      { name: "Spring Boot", level: "Intermediate" },
    ],
  },
  {
    icon: <Cloud size={22} />,
    title: "DevOps & Tools",
    type: "tags" as const,
    items: ["Docker", "GitHub", "Postman", "Jira", "Agile / Scrum"],
  },
  {
    icon: <Layout size={22} />,
    title: "Frontend Precision",
    type: "list" as const,
    items: [
      { name: "React / Next.js", level: "" },
      { name: "Tailwind CSS", level: "" },
      { name: "Redux", level: "" },
      { name: "React Native", level: "" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <p className="section-label mb-3">Core Competencies</p>
        <h2 className="section-title mb-4">
          Technical Arsenal
        </h2>
        <p className="text-muted-foreground max-w-xl mb-14">
          A multi-layered stack engineered for performance, scalability, and
          seamless user experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary">{cat.icon}</span>
                <h3 className="text-lg font-semibold font-heading">{cat.title}</h3>
              </div>

              {cat.type === "tags" ? (
                <div className="flex flex-wrap gap-2">
                  {(cat.items as string[]).map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {(cat.items as { name: string; level: string }[]).map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item.name}
                      </span>
                      {item.level && (
                        <span className="text-xs text-primary font-medium">{item.level}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
