"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
    const pathname = usePathname();
    const lenisRef = useRef(null);

    useEffect(() => {

        ScrollTrigger.getAll().forEach((t) => t.kill());


        if (lenisRef.current) {
            gsap.ticker.remove(lenisRef.current.raf);
            lenisRef.current.destroy();
            lenisRef.current = null;
        }


        window.scrollTo(0, 0);


        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;


        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);


        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach((t) => t.kill());
            if (lenisRef.current) {
                gsap.ticker.remove(lenisRef.current.raf);
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
        };
    }, [pathname]);

    return <>{children}</>;
}
