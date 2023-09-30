"use client"

import "./globals.css"
import HeaderComponent from "@/components/Header"
import FooterComponent from "@/components/Footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="layout">
        <header>{<HeaderComponent />}</header>
        <main className="main">{children}</main>
        <footer>{<FooterComponent />}</footer>
      </body>
    </html>
  )
}