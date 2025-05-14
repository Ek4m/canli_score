import { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import { Theme } from "@radix-ui/themes";

import { AppHeader, AppFooter } from "@/common/components";
import { AuthProvider } from "@/modules/auth/contexts";
import {
  queryClient,
  QueryClientProvider,
} from "@/common/components/providers";

import "@radix-ui/themes/styles.css";
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
      <body className={`${sofiaSans.variable}`}>
        <QueryClientProvider client={queryClient}>
          <Theme className="!bg-transparent">
            <AuthProvider>
              <AppHeader />
              <div className="lg:px-[10rem] md:px-[6rem] sm:px-[2rem] px-[1rem] min-h-[calc(100vh-200px)]">
                {children}
              </div>
              <br />
              <br />
              <AppFooter />
            </AuthProvider>
          </Theme>
        </QueryClientProvider>
      </body>
    </html>
  );
}
