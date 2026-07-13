import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import { LanguageProvider } from "@/lib/LanguageContext";
// import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.tripalwala.com"),
  title: {
    default: "Tadpatri - Premium Industrial Tarpaulin Solutions",
    template: "%s | Tadpatri",
  },
  description: "High-quality, durable, and waterproof tarpaulin sheets for all your business and industrial needs.",
  keywords: ["tarpaulin", "industrial covers", "waterproof sheets", "heavy duty tarps", "Tadpatri", "logistics covers", "agricultural tarps", "construction covers"],
  openGraph: {
    title: "Tadpatri - Premium Industrial Tarpaulin Solutions",
    description: "High-quality, durable, and waterproof tarpaulin sheets for all your business and industrial needs.",
    url: "https://www.tripalwala.com",
    siteName: "Tadpatri",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tadpatri - Premium Tarpaulin",
    description: "High-quality protective tarpaulins for industrial and agricultural applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased bg-white text-foreground overflow-x-hidden selection:bg-brand-500/30 selection:text-brand-900">
        <LanguageProvider>
          <SmoothScroll>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>

            </div>
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
