
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="text-white py-12" style={{ backgroundColor: "#0f172a" }}>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 py-8"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
                    {/* Logo / Brand */}
                    <div className="col-span-2 md:col-span-1 flex items-center">
                        <div className="border-2 border-white/60 rounded p-3 w-20 h-16 flex flex-col justify-center items-center gap-1">
                            <span className="text-base font-black tracking-tight leading-none">SG</span>
                            <span className="text-[7px] font-semibold tracking-widest opacity-80 uppercase">SuperSealGold</span>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-4 opacity-70">Products</p>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/products" className="hover:text-white transition-colors">HDPE Tarpaulin</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">PVC Sheets</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Heavy Duty Covers</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Custom Sizes</Link></li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-4 opacity-70">Location</p>
                        <p className="text-sm leading-relaxed mb-3">
                            Buddhu Khan Minar,<br />
                            Chitra Talkies Road,<br />
                            Gandhibag, Nagpur
                        </p>
                        <p className="flex items-center gap-2 text-sm mb-2">
                            <Phone size={13} />
                            <a href="tel:+919422128858" className="hover:text-white transition-colors">
                                +91 94221 28858
                            </a>
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <Mail size={13} />
                            <a href="mailto:supersealtarpoline@gmail.com" className="hover:text-white transition-colors break-all">
                                supersealtarpoline@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col items-end justify-between h-full">
                        <div className="flex items-center gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <Instagram size={22} />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <Facebook size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom strip */}
                <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-2 text-xs opacity-70">
                    <p>© {new Date().getFullYear()} Mangalam Plastics · Tadpatri. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
                        <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
