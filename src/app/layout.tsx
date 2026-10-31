import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vivian Okechukwu — Software developer",
  description:
    "Portfolio of Vivian Okechukwu, a software developer building ecommerce experiences and web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}