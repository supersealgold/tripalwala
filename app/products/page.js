"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const ContactCTA = dynamic(() => import("@/app/contact/ContactCTA"));
import HeadProduct from "@/components/headproduct";

const productImages = [
    { image: "/cards/seal.webp" },
    { image: "/cards/whitegold.webp" },
    { image: "/cards/superseal.webp" },
    { image: "/cards/whiteshine.webp" },
    { image: "/cards/blacktigerss.webp" },
    { image: "/cards/black.webp" },
    { image: "/cards/tarpyellow.webp" },
    { image: "/tramp/product/image.png" },
    { image: "/tramp/supersealgold.png" },
    { image: "/tramp/superseal.png" },
    { image: "/tramp/product/image copy 7.png" },
    { image: "/tramp/differenttypes.png" },

];

export default function ProductsPage() {
    const { lang } = useLang();
    const tp = translations[lang].productPage;
    const products = tp.items.map((item, i) => ({
        ...item,
        id: i + 1,
        ...productImages[i],
    }));

    return (
        <div className="w-full bg-[#FFFAEA] pt-[60px] min-h-screen">
            <div className="max-w-[1600px] mx-auto px-6 py-12">

                {/* Header for Products Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center md:text-left pb-3"
                >
                    <h1 className="text-4xl font-bold text-black mb-2">{tp.heading}</h1>
                    <p className="text-[#555]">{tp.subheading}</p>
                </motion.div>
                <HeadProduct />


                <main className="w-full border-t border-l border-[#222]">
                    {/* Strictly updated to 3 columns max for large screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-[#222]">
                        {products.map((product, index) => {
                            const isBestseller = product.tag === "Bestseller" || product.tag === "सबसे लोकप्रिय";
                            return (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                                    className={`relative group border-r flex flex-col h-[400px] transition-all duration-300 ${isBestseller
                                        ? "border-red-500 border-2 ring-2 ring-red-500/60 bg-white shadow-[0_0_20px_rgba(239,68,68,0.25)] z-10"
                                        : "border-[#222] bg-white"
                                        }`}
                                >
                                    {/* Bestseller Banner */}
                                    {isBestseller && (
                                        <div className="absolute top-0 left-0 right-0 text-white text-[10px] font-extrabold px-3 py-1 z-20 uppercase tracking-[0.15em] flex items-center gap-2" style={{ background: "linear-gradient(to right, #CC2525, #F5A520)" }}>
                                            <span>⭐ {product.tag}</span>
                                        </div>
                                    )}

                                    {/* Regular Tag Badge */}
                                    {product.tag && !isBestseller && (
                                        <div className="absolute top-0 left-0 bg-white text-black text-xs font-bold px-3 py-1 z-10 uppercase tracking-widest border border-black hover:bg-red-50 transition-colors">
                                            {product.tag}
                                        </div>
                                    )}

                                    {/* Image Area */}
                                    <div className={`relative w-full h-[65%] p-6 flex flex-col items-center justify-center bg-white transition-opacity duration-300 group-hover:opacity-90 ${isBestseller ? "pt-8" : ""
                                        }`}>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Bottom Block */}
                                    <div
                                        className={`relative w-full h-[35%] p-4 flex flex-col justify-end text-white border-t ${isBestseller
                                            ? "bg-[#1a1a1a] border-red-500"
                                            : "border-[#222]"
                                            }`}
                                        style={!isBestseller ? { background: "linear-gradient(to right, #CC2525, #F5A520)" } : {}}
                                    >
                                        <p className="text-sm font-semibold leading-tight">{product.title}</p>
                                        <p className="text-[10px] opacity-80 leading-tight mb-2 line-clamp-2">{product.description}</p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <Link href="/contact" className={`text-lg font-bold hover:underline ${isBestseller ? "text-red-400" : ""}`}>{product.price}</Link>
                                            {isBestseller && (
                                                <span className="text-[10px] bg-red-400 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">{lang === 'hi' ? 'टॉप पिक' : 'Top Pick'}</span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </main>
            </div>

            <ContactCTA />
        </div>
    );
}
