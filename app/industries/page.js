import dynamic from "next/dynamic";

const ParallaxSection = dynamic(() => import("@/app/industries/ParallaxSection"));
const ContactCTA = dynamic(() => import("@/app/contact/ContactCTA"));
const HorizontalScrollSection = dynamic(() => import("@/sections/HorizontalScrollSection"));

export const metadata = {
    title: "Industrial Applications | Tadpatri Industries Served",
    description: "Explore the diverse industries we empower with high-quality, durable tarpaulin solutions. From agriculture to industrial construction, we provide the ultimate protection.",
    keywords: ["industrial tarpaulin", "construction covers", "agricultural protection", "heavy duty transit", "manufacturing tarps"],
    openGraph: {
        title: "Industries Served | Tadpatri",
        description: "High-performance tarpaulin solutions for every industry.",
        images: [{ url: "/faq/image.png" }],
    },
};

export default function IndustriesPage() {
    return (
        <main className="w-full overflow-x-hidden">
            <ParallaxSection />
            <HorizontalScrollSection />
            <ContactCTA />
        </main>
    );
}
