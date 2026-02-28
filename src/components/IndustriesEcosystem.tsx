import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/lib/i18n";
import { motion } from "framer-motion";

const IndustriesEcosystem = () => {
  const { language } = useLanguage();
  const c = getContent(language).industries;

  return (
    <section className="py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4">{c.tag}</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{c.headline}</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {c.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-6 rounded-lg border border-border bg-background text-center hover:border-primary/30 transition-colors"
            >
              <span className="text-sm font-medium text-secondary-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesEcosystem;
