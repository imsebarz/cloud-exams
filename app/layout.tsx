import type { Metadata } from "next";
// @ts-ignore - CSS imports handled by Next.js
import "./globals.css";

export const metadata: Metadata = {
  title: "GCP Associate Cloud Engineer — Practice Exams",
  description: "Practice exams for the Google Cloud Associate Cloud Engineer certification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
