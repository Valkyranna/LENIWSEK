import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "LENIWSEK | Electronic Music",
  description: "Electronic music artist portfolio",
  icons: {
    icon: `${BASE_PATH}/Leni.webp`,
    shortcut: `${BASE_PATH}/Leni.webp`,
    apple: `${BASE_PATH}/Leni.webp`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="bg-[#050505] text-white selection:bg-white selection:text-black antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
