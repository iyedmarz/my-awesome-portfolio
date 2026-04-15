import { ArrowDown, MapPin, GraduationCap } from "lucide-react";

const galleryImages = [
  { src: "/lovable-uploads/1-2.jpg", alt: "Iyed at work" },
  { src: "/lovable-uploads/3.jpg", alt: "Technology" },
  { src: "/lovable-uploads/7.jpg", alt: "Programming" },
  { src: "/lovable-uploads/4.jpg", alt: "Coding session" },
  { src: "/lovable-uploads/5.jpg", alt: "Developer life" },
  { src: "/lovable-uploads/2.jpg", alt: "Behind the scenes" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text + Profile */}
          <div>
            <div className="flex items-center gap-5 mb-8">
              <div className="relative w-20 h-20 shrink-0">
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse" />
                <img
                  src="/lovable-uploads/26e439cf-e0f5-41d2-baba-495715e4ae9d.png"
                  alt="Iyed Marzougui"
                  className="relative w-full h-full rounded-full object-cover border-2 border-primary/30"
                />
              </div>
              <div>
                <p className="section-label mb-1">Full Stack Developer</p>
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground leading-tight">
                  Iyed Marzougui
                </h1>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 leading-tight">
              Building Digital
              <br />
              <span className="text-primary">Experiences</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mb-6 leading-relaxed">
              Étudiant en Mastère Expert IT Dev et Data à l'école IRIS. Passionné
              par le développement logiciel, je conçois des applications
              performantes et des expériences utilisateur soignées.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                Paris, France
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap size={14} className="text-primary" />
                École IRIS
              </span>
            </div>

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

          {/* Right - Photo Gallery Grid */}
          <div className="grid grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden border border-border group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        <a
          href="#skills"
          className="mt-16 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
