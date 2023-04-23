import React from 'react';

type QuestionFiveProps = {
    setAnswer: any;
};

const QuestionFive:React.FC<QuestionFiveProps> = ({setAnswer}) => {
    
    return (
        <>
            <h3 className='text-3xl'>
                Welches Attribut legt die mindest Breite fest?
            </h3>

            <div className='mt-[20vh] flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:justify-evenly'>
                <div>
                    <button onClick={() => setAnswer("min-height")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                        min-height
                    </button>
                </div>
                <div>
                    <button onClick={() => setAnswer("max-height")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                        max-height
                    </button>
                </div>
            </div>
            <div className='lg:justify-evenly flex-col lg:flex-row items-center flex space-y-4 lg:space-y-0 mt-5 lg:mt-[30px]'>
                <div>
                    <button onClick={() => setAnswer("min-width")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                        min-width
                    </button>
                </div>
                <div>
                    <button onClick={() => setAnswer("max-width")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                        max-width
                    </button>
                </div> 
            </div>
        </>
    )
}
export default QuestionFive;