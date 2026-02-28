import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/lib/i18n";
import { motion } from "framer-motion";

const SectionTag = ({ children }: { children: string }) => (
  <span className="inline-block text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4">
    {children}
  </span>
);

const WhatWeBuild = () => {
  const { language } = useLanguage();
  const c = getContent(language).whatWeBuild;

  return (
    <section id="platform" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <SectionTag>{c.tag}</SectionTag>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{c.headline}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{c.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
