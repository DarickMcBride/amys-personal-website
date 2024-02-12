import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AppBar from "./components/AppBar";
import Background from "./components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppBar />

          <Background />
          <div className="backdrop-filter backdrop-blur-lg z-10 sm:mx-20 pt-20 mx-8 ">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
