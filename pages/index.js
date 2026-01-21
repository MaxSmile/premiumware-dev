import Contacts from '@/componenets/Contacts'
import Hello from '@/componenets/Hello'
import Hero from '@/componenets/Hero'
import Portfolio from '@/componenets/Portfolio'
import Services from '@/componenets/Services'


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Hello />
      <Contacts />
    </>
  )
}
