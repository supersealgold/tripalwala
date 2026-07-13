"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
    const containerRef = useRef(null);
    const contentWrapperRef = useRef(null);
    const rightRef = useRef(null);
    const { lang } = useLang();
    const slides = translations[lang].parallax;

    useEffect(() => {
        let ctx;

        // Small timeout lets Lenis fully initialize and measure page layout
        const timer = setTimeout(() => {
            ctx = gsap.context(() => {
                const tl = gsap.timeline();

                tl.to(contentWrapperRef.current, { yPercent: -33.33, ease: "none", duration: 1 })
                    .to(rightRef.current, { xPercent: -33.33, ease: "none", duration: 1 }, "<")
                    .to(contentWrapperRef.current, { yPercent: -66.66, ease: "none", duration: 1 })
                    .to(rightRef.current, { xPercent: -66.66, ease: "none", duration: 1 }, "<")
                    .to({}, { duration: 0.5 });

                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=400%",
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    animation: tl,
                    invalidateOnRefresh: true,
                    snap: {
                        snapTo: [0, 0.333, 0.666, 1],
                        duration: { min: 0.2, max: 0.6 },
                        delay: 0.05,
                        ease: "power1.inOut",
                    },
                });

                ScrollTrigger.refresh();
            }, containerRef);
        }, 200);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden"
            style={{ background: "linear-gradient(135deg, #EFE0B9 0%, #EFE0B9 85%, #EFE0B9 100%)" }}
        >
            {/* Left Side - Vertical Text Scroll */}
            <div className="w-full lg:w-1/2 h-full relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-white/70 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none pointer-events-none">
                <div className="h-[50vh] overflow-hidden pointer-events-auto">
                    <div ref={contentWrapperRef} className="flex flex-col h-[150vh]">
                        {slides.map((slide, i) => (
                            <div key={i} className="h-[50vh] flex-shrink-0 flex flex-col justify-center">
                                <span className="text-red-600 lg:text-red-500 font-bold tracking-widest uppercase mb-4 block">{slide.label}</span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black drop-shadow-sm lg:drop-shadow-none">{slide.heading}</h2>
                                <p className="text-lg md:text-xl text-black font-medium lg:font-normal">{slide.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Horizontal Image Scroll */}
            <div className="w-full lg:w-1/2 h-full absolute top-0 lg:right-0 overflow-hidden z-0">
                <div ref={rightRef} className="flex w-[300%] h-full">
                    <div className="w-1/3 h-full relative">
                        <Image src="/cards/seal.webp" alt="Super Seal Gold Yellow Tarpaulin" fill className="object-cover opacity-90" />
                        <div className="absolute " />
                    </div>
                    <div className="w-1/3 h-full relative">
                        <Image src="/cards/whiteshine.webp" alt="Shine Gold White Tarpaulin" fill className="object-cover opacity-90" />
                        <div className="absolute" />
                    </div>
                    <div className="w-1/3 h-full relative">
                        <Image src="/cards/black.webp" alt="Fastrack Polyfab Black Tarpaulin" fill className="object-cover opacity-90" />
                        <div className="absolute " />
                    </div>
                </div>
            </div>
        </div>
    );
}
