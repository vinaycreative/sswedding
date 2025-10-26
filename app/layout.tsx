import type { Metadata } from "next"
import "./globals.css"
import { AOSInit } from "@/components/Aos"

export const metadata: Metadata = {
  title: "Shubham & Shweta's Wedding",
  description: "Shubham & Shweta's Wedding Invitation",
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
        <AOSInit />
        {children}
      </body>
    </html>
  )
}
