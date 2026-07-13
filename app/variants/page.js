import dynamic from "next/dynamic";

const PricingList = dynamic(() => import("@/app/variants/PricingList"));

export const metadata = {
    title: "Tarpaulin Variants & Sizes | Super Seal Gold",
    description: "Explore our comprehensive list of tarpaulin sizes and variants. From 6x9 to 42x40, and 100 GSM to 650 GSM heavy-duty covers. Find the perfect waterproof match for your industrial or agricultural needs.",
    keywords: ["tarpaulin sizes", "tarpaulin variants", "HDPE sheet sizes", "tarpaulin thickness GSM", "super seal gold sizes", "custom tarpaulin", "waterproof covers", "120 GSM", "250 GSM", "100 GSM", "650 GSM"],
    openGraph: {
        title: "Tarpaulin Variants & Sizes | Tadpatri",
        description: "High-performance tarpaulin sizes and GSM varieties.",
        images: [{ url: "/faq/image.png" }],
    },
};

export default function VariantsPage() {
    return (
        <main className="w-full pt-16 min-h-screen">
            <PricingList />
        </main>
    );
}
