import { useState } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useLanguage, Lang } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const toggleLang = () => setLang(lang === "en" ? "fr" : "en");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-center h-16">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/MARZOUGUI_Iyed.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
          >
            {t.nav.resume}
          </a>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
          >
            <Globe size={14} />
            {lang === "en" ? "FR" : "EN"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          <div className="container flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/MARZOUGUI_Iyed.pdf"
              download
              target="_blank"
              className="px-4 py-2 text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all w-fit"
            >
              {t.nav.resume}
            </a>
            <div className="flex gap-3 pt-2">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded-lg text-muted-foreground hover:text-foreground transition-all"
              >
                <Globe size={14} />
                {lang === "en" ? "FR" : "EN"}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground transition-all"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
