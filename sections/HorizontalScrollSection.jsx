"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const items = [
    { id: 1, title: "Industrial Grade", subtitle: "For Factories & Warehouses", image: "/product/b.webp" },
    { id: 2, title: "Agricultural Use", subtitle: "Crop Protection", image: "/product/poultry_farm.webp" },
    { id: 3, title: "Transport Covers", subtitle: "Truck & Lorry Sheets", image: "/product/truck.webp" },
    { id: 4, title: "Dome Tents", subtitle: "Waterproof Canopies", image: "/product/dome.webp" },
    { id: 5, title: "Fish Farming", subtitle: "Pond Liners", image: "/product/fish_pond_liner.webp" },
    { id: 6, title: "Relief Camps", subtitle: "Emergency Shelters", image: "/product/relief.webp" },
];

export default function HorizontalScrollSection() {
    const componentRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        let ctx;

        // Delay to let Lenis initialize and measure the layout correctly
        const timer = setTimeout(() => {
            ctx = gsap.context(() => {
                const totalWidth = sliderRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                const scrollDistance = -(totalWidth - viewportWidth);

                gsap.to(sliderRef.current, {
                    x: scrollDistance,
                    ease: "none",
                    scrollTrigger: {
                        trigger: componentRef.current,
                        start: "top top",
                        end: () => `+=${totalWidth - viewportWidth + viewportWidth * 0.5}`,
                        scrub: 1.5,
                        pin: true,
                        pinSpacing: true,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                    },
                });

                ScrollTrigger.refresh();
            }, componentRef);
        }, 200);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section
            ref={componentRef}
            className="relative h-screen w-full overflow-hidden"
            style={{ background: "#EFE0B9" }}
        >
            {/* Header */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 z-10 max-w-md pointer-events-none">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black drop-shadow-md">
                    Versatile Applications
                </h2>
                <p className="text-black text-base">Scroll horizontally to explore</p>
            </div>

            {/* Moving Container */}
            <div
                ref={sliderRef}
                className="flex h-full items-center gap-6 px-8 md:px-12 w-max pt-24"
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="horizontal-item flex-shrink-0 w-[80vw] md:w-[55vw] h-[65vh] rounded-3xl overflow-hidden relative group"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 80vw, 55vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-3 border border-white/20 text-white tracking-widest">
                                0{item.id}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold mb-1 text-white">{item.title}</h3>
                            <p className="text-base text-surface-300">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
