import { GraduationCap, Users } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setStatus("idle");
    emailjs
      .sendForm("service_eajmmyj", "template_q6bk1ag", formRef.current, "xte223UBcDtxZBAWZ")
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => setStatus("error"))
      .finally(() => setSending(false));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <input name="from_name" type="text" placeholder={t.education.name} className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
      <input name="from_email" type="email" placeholder={t.education.email} className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
      <textarea name="message" placeholder={t.education.message} rows={4} className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
      <button type="submit" disabled={sending} className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50">
        {sending ? t.education.sending : t.education.send}
        {!sending && <span>➤</span>}
      </button>
      {status === "success" && <p className="text-sm text-green-400 text-center">{t.education.success}</p>}
      {status === "error" && <p className="text-sm text-red-400 text-center">{t.education.error}</p>}
    </form>
  );
};

const EducationSection = () => {
  const { lang, t } = useLanguage();

  const education = [
    {
      degree: lang === "fr" ? "Mastère Expert IT, Dev et Data" : "Master's Expert IT, Dev & Data",
      school: "École IRIS Paris",
      period: "2025 — Present",
      description: lang === "fr"
        ? "Spécialisation en Full-Stack Architecture et Modern Software Engineering au cœur de Paris."
        : "Specialization in Full-Stack Architecture and Modern Software Engineering in the heart of Paris.",
      tags: ["Cloud Architecture", "System Design", "Data"],
    },
    {
      degree: lang === "fr" ? "Licence en Génie Logiciel" : "Bachelor's in Software Engineering",
      school: lang === "fr" ? "Université de Monastir" : "University of Monastir",
      period: "2021 — 2024",
      description: lang === "fr"
        ? "Formation fondamentale en informatique avec accent sur la complexité algorithmique et le développement web."
        : "Fundamental computer science training with focus on algorithmic complexity and web development.",
      tags: ["Algorithms", "Software Engineering"],
    },
  ];

  const affiliations = [
    {
      name: "Club RoboTech Monastir",
      description: lang === "fr"
        ? "Développement de compétences en électronique et robotique. 1ère place à la compétition ENISo 2022 (robot suiveur de ligne)."
        : "Development of electronics and robotics skills. 1st place at ENISo 2022 competition (line-following robot).",
    },
    {
      name: "Jeunesse et Science Tunis",
      description: lang === "fr"
        ? "De participant à encadrant : apprentissage de la programmation puis mentorat de jeunes apprenants."
        : "From participant to mentor: learning programming then mentoring young learners.",
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={24} className="text-primary" />
              <h2 className="text-2xl font-bold font-heading">{t.education.title}</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="glass-card">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold font-heading">{edu.degree}</h3>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap ml-4">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{edu.school}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs bg-secondary text-foreground rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <Users size={20} className="text-primary" />
                <h3 className="text-xl font-bold font-heading">{t.education.ecosystem}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {affiliations.map((a) => (
                  <div key={a.name} className="glass-card">
                    <h4 className="font-bold mb-2">{a.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="contact">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary text-2xl">@</span>
              <h2 className="text-2xl font-bold font-heading">{t.education.contact}</h2>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">{t.education.contactDesc}</p>

            <div className="space-y-4 mb-8">
              {[
                { label: "EMAIL", value: "iyedmarz@gmail.com", href: "mailto:iyedmarz@gmail.com" },
                { label: "LINKEDIN", value: "linkedin.com/in/iyed-marzouki", href: "https://www.linkedin.com/in/iyed-marzouki/" },
                { label: "GITHUB", value: "github.com/iyedmarzougui", href: "https://github.com/iyedmarz" },
              ].map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-4 hover:border-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-primary text-sm font-bold">
                    <img src={`/${c.label}.svg`} alt="" width="50" height="50" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm text-foreground">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
