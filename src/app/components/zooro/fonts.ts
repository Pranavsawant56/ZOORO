import { Archivo_Black, Fraunces, Inter } from "next/font/google";

export const archivo = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-archivo" });
export const fraunces = Fraunces({ weight: "900", subsets: ["latin"], variable: "--font-fraunces" });
export const inter = Inter({ weight: ["400", "600", "800"], subsets: ["latin"], variable: "--font-inter" });
