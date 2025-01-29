import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import { Montserrat } from 'next/font/google'
import SEO from "@/app/components/Seo";

const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <SEO />
      <body
        className={`${geistSans.variable} ${roboto.className} antialiased`}
      >
      <NextUIProvider>
          <main className={"dark text-foreground bg-background"}>
              {children}
          </main>
      </NextUIProvider>
      </body>
    </html>
);
}
