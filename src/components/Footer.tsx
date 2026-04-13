const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container text-center">
        <div className="flex justify-center gap-8 mb-4">
          {[
            { label: "GITHUB", href: "https://github.com/iyedmarzougui" },
            { label: "LINKEDIN", href: "https://linkedin.com/in/iyed-marzouki" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} IYED MARZOUGUI. BUILT WITH PRECISION.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
