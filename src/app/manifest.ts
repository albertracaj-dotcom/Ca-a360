import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Caça 360",
    short_name: "Caça 360",
    description: "Formació cinegètica i preparació de les proves teòriques D i E.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f5f4ed",
    theme_color: "#183d30",
    lang: "ca",
    categories: ["education", "sports"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-maskable.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" }
    ]
  };
}