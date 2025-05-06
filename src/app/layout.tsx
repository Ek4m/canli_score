import { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import { Theme } from "@radix-ui/themes";

import { AppHeader, AppFooter } from "@/common/components";

import "@radix-ui/themes/styles.css";
import "./globals.scss";
import { AuthProvider } from "@/modules/auth/contexts";

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
      <body className={`${sofiaSans.variable} !bg-[#111]`}>
        <Theme className="!bg-transparent">
          <AuthProvider>
            <AppHeader />
            <div className="lg:px-[10rem] md:px-[6rem] sm:px-[2rem] px-[1rem]">{children}</div>
            <br />
            <br />
            <AppFooter />
          </AuthProvider>
        </Theme>
      </body>
    </html>
  );
}
