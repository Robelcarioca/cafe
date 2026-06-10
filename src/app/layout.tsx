import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Header } from "@/components/Header";
import { PWARegister } from "@/components/PWARegister";
import { restaurantInfo } from "@/data/restaurant";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${restaurantInfo.name} | Digital Menu`,
    template: `%s | ${restaurantInfo.name}`,
  },
  description: `Browse the digital menu at ${restaurantInfo.name}. Breakfast, pizza, burgers, plates, bowls, juices, and more. ${restaurantInfo.vatNote}. Order for delivery.`,
  keywords: [
    "Ethiopian Aviation Cafe",
    "restaurant menu",
    "Addis Ababa cafe",
    "QR menu",
    "digital menu",
    "Ethiopian food",
    "pizza",
    "breakfast",
  ],
  authors: [{ name: restaurantInfo.name }],
  creator: restaurantInfo.name,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: restaurantInfo.name,
  },
  openGraph: {
    type: "website",
    locale: "en_ET",
    siteName: restaurantInfo.name,
    title: `${restaurantInfo.name} | Digital Menu`,
    description: restaurantInfo.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7A6551" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1612" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
        <PWARegister />
        <Header />
        <main className="min-h-[calc(100dvh-200px)]">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
