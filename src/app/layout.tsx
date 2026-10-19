import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "@/components/Preloader";
import OfflineWatcher from "@/components/OfflineWatcher";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zooro",
  description: "Zooro - simple, modern solutions for your business.",
};

export const viewport: Viewport = {
  themeColor: "#b3121b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <OfflineWatcher />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
