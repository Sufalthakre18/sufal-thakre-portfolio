import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sufal Thakre | Full Stack Developer",
  description:
    "Portfolio of Sufal Thakre, a Full Stack Developer (MERN) building fast, accessible web applications. Explore projects, skills, and certifications.",
  keywords: ["Sufal Thakre", "Full Stack Developer", "MERN", "Next.js Developer", "Portfolio"],
  authors: [{ name: "Sufal Thakre" }],
  openGraph: {
    title: "Sufal Thakre | Full Stack Developer",
    description: "Portfolio of Sufal Thakre — Full Stack Developer (MERN).",
    siteName: "Sufal Thakre Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="bg-stone-100 text-gray-800 transition-colors duration-300 dark:bg-neutral-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
