import Image from 'next/image'
import React from 'react'

const MainPage = () => {
  return (
    <div className=''>
        <div className='flex justify-between'>
            <h1 className=' text-4xl lg:text-9xl p-10 lg:p-20 font-bold'>
                BOXMODELL <br/>
                CSS
            </h1>
            <div className='hidden lg:flex'>
                <Image src={"/images/Bild1.png"} height={200} width={300} alt="guy at pc"/>
            </div>
        </div>
        <div className='w-flll bg-[#3ebdce] py-3'>
            <h2 className='text-4xl ml-20'>Was war nochmal CSS?</h2>
        </div>
        <div className='p-20 w-[80%]  lg:flex justify-between'>
            <div>
                <Image src={"/images/Bild2.png"} height={200} width={300} alt="pc" />
            </div>
            <ul className='text-2xl lg:text-4xl'>
                <li>- CSS = Cascading Style Sheet</li>
                <li>- StyleSheet-Sprache</li>
                <li>- Gestaltung des HTML Dokuments (Farben etc.)</li>
                <li>- eine der 3 Kernsprachen des „World Wide Webs“</li>
                <li>- veröffentlicht 1994 von CERN</li>
                <li>- heutzutage auf der „dritten Stufe“ CSS3</li>
                <li>- eingesetzt via Tags, Klassen- und Id-Attributen</li>
            </ul>
        </div>
    </div>
  )
}

export default MainPage