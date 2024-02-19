import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

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
        <ConvexClientProvider>
          <ThemeProvider attribute="CLASS" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="notion_bud-theme-2">
            <Toaster position="bottom-center" />
            <ModalProvider />
          {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
