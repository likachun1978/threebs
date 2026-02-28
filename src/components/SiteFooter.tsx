import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/lib/i18n";
import logo from "@/assets/logo.png";

const SiteFooter = () => {
  const { language } = useLanguage();
  const c = getContent(language).footer;

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="3B Solutions" className="w-7 h-7 object-contain invert" />
          <span className="text-sm text-muted-foreground">{c.tagline}</span>
        </div>
        <span className="text-xs text-text-dim">{c.copyright}</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
