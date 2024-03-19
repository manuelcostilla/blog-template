import type { Metadata } from "next";
import NavBar from "./components/nav";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Personal Manuel Costilla Desarrollador Web FullStack",
  description: "Blog template para futuro blog escolar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      <link rel="icon" href="/iconmonstr-code-8-240.png" />
      </head>
      <body className={`${inter.className} relative `}>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>
        <div className="dark:absolute dark:object-cover dark:top-0 dark:z-[-2] dark:h-full dark:w-full dark:min-h-screen dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
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
