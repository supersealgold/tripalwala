import dynamic from "next/dynamic";

const ContactCTA = dynamic(() => import("@/app/contact/ContactCTA"));

export const metadata = {
    title: "Contact Us | Mangalam Plastics Tadpatri Nagpur",
    description: "Get in touch with Mangalam Plastics for premium tarpaulin solutions. Visit our warehouse in Nagpur or contact us for quotes on waterproof and heavy-duty covers.",
    keywords: ["contact mangalam plastics", "tarpaulin nagpur", "tadpatri contact", "waterproof covers nagpur", "buy tarpaulin nagpur"],
    openGraph: {
        title: "Contact Mangalam Plastics | Nagpur",
        description: "Premium industrial and agricultural tarpaulin solutions. Contact us for bulk orders and specialized covers.",
        images: [{ url: "/faq/image.png" }],
    },
};

export default function ContactPage() {
    return (
        <main className="w-full pt-20">
            <ContactCTA />
        </main>
    );
}
