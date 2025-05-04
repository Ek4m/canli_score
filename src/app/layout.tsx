import { Sofia_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { AppHeader, AppFooter } from "@/common/components";

import "./globals.scss";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sofiaSans.variable} bg-[#111]`}>
        <AntdRegistry>
          <AppHeader />
          {children}
          <AppFooter />
        </AntdRegistry>
      </body>
    </html>
  );
}
