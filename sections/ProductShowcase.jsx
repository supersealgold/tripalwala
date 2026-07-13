"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const productImages = [
    { id: "01", image: "/cards/seal.webp", alt: "Super Seal Gold Yellow HDPE Tarpaulin" },
    { id: "02", image: "/cards/whitegold.webp", alt: "Super Seal Gold White Tarpaulin" },
    { id: "03", image: "/cards/superseal.webp", alt: "High-strength woven reinforcement tape designed for durable edge binding, tear resistance, and long-lasting performance in tarpaulin, tent, packaging, and agricultural applications." },
    { id: "04", image: "/cards/whiteshine.webp", alt: "Super Tarp 6035 Fastrack Polyfab" },



    { id: "05", image: "/cards/blacktigerss.webp", alt: "Super Tarp 6035 Fastrack Polyfab" },
    { id: "06", image: "/cards/black.webp", alt: "Shine Gold White Plastic Tarpaulin" },
    { id: "07", image: "/cards/tarpyellow.webp", alt: "Fastrack Polyfab Premium Promotional" },
];


export default function ProductShowcase() {
    const { lang } = useLang();
    const tp = translations[lang].products;
    const products = tp.items.map((item, i) => ({ ...item, ...productImages[i] }));

    return (
        <Section id="products" className="bg-[#FEFBEA] dark:bg-premium-dark-85 py-24 overflow-hidden">
            <div className="text-center max-w-4xl mx-auto mb-20 px-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-sm font-medium mb-6">
                    {tp.label}
                </div>
                <h2 className="text-5xl md:text-6xl text-surface-900 dark:text-white mb-6 font-light tracking-tight">
                    {tp.heading}
                </h2>
                <p className="text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
                    {tp.subheading}
                </p>
            </div>

            <div className="relative w-full">
                <div className="flex gap-6 overflow-x-auto  px-6 pb-8 hide-scrollbar">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: parseInt(product.id) * 0.1 }}
                            className="relative flex-shrink-0 w-[85vw] md:w-[350px] snap-center rounded-[2.5rem] bg-industrial-beige dark:bg-surface-900 shadow-xl transition-all duration-300 overflow-hidden group border border-surface-200 dark:border-surface-800 flex flex-col items-center text-center pb-12 px-6"
                        >

                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 400 400"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 right-0 w-[120%] h-full z-0 pointer-events-none transform translate-x-12 -translate-y-12"
                            >
                                <path
                                    d="M400 0H80C80 0 120 250 300 320C480 390 400 300 400 400V0Z"
                                    fill={`url(#card-grad-refine-${product.id})`}
                                />
                                <defs>
                                    <linearGradient id={`card-grad-refine-${product.id}`} x1="400" y1="0" x2="100" y2="350" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#CC2525" />
                                        <stop offset="100%" stopColor="#F5A520" />
                                    </linearGradient>
                                </defs>
                            </svg>


                            <div className="absolute top-12 left-12 z-10 text-surface-200 dark:text-surface-700 opacity-60">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 5v14M19 12l-7 7-7-7" />
                                </svg>
                            </div>


                            <span className="absolute top-12 right-12 z-10 text-xl font-black text-white tracking-tighter">
                                {product.id}
                            </span>


                            <div className="relative z-10 mt-16 mb-8 w-52 h-52 flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    alt={product.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>


                            <div className="relative z-10 px-4">
                                <h3 className="text-2xl font-black text-surface-900 dark:text-white mb-3 tracking-tight leading-tight">{product.title}</h3>
                                <p className="text-surface-500 dark:text-surface-400 text-sm leading-relaxed max-w-[260px] mx-auto">
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

