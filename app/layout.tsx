import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ui/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "УРАЛСИЛТРАНС - Энергетические решения",
  description:
    "Ведущий поставщик электротехнического оборудования с 20-летним опытом работы на рынке",
  icons: {
    icon: "/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/logo/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
