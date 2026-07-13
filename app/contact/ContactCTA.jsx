








"use client";

import Section from "@/components/Section";
import { Phone, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-surface-100 animate-pulse rounded" />
    ),
});

export default function ContactCTA() {
    const { lang } = useLang();
    const t = translations[lang].contact;

    return (
        <Section
            id="contact"
            className="py-24 bg-[#EFE0B9] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">


                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.15em] text-surface-800 mb-14 border-b border-black/30 pb-4">
                    {t.heading}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">


                    <div>


                        <p className="text-sm text-surface-700 leading-relaxed mb-8">
                            Mangalam Plastics,<br />
                            Plot No. 481, Chitra Talkies Road,<br />
                            Near Buddhu Khan Minar, Gandhibag, Nagpur
                        </p>


                        <p className="flex items-center gap-2 text-sm text-surface-700 mb-4">
                            <Phone size={14} className="text-red-600" />

                            <a
                                href="tel:+919422128858"
                                className="hover:text-red-600 transition-colors"
                            >
                                +91 94221 28858
                            </a>
                        </p>


                        <p className="flex items-center gap-2 text-sm text-surface-700 mb-10">
                            <Mail size={14} className="text-red-600" />

                            <a
                                href="mailto:supersealtarpoline@gmail.com"
                                className="hover:text-red-600 transition-colors break-all"
                            >
                                supersealtarpoline@gmail.com
                            </a>
                        </p>


                        <p className="text-sm font-semibold text-black mb-5">
                            {t.hoursLabel}
                        </p>

                        <table className="w-full text-sm text-black">
                            <tbody>
                                {t.days.map(({ day, open }) => (
                                    <tr
                                        key={day}
                                        className="border-b border-black/15 last:border-0"
                                    >
                                        <td
                                            className={`py-3 pr-8 font-bold ${open === "Closed" || open === "बंद"
                                                ? "text-surface-400"
                                                : ""
                                                }`}
                                        >
                                            {day}
                                        </td>

                                        <td
                                            className={`py-3 ${open === "Closed" || open === "बंद"
                                                ? "text-surface-400 italic"
                                                : ""
                                                }`}
                                        >
                                            {open}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                    <div className="relative w-full h-[500px]">


                        <div className="absolute right-0 top-0 w-full max-w-[650px] h-[360px] bg-[#f5f5f5] border border-[#dcdcdc] shadow-[0_30px_80px_rgba(0,0,0,0.18)] rounded-sm overflow-hidden z-10">

                            <div className="h-12 bg-[#f3f3f3] border-b border-[#dddddd] flex items-center justify-between px-5">


                                <div className="flex gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#222]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#555]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#999]"></span>
                                </div>


                                <div className="flex gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full border border-[#999]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full border border-[#999]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full border border-[#999]"></span>
                                </div>
                            </div>


                            <a
                                href="https://maps.app.goo.gl/k9mKifANzuvfwuqw7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block w-full h-[310px] group cursor-pointer"
                            >
                                <MapComponent />


                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                    <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                        VIEW ON GOOGLE MAPS
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="absolute left-4 md:-left-16 bottom-[-20px] md:bottom-0 bg-white w-[200px] h-[150px] px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.16)] z-40 flex flex-col justify-center">

                            <h3 className="text-xl font-extrabold uppercase text-black mb-2 leading-none tracking-tight">
                                MANGALAM <br />
                                PLASTICS
                            </h3>

                            <p className="text-surface-700 text-[10px]  font-medium">
                                Plot No. 481, Chitra Talkies Road,<br />
                                near Buddhu Khan Minar,<br />
                                Gandhibag, Nagpur
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </Section >
    );
}