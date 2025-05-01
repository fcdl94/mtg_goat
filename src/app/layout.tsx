import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTG Commander Goat - Track Your Playgroup Stats",
  description: "Track win rates and statistics for your Magic: The Gathering Commander playgroup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            {children}
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
