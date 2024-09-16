// Packages:
import { Inter } from 'next/font/google'

// Typescript:
import type { AppProps } from 'next/app'

// Styles:
import '@/styles/globals.css'

// Constants:
const inter = Inter({ subsets: ['latin'] })

// Functions:
const App = ({ Component, pageProps }: AppProps) => (
  <main className={inter.className}>
    <Component {...pageProps} />
  </main>
)

// Exports:
export default App
