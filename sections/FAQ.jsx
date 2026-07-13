"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";


export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const { lang } = useLang();
    const t = translations[lang].faq;

    return (
        <Section id="faq" className="bg-[#FEFBEA] dark:bg-premium-dark-85 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                    <h2 className="text-3xl md:text-5xl font-bold text-surface-900 dark:text-white mb-6">
                        {t.heading}
                    </h2>
                    <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                        {t.subheading}
                    </p>
                    <Link href="/contact" className="text-red-600 font-semibold hover:underline">
                        {t.contactLink}
                    </Link>
                    <Image src="/faq/water.webp" alt="FAQ" width={500} height={600} />
                </div>

                <div className="lg:col-span-7 space-y-4">
                    {t.items.map((faq, index) => (
                        <div
                            key={index}
                            className={`gradient-border rounded-2xl p-[0.5px] ${activeIndex === index
                                ? "shadow-xl scale-[1.02] z-10"
                                : "shadow-sm hover:shadow-md"
                                }`}
                        >
                            <div
                                className={`rounded-2xl ${activeIndex === index
                                    ? "bg-white"
                                    : "bg-white dark:bg-surface-900"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className="text-lg font-semibold text-surface-900 dark:text-white pr-8">
                                        {faq.question}
                                    </span>
                                    <span className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'text-white' : 'bg-surface-100 dark:bg-surface-800 text-surface-500'}`}>
                                        {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-surface-600 dark:text-surface-300 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
