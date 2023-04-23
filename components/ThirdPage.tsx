import Image from 'next/image'
import React, { useState } from 'react'

const ThirdPage = () => {

    const [mtop, setMTop] = useState("");
    const [mleft, setMLeft] = useState("");
    const [mBottom, setMBottom] = useState("");
    const [mRight, setMRIght] = useState("");

    const [borderWidth, setBorderWidth] = useState("");
    const [borderColor, setBorderColor] = useState("");
    const [borderStyle, setBorderStyle] = useState("");

    const [paddingTop, setPaddingTop] = useState("");
    const [paddingLeft, setPaddingLeft] = useState("");
    const [paddingRight, setPaddingRight] = useState("");
    const [paddingBottom, setPaddingBottom] = useState("");

    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const [boxSizing, setBoxSizing] = useState("");

  return (
    <div className='w-full mt-[10vh] '>
        <div className='w-flll bg-[#3ebdce] py-3'>
            <h2 className='text-4xl ml-20'>Wie sieht die Umsetzung aus?</h2>
        </div>

        <div className='flex mt-10 p-3 lg:p-10'>
            <div className='w-[30%] lg:inline-block hidden'>
                <h2 className='text-5xl ml-4'>Margin</h2>
                <div className='relative w-[450px] h-[400px]'>
                    <Image className='object-contain' src={"/images/Bild4.png"} fill alt="" />
                </div>
            </div>

            <div className='w-full lg:w-[70%] flex justify-center items-center flex-col p-5 border-cyan-400 border-2 bg-gray-700'>
                <div className=' w-[200px] h-[200px] lg:w-[600px] lg:h-[400px] bg-white'>
                    <div 
                        style={{
                            marginLeft: mleft,
                            marginRight : mRight,
                            marginTop: mtop,
                            marginBottom: mBottom,
                        }}
                        className={`bg-cyan-400 w-[100px] h-[100px]`} 
                    />
                </div>
                <p className='text-2xl mb-5'>Probier Margin doch mal am Türkisen Block aus:</p>
                <div className='w-[80%] text-2xl space-y-4'>
                    <div className='lg:flex justify-between'>
                        <div className='space-x-2'>
                            <label>
                                margin-top:
                            </label>
                            <input value={mtop} onChange={(e  : any) => setMTop(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                        <div className='space-x-2'>
                            <label>
                                margin-right:
                            </label>
                            <input value={mRight} onChange={(e : any) => setMRIght(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                    </div>
                    <div className='lg:flex justify-between'>
                        <div className='space-x-2'>
                            <label>
                                margin-bottom:
                            </label>
                            <input value={mBottom} onChange={(e : any) => setMBottom(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                        <div className='space-x-2'>
                            <label>
                                margin-left:
                            </label>
                            <input value={mleft} onChange={(e : any) => setMLeft(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex mt-10 p-3 lg:p-10'>
            <div className='w-[30%] lg:inline-block hidden'>
                <h2 className='text-5xl ml-4'>Border</h2>
                <div className='relative w-[350px] h-[700px]'>
                    <Image className='object-contain' src={"/images/Bild5.png"} fill alt="" />
                </div>
            </div>

            <div className='w-full lg::w-[70%] flex justify-center items-center flex-col p-5 border-cyan-400 border-2 bg-gray-700'>
                <div
                    style={{
                        borderWidth: borderWidth,
                        borderStyle: borderStyle,
                        borderColor: borderColor
                    }} 
                    className=' w-[200px] h-[200px] md:w-[600px] md:h-[400px] bg-purple-400'
                >
                </div>
                <p className='text-2xl mb-5'>Probier Border doch mal am Lilanen Block aus:</p>
                <div className='w-[80%] text-2xl space-y-4'>
                    <div className='lg:flex justify-between'>
                        <div className='space-x-2'>
                            <label>
                                border-color:
                            </label>
                            <input value={borderColor} onChange={(e  : any) => setBorderColor(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                        <div className='space-x-2'>
                            <label>
                                border-width:
                            </label>
                            <input value={borderWidth} onChange={(e : any) => setBorderWidth(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='space-x-2'>
                            <label>
                                border-style:
                            </label>
                            <input value={borderStyle} onChange={(e : any) => setBorderStyle(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex mt-10 p-3 lg:p-10'>
            <div className='w-[30%] lg:inline-block hidden'>
                <h2 className='text-5xl ml-4'>Padding</h2>
                <div className='relative w-[450px] h-[400px]'>
                    <Image className='object-contain' src={"/images/Bild6.png"} fill alt="" />
                </div>
            </div>

            <div className='w-full lg:w-[70%] flex justify-center items-center flex-col p-5 border-cyan-400 border-2 bg-gray-700'>
                <div 
                    className=' w-[200px] h-[200px] lg:w-[600px] lg:h-[400px] bg-white'
                    style={{
                        paddingTop: paddingTop,
                        paddingLeft: paddingLeft,
                        paddingRight: paddingRight,
                        paddingBottom: paddingBottom
                    }}
                >
                    <div className={`bg-purple-700 w-[100px] h-[100px]`} />
                </div>
                <p className='text-2xl mb-5'>Probier Padding doch mal am Violeten Block aus:</p>
                <div className='w-[80%] text-2xl space-y-4'>
                    <div className='lg:flex justify-between'>
                        <div className='space-x-2'>
                            <label>
                                padding-top:
                            </label>
                            <input value={paddingTop} onChange={(e  : any) => setPaddingTop(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                        <div className='space-x-2'>
                            <label>
                                padding-right:
                            </label>
                            <input value={paddingRight} onChange={(e : any) => setPaddingRight(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                    </div>
                    <div className='lg:flex justify-between'>
                        <div className='space-x-2'>
                            <label>
                                padding-bottom:
                            </label>
                            <input value={paddingBottom} onChange={(e : any) => setPaddingBottom(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                        <div className='space-x-2'>
                            <label>
                                padding-left:
                            </label>
                            <input value={paddingLeft} onChange={(e : any) => setPaddingLeft(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex mt-10 p-5 lg:p-10'>
            <div className='w-[30%] lg:inline-block hidden'>
                <h2 className='text-5xl ml-4'>Width/Height</h2>
                <div className='relative w-[450px] h-[400px]'>
                    <Image className='object-contain' src={"/images/Bild7.png"} fill alt="" />
                </div>
            </div>

            <div className='w-full lg:w-[70%] flex justify-center items-center flex-col p-5 border-cyan-400 border-2 bg-gray-700'>
                <div 
                    className=' w-[200px] h-[200px] lg:w-[600px] lg:h-[400px] bg-white'
                >
                    <div className='bg-emerald-400 w-[100px] h-[100px]'
                        style={{
                            height: height,
                            width: width
                        }}
                    >

                    </div>
                </div>
                <p className='text-2xl mb-5'>Probier Width/Height doch mal am Grünen Block aus:</p>
                <div className='w-[80%] text-2xl space-y-4'>
                    <div className='lg:flex justify-between'>
                        <div className='space-x-2'>
                            <label>
                                Height: 
                            </label>
                            <input value={height} onChange={(e  : any) => setHeight(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                        <div className='space-x-2'>
                            <label>
                                Width: 
                            </label>
                            <input value={width} onChange={(e : any) => setWidth(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex mt-10 p-5 lg:p-10'>
            <div className='w-[30%] lg:inline-block hidden'>
                <h2 className='text-5xl ml-4'>Box-Sizing</h2>
                <div className='relative w-[450px] h-[400px]'>
                    <Image className='object-contain' src={"/images/Bild8.png"} fill alt="" />
                </div>
            </div>

            <div className=' w-full lg:w-[70%] flex justify-center items-center flex-col p-5 border-cyan-400 border-2 bg-gray-700'>
                <div 
                    className=' w-[200px] h-[200px] lg:w-[600px] lg:h-[400px] bg-red-400 border-[5px] border-green-400'
                    style={{
                        boxSizing: boxSizing === "border-box" ? "border-box" : boxSizing === "content-box" ? "content-box" : undefined ,
                    }}
                >
                </div>
                <p className='text-2xl mb-5'>Probier Width/Height doch mal am Grünen Block aus:</p>
                <div className='w-[80%] text-2xl space-y-4'>
                    <div className='flex justify-between'>
                        <div className='space-x-2'>
                            <label>
                                box-sizing: 
                            </label>
                            <input value={boxSizing} onChange={(e  : any) => setBoxSizing(e.target.value)} placeholder='...' className='bg-transparent text-xl outline-none' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdPage