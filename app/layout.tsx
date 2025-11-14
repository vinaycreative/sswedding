import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import { AOSInit } from "@/components/Aos"

export const metadata: Metadata = {
  title: "Shweta & Shubham's Wedding",
  description: "Shweta & Shubham's Wedding Invitation",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Shubham & Shweta's Wedding",
    description:
      "Join us on November 22, 2025, to celebrate the start of our forever. Capture the joy, share your moments, and revisit the memories that make our day unforgettable.",
    url: "https://shubhamandshweta.com",
    images: [
      {
        url: "/images/og-image.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PKBS7FCVK7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PKBS7FCVK7');
          `}
        </Script>
        <AOSInit />
        {children}
      </body>
    </html>
  )
}
