import { Inter } from 'next/font/google'
import LoginBtn from '../components/login-btn'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-center items-center p-24 ${inter.className}`}
    >
      <LoginBtn />
    </main>
  )
}
