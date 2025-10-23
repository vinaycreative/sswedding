import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Shubham & Shweta's Wedding",
  description: "Shubham & Shweta's Wedding Invitation",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Shubham & Shweta's Wedding",
    description: "Shubham & Shweta's Wedding Invitation",
    url: "https://shubhamandshweta.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  )
}
