"use client"

import Section from "@/components/Section";
import { Star } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const testimonials = [
    {
        id: 1,
        content: "The quality of HDPE sheets provided by Tadpatri is unmatched. Perfect for our warehouse covering needs during monsoons.",
        author: "Rahul Sharma",
        role: "Logistics Manager, ABC Corp",
        rating: 5
    },
    {
        id: 2,
        content: "We needed custom-sized huge tarpaulins for our construction site. Delivery was fast and the material is extremely durable.",
        author: "Priya Patel",
        role: "Project Head, Sky High Builders",
        rating: 5
    },
    {
        id: 3,
        content: "Affordable rates and excellent customer service. The PVC sheets are 100% waterproof as promised.",
        author: "Vikram Singh",
        role: "Farmer, Nagpur",
        rating: 4
    }
];

export default function Testimonials() {
    const { lang } = useLang();
    const t = translations[lang].testimonials;
    const testimonials = t.items.map((item, i) => ({ ...item, id: i + 1, rating: i < 2 ? 5 : 4 }));

    return (
        <Section id="testimonials" className="bg-[#FFFAEA] border-t border-surface-200 dark:border-surface-800">
            <style>{`
                .dark #testimonials {
                    background: linear-gradient(135deg, #000000 0%, #000000 75%, #450a0a 100%) !important;
                }
            `}</style>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-white mb-4">
                    {t.heading}
                </h2>
                <p className="text-lg text-surface-600 dark:text-surface-400">
                    {t.subheading}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item) => (
                    <div key={item.id} className="gradient-border bg-[#fdfcf5] dark:bg-surface-900 p-8 rounded-2xl flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    className={i < item.rating ? "text-red-500 fill-red-500" : "text-surface-300"}
                                />
                            ))}
                        </div>
                        <p className="text-surface-700 dark:text-surface-300 mb-6 italic leading-relaxed">
                            "{item.content}"
                        </p>
                        <div className="mt-auto">
                            <p className="font-bold text-surface-900 dark:text-white">{item.author}</p>
                            <p className="text-sm text-surface-500">{item.role}</p>
                        </div>
                    </div>
                ))}
            </div>


        </Section>
    );
}
