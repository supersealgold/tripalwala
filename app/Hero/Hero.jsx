



"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const { lang } = useLang();
    const t = translations[lang].hero;

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(textRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black text-white"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/tramp/hero_truck.png"
                    className="w-full h-full object-cover opacity-50"
                    preload="none"
                >
                    <source src="/newbg.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
            </div>

            <Section className="w-full z-10">
                <div className="flex justify-center">
                    <div ref={textRef} className="max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50/10 backdrop-blur-sm text-red-400 text-sm font-medium mb-6 border border-red-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            {t.badge}
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            {t.heading1}{" "}
                            <span
                                style={{
                                    background: "linear-gradient(to right, #CC2525, #F5A520)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {t.headingAccent}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-surface-200 mb-8 leading-relaxed">
                            {t.subheading}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button size="lg" href="/products" as={Link} className="group">
                                {t.cta}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}