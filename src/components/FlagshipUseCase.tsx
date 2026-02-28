import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/lib/i18n";
import { motion } from "framer-motion";

const FlagshipUseCase = () => {
  const { language } = useLanguage();
  const c = getContent(language).flagship;

  return (
    <section className="py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4">{c.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{c.headline}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {c.points.map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-border bg-background">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm text-secondary-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipUseCase;
