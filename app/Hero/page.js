import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/app/Hero/Hero"));

export const metadata = {
    title: "Premium Heavy Duty Tarpaulins & Tadpatri | Super Seal Gold",
    description: "Discover the ultimate protection with Mangalam Plastics' Super Seal Gold. Our premium multi-layer, UV-stabilised, 100% waterproof tarpaulins secure industrial and agricultural goods.",
    keywords: ["Super Seal Gold hero", "tarpaulin manufacturers in india", "heavy duty tadpatri", "waterproof covers", "mangalam plastics"],
};

export default function HeroPage() {
    return (
        <main className="w-full min-h-screen">
            <Hero />
        </main>
    );
}
