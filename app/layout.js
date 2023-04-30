import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat} from 'next/font/google'

import Head from 'next/head'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: '서울대학교 기술나눔단 VESS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content='width-device-width ,initial-scale=1' />
        <link rel="icon" href='favicon.ico' />
      </Head>
      <body className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>{children}</body>
    </html>
  )
}
