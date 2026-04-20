import type { Metadata, Viewport } from "next";
// @ts-ignore - CSS imports handled by Next.js
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Certification — Practice Exams",
  description: "Practice exams and study cheatsheets for GCP and AWS cloud certifications",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Lets content extend into the notch / home-indicator area on iOS.
  viewportFit: "cover",
  themeColor: "#f8f9fa",
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
