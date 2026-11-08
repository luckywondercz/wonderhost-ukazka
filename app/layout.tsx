import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WonderHost ukázka",
  description: "Testovací aplikace pro nasazení z Gitu na WonderHost.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
