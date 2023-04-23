import Image from 'next/image'
import React from 'react'

const SecondPage = () => {
  return (
    <div className=' w-full mt-[10vh]'>
        <div className='w-flll bg-[#3ebdce] py-3'>
            <h2 className='text-4xl ml-20'>Worum geht es beim Boxmodell?</h2>
        </div>
        <div className='p-20 w-[80%] hidden lg:flex justify-between'>
            <div className='bg-cyan-400 border-purple-950 border-2 w-[700px] h-[500px] flex items-center flex-col justify-center p-5'>
            <p className='text-3xl  mb-4 ml-2'>Margin</p>
                <div className='bg-purple-400 border-purple-950 border-2 w-[650px] h-[500px] flex items-center flex-col justify-center'>
                    <p className='text-3xl  pb- ml-2 mb-6'>Border</p>
                    <div className='bg-purple-700 border-purple-950 border-2 w-[400px] h-[250px] flex items-center flex-col justify-center'>
                        <p className='text-3xl  mb-6 ml-2'>Padding</p>
                        <div className='bg-purple-900 w-[200px] border-purple-950 border-2 h-[100px] flex items-center flex-col justify-center'>
                            <p className='text-3xl mb-1'>Content</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[30%] space-y-10'>
                <div className='relative h-[250px] w-[300px]'>
                    <Image src={"/images/Bild2.png"} fill alt="pc" />
                    <div className='absolute h-[170px] rounded-lg w-[290px] flex items-center justify-center bg-cyan-400 bottom-0 top-1 left-1 right-0'>
                        <div className='h-[150px] w-[270px] bg-purple-400 flex items-center justify-center border-purple-950'>
                            <div className='h-[130px] w-[250px] bg-purple-700 flex items-center justify-center border-purple-950'>
                                <div className='h-[110px] w-[230px] bg-purple-900 border-purple-950'>
                                Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative h-[250px] w-[300px] ml-40'>
                    <Image src={"/images/Bild2.png"} fill alt="pc" />
                    <div className='absolute h-[170px] rounded-lg w-[290px] flex items-center justify-center bg-cyan-400 bottom-0 top-1 left-1 right-0'>
                        <div className='flex space-x-1'>
                            <div className='h-[150px] w-[135px] bg-purple-400 flex items-center justify-center border-purple-950'>
                                <div className='h-[130px] w-[125px] bg-purple-700 flex items-center justify-center border-purple-950'>
                                    <div className='h-[110px] w-[115px] bg-purple-900 border-purple-950'>
                                    Text Text Text Text Text Text Text Text Text Text Text Text 
                                    </div>
                                </div>
                            </div>
                            <div className='h-[150px] w-[135px] bg-purple-400 flex items-center justify-center border-purple-950'>
                                <div className='h-[130px] w-[125px] bg-purple-700 flex items-center justify-center border-purple-950'>
                                    <div className='h-[110px] w-[115px] bg-purple-900 border-purple-950'>
                                    Text Text Text Text Text Text Text Text Text Text Text Text
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-5 lg:p-20 flex items-center flex-wrap gap-5 justify-center ml-5'>
                <div className='bg-[#3ebdce] overflow-y-scroll lg:max-w-[500px] h-[300px] p-10 border-white border-[5px]'>
                    <h3 className='text-4xl'>
                        Margin:
                    </h3>
                    <ul className='text-3xl'>
                        <li>
                            - Außenabstand 
                        </li>
                        <li>
                        - Platz zwischen dem Element
                            und anderen Elementen auf
                            der selben Stufe
                        </li>
                    </ul>
                </div>
                <div className='bg-purple-400 overflow-y-scroll max-w-[500px] h-[300px] p-10 border-white border-[5px]'>
                    <h3 className='text-4xl'>
                        Border:
                    </h3>
                    <ul className='text-3xl'>
                        <li>
                        - Rahmen des Elementes,
                        welcher selbst gestaltet werden
                        kann
                        </li>
                        <li>
                        - kann in Höhe und Breite
                        einberechnet werden oder nicht
                        </li>
                    </ul>
                </div>
                <div className='bg-purple-700 overflow-y-scroll max-w-[500px] h-[300px] p-10 border-white border-[5px]'>
                    <h3 className='text-4xl'>
                        Padding:
                    </h3>
                    <ul className='text-3xl'>
                        <li>
                            - Innen Abstand 
                        </li>
                        <li>
                        - Kann auf 4 verschiedenen Seiten bestimmt werden
                        </li>
                    </ul>
                </div>
                <div className='bg-purple-900 overflow-y-scroll max-w-[500px] h-[300px] p-10 border-white border-[5px]'>
                    <h3 className='text-4xl'>
                        Content:
                    </h3>
                    <ul className='text-3xl'>
                        <li>
                            - Der eigentliche Inhalt des Elementes 
                        </li>
                        <li>
                        - Anspassung des Inhaltes kann je nach Art des Inhalts vaarieren
                        </li>
                    </ul>
                </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='relative h-[300px] w-[500px] lg:h-[800px] lg:w-[1200px]'>
                    <Image src={"/images/Bild3.png"} fill alt="" />
            </div>
        </div>
    </div>
  )
}

export default SecondPage