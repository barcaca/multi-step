import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import '../styles/globals.css'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  authors: [{ name: 'Luan Barcaça', url: '' }],
  category: 'design',
  creator: 'Luan Barcaça',
  title: 'Multi Step Form',
  description: 'Multi Step Form',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
    'Design',
    'Frontend',
    'Developer',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className="h-screen min-h-screen scroll-smooth bg-[#dceaff] antialiased lg:flex lg:items-center lg:justify-center">
        {children}
      </body>
    </html>
  )
}
