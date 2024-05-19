import type { Metadata } from "next";
import Nav from "./constants/Nav"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "FatihTheDev's Portfolio",
  description: "Portfolio for fatihTheDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
