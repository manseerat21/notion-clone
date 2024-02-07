import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotionBud",
  description: "An open-source system for a wokspace."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="CLASS" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="notion_bud-theme-2">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
