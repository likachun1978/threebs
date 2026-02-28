import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/lib/i18n";
import { motion } from "framer-motion";

const WhyThreeB = () => {
  const { language } = useLanguage();
  const c = getContent(language).whyThreeB;

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4">{c.tag}</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{c.headline}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {c.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-lg border border-border bg-card"
            >
              <h3 className="text-lg font-semibold mb-3 text-gradient-primary inline-block">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThreeB;
