import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio Profesional | Adri",
  description: "Portafolio web Adriana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#F5EEDD] text-[#16587B] antialiased">
        {children}
      </body>
    </html>
  );
}