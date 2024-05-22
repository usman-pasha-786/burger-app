import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/navigation/ResponsiveNav";

const barlow_Condensed = Barlow_Condensed({
  weight:['300','400','500','600','700'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Burger | Healthy Food",
  description: "burger app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_Condensed.className}>
        <ResponsiveNav/>
        {children}
        </body>
    </html>
  );
}
