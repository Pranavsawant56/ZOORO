import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ZOORO Hospitality",
    short_name: "ZOORO",
    description:
      "Corporate canteens, industrial catering, festival and occasion meals, events and healthy meal plans.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff8ec",
    theme_color: "#b3121b",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
