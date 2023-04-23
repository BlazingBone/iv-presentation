import React from 'react';

type QuesitonFourProps = {
    setAnswer: any;
};

const QuesitonFour:React.FC<QuesitonFourProps> = ({setAnswer}) => {
    
    return (
        <>
            <h3 className='text-3xl'>
                    Was sind die beiden "box-sizing" Werte?
                </h3>

                <div className='mt-[20vh] flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:justify-evenly'>
                    <div>
                        <button onClick={() => setAnswer("content-box und box-width")} className='w-[200px] text-white h-[60px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            content-box und box-width
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setAnswer("border-box und content-box")} className='w-[200px] text-white h-[60px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            border-box und content-box
                        </button>
                    </div>
                </div>
                <div className='lg:justify-evenly flex-col lg:flex-row items-center flex space-y-4 lg:space-y-0 mt-5 lg:mt-[30px]'>
                    <div>
                        <button onClick={() => setAnswer("border-box und width-height")} className='w-[200px] text-white h-[60px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            border-box und width-height
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setAnswer("padding-margin und content-box")} className='w-[200px] text-white h-[60px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            padding-margin und content-box
                        </button>
                    </div> 
                </div>
        </>
    )
}
export default QuesitonFour;