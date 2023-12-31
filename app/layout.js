import './globals.css'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Provider from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Provider>
            <ToasterContext />
            <Navbar/>
              <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3'>
                {children}
              </main>
            <Footer/>
          </Provider>
        </body>
    </html>
  )
}
