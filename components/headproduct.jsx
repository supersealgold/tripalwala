"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function HeadProduct() {
    const { lang } = useLang();
    const t = translations[lang].headProduct;

    return (
        <div className="w-full max-w-[1400px] mx-auto px-3 mb-16">
            <div className="relative w-full overflow-hidden rounded-2xl bg-white border border-[#eee] shadow-2xl">
                {/* Background Image Container */}
                <div className="absolute top-0 right-0 w-full h-full md:w-[60%] z-0">
                    <Image
                        src="/faq/image.png"
                        alt="Super Seal Gold"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Black gradient from left to right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
                </div>


                <div className="absolute inset-0 bg-black z-10 w-full md:w-[40%] h-full" />

                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-black z-10 w-full md:w-[60%]" />

                <div className="relative flex flex-col md:flex-row items-stretch min-h-[250px] md:h-[300px] z-20">

                    <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                        {/* Bestseller Badge */}
                        <div className="inline-flex items-center gap-1.5 bg-[#F5A520] rounded px-2 py-0.5 mb-4 mr-auto">
                            <span className="text-[9px] font-black text-black uppercase tracking-[0.1em]">{t.badge}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-black mb-3 leading-tight tracking-tighter">
                            <span className="text-white">{t.title1}</span>
                            <span className="text-[#F5A520]">{t.title2}</span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 text-xs md:text-sm max-w-sm mb-6 leading-relaxed font-medium">
                            {t.description}
                        </p>

                        {/* Feature Badges - Glossy Style */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {t.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1"
                                >
                                    <span className="text-[10px]">{feature.icon}</span>
                                    <span className="text-white/90 text-[8px] font-bold uppercase tracking-wider">
                                        {feature.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Link href="/contact" className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#CC2525] to-[#F5A520] text-white text-sm font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-900/40 mr-auto">
                            <span>{t.cta}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Empty right side for image visibility */}
                    <div className="flex-1 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
