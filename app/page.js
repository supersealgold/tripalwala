import Hero from "@/app/Hero/Hero";
import ProductShowcase from "@/sections/ProductShowcase";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Tripalwala | Industrial Tarpaulin Wholesale Rates & Colors",
  description: "Official home of Super Seal Gold Tadpatri. Premium tarpaulins available in Yellow, Gold, and Black at competitive wholesale rates. Waterproof and durable covers for all industries.",
};



const ParallaxSection = dynamic(() => import("@/app/industries/ParallaxSection"));
const Features = dynamic(() => import("@/app/about/Features"));
const ContactCTA = dynamic(() => import("@/app/contact/ContactCTA"));
const HorizontalScrollSection = dynamic(() => import("@/sections/HorizontalScrollSection"));
const Testimonials = dynamic(() => import("@/sections/Testimonials"));
const FAQ = dynamic(() => import("@/sections/FAQ"));
const PricingList = dynamic(() => import("@/app/variants/PricingList"));

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <ProductShowcase />
      <ParallaxSection />

      <Features />
      <HorizontalScrollSection />

      <FAQ />
      <PricingList />
      <Testimonials />
      <ContactCTA />

    </div>
  );
}
