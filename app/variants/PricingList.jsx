
"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const standardSizes = [
    "6 x 9", "12 x 15", "15 x 36", "18 x 24", "30 x 30",
    "6 x 12", "12 x 18", "24 x 27", "18 x 27", "30 x 36",
    "9 x 10", "12 x 20", "15 x 24", "18 x 30", "30 x 40",
    "9 x 12", "12 x 24", "15 x 30", "24 x 30", "42 x 40",
    "12 x 12", "15 x 18", "21 x 30", "24 x 36", "18 x 36",
    "9 x 15", "15 x 20", "18 x 20", "24 x 40", "18 x 40"
];

export default function PricingList() {
    const { lang } = useLang();
    const t = translations[lang].pricing;

    return (
        <Section id="pricing" className="bg-industrial-off-white dark:bg-premium-dark-85 py-24 border-y border-surface-200 dark:border-surface-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-bold uppercase tracking-widest text-sm block mb-4">{t.label}</span>
                    <h2 className="text-4xl md:text-5xl font-light text-surface-900 dark:text-white mb-6">
                        {t.heading} <strong className="font-bold">{t.headingBold}</strong>
                    </h2>
                    <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
                        {t.subheading}
                    </p>
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#fdfcf5] dark:bg-surface-950 rounded-2xl overflow-hidden shadow-xl mb-16 border border-surface-200 dark:border-surface-800"
                >
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-surface-100 dark:bg-surface-900">
                                <TableRow className="border-b border-surface-200 dark:border-surface-800 hover:bg-transparent">
                                    <TableHead className="py-4 px-6 font-semibold text-surface-800 dark:text-surface-200">{t.colSr}</TableHead>
                                    <TableHead className="py-4 px-6 font-semibold text-surface-800 dark:text-surface-200">{t.colName}</TableHead>
                                    <TableHead className="py-4 px-6 font-semibold text-surface-800 dark:text-surface-200">{t.colGsm}</TableHead>
                                    <TableHead className="py-4 px-6 font-semibold text-surface-800 dark:text-surface-200">{t.colColor}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-surface-200 dark:divide-surface-800 border-0">
                                {t.items.map((product) => (
                                    <TableRow key={product.sr} className="hover:bg-surface-50 dark:hover:bg-surface-900/50 transition-colors border-0">
                                        <TableCell className="py-4 px-6 text-red-600 dark:text-red-400 font-medium">{product.sr}</TableCell>
                                        <TableCell className="py-4 px-6 font-medium text-surface-900 dark:text-white">{product.name}</TableCell>
                                        <TableCell className="py-4 px-6 text-surface-600 dark:text-surface-400 font-mono">{product.gsm}</TableCell>
                                        <TableCell className="py-4 px-6 text-surface-600 dark:text-surface-400">{product.color}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </motion.div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Standard Sizes */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-[#fdfcf5] dark:bg-surface-950 p-8 md:p-10 rounded-2xl shadow-xl border border-surface-200 dark:border-surface-800"
                    >
                        <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm">📐</span>
                            {t.sizesHeading}
                        </h3>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {standardSizes.map((size, idx) => (
                                <div key={idx} className="bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-lg py-2 text-center text-surface-700 dark:text-surface-300 font-mono text-sm hover:border-red-500 hover:text-red-500 transition-colors cursor-default">
                                    {size}
                                </div>
                            ))}
                        </div>
                        <p className="text-red-600 dark:text-red-400 mt-6 text-sm font-medium">
                            {t.specialSizes}
                        </p>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden"
                        style={{ background: 'linear-gradient(to bottom right, #CC2525, #F5A520)' }}
                    >
                        {/* Background effect */}
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M11 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10.5M11 20V16C11 14.8954 11.8954 14 13 14H18.5M11 20H15C16.1046 20 17 19.1046 17 18V16M18.5 14L14 9.5M18.5 14H20C21.1046 14 22 13.1046 22 12V9.5M22 9.5V8C22 6.89543 21.1046 6 20 6H15.5M22 9.5L15.5 6" /></svg>
                        </div>

                        <h3 className="text-xl font-bold mb-6 text-white/90">{t.termsHeading}</h3>
                        <ul className="space-y-4 text-sm text-surface-200">
                            {t.terms.map((term, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="text-orange-300 font-bold">{i + 1}.</span>
                                    {term}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
}
