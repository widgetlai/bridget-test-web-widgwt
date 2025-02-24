///////////////////////////////////////////////////////
// This is the layout for the entire site, it helps  //
// give the other files context/structure.           //
///////////////////////////////////////////////////////


import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "./components/navigation"

export const metadata: Metadata = {
  title: "bridget lai",
  description: "portfolio/website of Bridget Lai",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen p-6 md:p-8 ">
        <header className="mb-12">
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

