import type { Metadata } from "next";
import PWAInstall from "@/components/PWAInstall";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caça 360 | Formació cinegètica",
  description: "Prepara't per a les proves teòriques D i E i aprèn sobre el món de la caça.",
  applicationName: "Caça 360",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Caça 360",
    statusBarStyle: "default"
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  formatDetection: { telephone: false }
};

export const viewport = {
  themeColor: "#183d30",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca">
      <body>
        {children}
        <PWAInstall />
      </body>
    </html>
  );
}