import Buttons from '@/components/Buttons'
import MainPage from '@/components/MainPage'
import SecondPage from '@/components/SecondPage'
import ThirdPage from '@/components/ThirdPage'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#311664d3] text-white' >
      <MainPage />
      <SecondPage />
      <ThirdPage />
      <Buttons />
    </main>
  )
}
