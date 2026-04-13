import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="max-w-3xl">
          <p className="section-label mb-4">Full Stack Developer</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground mb-6 leading-tight">
            Building Digital
            <br />
            <span className="text-primary">Experiences</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Étudiant en Mastère Expert IT Dev et Data à l'école IRIS. Passionné
            par le développement logiciel, je conçois des applications
            performantes et des expériences utilisateur soignées.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-all"
            >
              View Work
            </a>
          </div>
        </div>

        <a
          href="#skills"
          className="mt-20 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
