import { useLanguage, langLabel, Language } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { getContent } from "@/lib/i18n";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const content = getContent(language);
  const [langOpen, setLangOpen] = useState(false);

  const languages: Language[] = ["en", "zh-TW", "zh-CN"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 surface-glass"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="3B Solutions" className="w-8 h-8 object-contain invert" />
          <span className="font-semibold text-foreground tracking-tight">3B Solutions</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#platform" className="hover:text-foreground transition-colors">{content.nav.about}</a>
          <a href="#solutions" className="hover:text-foreground transition-colors">{content.nav.solutions}</a>
          <a href="#contact" className="hover:text-foreground transition-colors">{content.nav.contact}</a>
        </div>

        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md border border-border"
          >
            {langLabel[language]}
          </button>
          {langOpen && (
            <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-md overflow-hidden shadow-xl">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => { setLanguage(l); setLangOpen(false); }}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors ${l === language ? "text-primary bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                >
                  {langLabel[l]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
