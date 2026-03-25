import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/lib/i18n";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const SiteFooter = () => {
  const { language } = useLanguage();
  const c = getContent(language).footer;

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="3B Solutions" className="w-7 h-7 object-contain invert" />
            <span className="text-sm text-muted-foreground">{c.tagline}</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=61578434098072"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {c.privacy}
            </Link>
          </div>
        </div>
        <div className="text-center">
          <span className="text-xs text-muted-foreground">{c.copyright}</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
