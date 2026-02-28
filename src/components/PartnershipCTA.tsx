import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/lib/i18n";
import { motion } from "framer-motion";

const PartnershipCTA = () => {
  const { language } = useLanguage();
  const c = getContent(language).partnership;

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 whitespace-pre-line">
            {c.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {c.description}
          </p>
          <a
            href="mailto:cs@3bs.com.hk"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
          >
            {c.cta}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipCTA;
