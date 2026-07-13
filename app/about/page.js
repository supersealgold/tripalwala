import dynamic from "next/dynamic";
import Section from "@/components/Section";

const Features = dynamic(() => import("@/app/about/Features"));
const ContactCTA = dynamic(() => import("@/app/contact/ContactCTA"));

export const metadata = {
    title: "About Us | Mangalam Plastics Tadpatri Nagpur",
    description: "Learn about the legacy of Mangalam Plastics, a leading provider of high-quality industrial and agricultural tarpaulins in Nagpur. We focus on durability, quality, and customer satisfaction.",
    keywords: ["about mangalam plastics", "tarpaulin manufacturers nagpur", "tadpatri industrial history", "quality tarpaulin supplier", "durable covers india"],
    openGraph: {
        title: "The Mangalam Plastics Story | Nagpur",
        description: "Decades of excellence in providing heavy-duty tarpaulin solutions across India. Discover our commitment to quality.",
        images: [{ url: "/faq/image.png" }],
    },
};

export default function AboutPage() {
    return (
        <main className="w-full pt-32 pb-16 min-h-screen bg-industrial-beige dark:bg-premium-dark-85">
            <Section>
                <div className="max-w-4xl mx-auto text-center mb-20 px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-sm font-medium mb-6">
                        Our Legacy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                        Quality Protected by <span className="text-red-600">Decades of Trust</span>
                    </h1>
                    <p className="text-lg md:text-xl text-surface-600 dark:text-surface-300 leading-relaxed font-medium">
                        Based in Nagpur, Mangalam Plastics has been a benchmark in the tarpaulin industry. We specialize in providing Super Seal Gold and other premium tarpaulin brands that safeguard agricultural products, industrial assets, and commercial goods against the harshest elements.
                    </p>
                </div>
            </Section>

            <Features />
            <ContactCTA />
        </main>
    );
}
