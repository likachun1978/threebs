import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/lib/i18n";

const SiteFooter = () => {
  const { language } = useLanguage();
  const c = getContent(language).footer;

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">3B</span>
          </div>
          <span className="text-sm text-muted-foreground">{c.tagline}</span>
        </div>
        <span className="text-xs text-text-dim">{c.copyright}</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
