import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Providers } from "./providers";
import AppBar from "./components/AppBar";
import Background from "./components/Background";

export const metadata: Metadata = {
  title: "Amy Naumovski McBride, EIT",
  description:
    "This is a personal website for Amy Naumovski McBride, an engineer and educator based in California. Here you can learn more about Amy, her skills and her passions. You can also get in touch with her to discuss opportunities or collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar />

          <main className=" flex items-center justify-center overflow-y-auto">
            <div className="max-w-sm mx-8 pt-20 pb-10 sm:max-w-screen-lg">
              {children}
            </div>
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
