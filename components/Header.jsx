"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { Switch } from "@/components/ui/switch";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

import { navLinks } from "@/constants";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { lang, setLang } = useLang();
    const t = translations[lang].nav;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed left-0 right-0 z-40 transition-all duration-500 ease-in-out",
                )}
                style={{ background: "linear-gradient(to right, #CC2525, #F5A520)" }}
            >
                <div className="mx-auto max-w-7xl">
                    <div
                        className={cn(
                            "flex items-center justify-between transition-all duration-300",
                            isScrolled
                                ? "rounded-full px-6 py-3 shadow-none bg-transparent border-none"
                                : " px-6 py-4 lg:py-4"
                        )}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-transparent text-white font-bold p-1.5 rounded-lg group-hover:scale-110 transition-transform border border-white">
                                SG
                            </div>
                            <span className="text-base sm:text-lg md:text-2xl font-bold tracking-tight text-white truncate max-w-[140px] sm:max-w-none">
                                SuperSealGold<span className="text-red-500">.</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center  gap-8 dark:bg-surface-800/30 px-6 py-2 rounded-full border border-surface-100/40  backdrop-blur-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-semibold text-white  hover:text-white dark:text-surface-300 dark:hover:text-red-400 transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>


                        <div className="flex items-center gap-3">

                            {/* Shadcn Language Toggle Switch */}
                            <div className="flex items-center gap-2">
                                <span className={cn("text-[10px] font-bold transition-colors", lang === "hi" ? "text-white/50" : "text-white")}>EN</span>
                                <Switch
                                    checked={lang === "hi"}
                                    onCheckedChange={(checked) => setLang(checked ? "hi" : "en")}
                                    className="data-[state=checked]:bg-white/40 data-[state=unchecked]:bg-white/20 border-white/30"
                                />
                                <span className={cn("text-[10px] font-bold transition-colors", lang === "en" ? "text-white/50" : "text-white")}>हिंदी</span>
                            </div>

                            <Button
                                size="sm"
                                style={{ background: "white" }}
                                className="hidden md:inline-flex text-red-500 shadow-red-500/20 shadow-lg hover:shadow-red-500/40"
                                href="/#contact"
                                as={Link}
                            >
                                {t.requestQuote}
                            </Button>
                            <Button
                                className="md:hidden text-white p-2 hover:bg-white/20 rounded-full transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </Button>
                        </div>
                    </div>
                </div>


                <div className={cn(
                    "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )} onClick={() => setIsMobileMenuOpen(false)} />


                <div className={cn(
                    "fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-surface-900 z-50 md:hidden shadow-2xl transform transition-transform duration-300 p-6 flex flex-col gap-6",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold">{t.menu}</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-surface-100 rounded-full"><X size={24} /></button>
                    </div>

                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-surface-800 dark:text-surface-200 hover:text-red-600 px-4 py-2 hover:bg-red-50 dark:hover:bg-surface-800 rounded-xl transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>


                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-red-50 dark:bg-surface-800 text-red-700 dark:text-red-300 font-semibold text-sm w-full">
                        <div className="flex items-center gap-2">

                            <span>{lang === "en" ? "English" : "हिंदी"}</span>
                        </div>
                        <Switch
                            checked={lang === "hi"}
                            onCheckedChange={(checked) => setLang(checked ? "hi" : "en")}
                            className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-red-200 dark:data-[state=unchecked]:bg-surface-700"
                        />
                    </div>

                    <div className="mt-auto">
                        <div className="p-4 bg-red-50 dark:bg-surface-800 rounded-2xl mb-4">
                            <p className="text-sm font-semibold mb-2 text-red-700">{t.contactUs}</p>
                            <p className="text-xs text-surface-500 mb-1">+91 94221 28858</p>
                            <p className="text-xs text-surface-500">supersealtarpoline@gmail.com</p>
                        </div>
                        <Button className="w-full !bg-white" href="/#contact" as={Link} onClick={() => setIsMobileMenuOpen(false)}>
                            {t.getQuote}
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
}
