import type { Metadata } from "next";
import NavBar from "./components/nav";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Template",
  description: "Blog template para futuro blog escolar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />

          <main className="max-w-3xl mx-auto p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
