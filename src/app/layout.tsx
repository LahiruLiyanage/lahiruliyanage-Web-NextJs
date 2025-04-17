import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Lahiru Liyanage - Software Engineer',
    description: 'Personal portfolio of Lahiru Liyanage, Software Engineer',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {children}
                <Analytics />
            </main>
            <Footer />
        </div>
        </body>
        </html>
    )
}