"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Features() {
    const { lang } = useLang();
    const t = translations[lang].features;

    return (
        <Section id="about" className="bg-[#FFFAEA] py-24 md:py-32 overflow-hidden" style={{ background: "var(--feature-bg, #FFFAEA)" }}>
            <style>{`
                .dark #about {
                    background: linear-gradient(135deg, #000000 0%, #000000 75%, #450a0a 100%) !important;
                }
            `}</style>
            <div className="max-w-7xl mx-auto px-6">


                <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-surface-900 dark:text-white leading-[1.1]">
                            {t.heading}
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="lg:w-1/3 flex flex-col justify-between pt-2"
                    >
                        <p className="text-lg text-surface-600 dark:text-surface-400 leading-relaxed mb-8">
                            {t.subheading}
                        </p>
                        <div>
                            <Button size="lg" className="rounded-full px-8 bg-surface-900 text-white hover:bg-surface-800 dark:bg-[var(--background)] dark:text-surface-900" href="/contact" as={Link}>
                                {t.cta}
                            </Button>
                        </div>
                    </motion.div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                    {t.items.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="flex flex-col gap-4"
                        >
                            <h3 className="text-2xl font-medium text-surface-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>



            </div>
        </Section>
    );
}
