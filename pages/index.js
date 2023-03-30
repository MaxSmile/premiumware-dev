
import Header from '@/componenets/Header'
import Contacts from '@/sections/Contacts'
import Hello from '@/sections/Hello'
import Hero from '@/sections/Hero'
import Portfolio from '@/sections/Portfolio'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <Hero/>
    <Portfolio/>
    <Hello />
    <Contacts />
     
    </>
  )
}
