// Packages:
import { Inter } from 'next/font/google'

// Typescript:
import type { AppProps } from 'next/app'

// Styles:
import '@/styles/globals.css'

// Constants:
const inter = Inter({ subsets: ['latin'] })

// Components:
import Navbar from '@/components/primary/Navbar'

// Functions:
const App = ({ Component, pageProps }: AppProps) => (
  <main className={inter.className}>
    <Navbar />
    <Component {...pageProps} />
  </main>
)

// Exports:
export default App
