import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caça 360 | Formació cinegètica",
  description: "Prepara't per a les proves teòriques D i E i aprèn sobre el món de la caça.",
  applicationName: "Caça 360",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca">
      <body>{children}</body>
    </html>
  );
}