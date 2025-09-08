import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizzaro - Pizza Ordering App",
  description:
    "Pizzaro is a pizza ordering app built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full  flex flex-col">{children}</body>
    </html>
  );
}
