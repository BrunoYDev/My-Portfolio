import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { MatrixBackground } from "@/components/MatrixBackground/MatrixBackground";

// Configura a fonte
const vt323 = VT323({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-vt323',
});

export const metadata: Metadata = {
  title: "Bruno R Garcia - Backend Developer",
  description: "My personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vt323.className}>
        <MatrixBackground />
        {children}
      </body>
    </html>
  );
}