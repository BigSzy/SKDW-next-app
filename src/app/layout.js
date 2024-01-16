import { Overpass } from 'next/font/google'
import './styles/global.scss'
import Header from './components/Header'
import Footer from './components/Footer'

const overpass = Overpass({ subsets: ['latin'] })

export const metadata = {
  title: 'SKWD',
  description: 'Szymon Kaluza Web Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={overpass.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
