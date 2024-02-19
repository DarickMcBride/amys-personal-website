"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      themes={["night", "cupcake"]}
      defaultTheme="cupcake"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}
