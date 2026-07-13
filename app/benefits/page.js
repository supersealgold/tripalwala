import Section from "@/components/Section";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@/app/about/Features"));
const FAQ = dynamic(() => import("@/sections/FAQ"));
const ContactCTA = dynamic(() => import("@/app/contact/ContactCTA"));

export const metadata = {
    title: "Benefits & Features",
    description: "Learn about the unparalleled benefits of our heavy-duty tarpaulins.",
};

export default function BenefitsPage() {
    return (
        <div className="w-full overflow-x-hidden pt-32 pb-16 min-h-screen">
            <Section>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6">
                        Why Choose Us
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Uncompromising <span className="text-brand-400">Quality</span></h1>
                    <p className="text-lg md:text-xl text-surface-600 dark:text-surface-300 leading-relaxed">
                        Every fiber of our tarpaulins is engineered to face harsh realities. Waterproof, UV-treated, cross-stitched, and completely tear-resistant. Discover the true benefits of investing in Tadpatri.
                    </p>
                </div>
            </Section>
            <Features />
            <FAQ />
            <ContactCTA />
        </div>
    );
}
