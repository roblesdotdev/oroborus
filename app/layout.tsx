import { siteConfig } from '~/config/site'
import './globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Next.js 13 Template by Aldo R. Robles',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-canvas text-fg')}>
        {children}
      </body>
    </html>
  )
}
