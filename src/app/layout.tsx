import { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";

import { AppHeader, AppFooter } from "@/common/components";

import "./globals.scss";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "CanliScore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sofiaSans.variable} bg-[#111]`}>
        <AppHeader />
        <div className="px-[10rem]">{children}</div>
        <br />
        <br />
        <AppFooter />
      </body>
    </html>
  );
}
