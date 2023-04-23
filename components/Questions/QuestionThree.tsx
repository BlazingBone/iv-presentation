import React from 'react';

type QuestionThreeProps = {
    setAnswer: any;
};

const QuestionThree:React.FC<QuestionThreeProps> = ({setAnswer}) => {
    
    return (
        <>
                <h3 className='text-3xl'>
                    Welches CSS Attribut bestimmt den Umrandungsstil eines Elementes?
                </h3>

                <div className='mt-[20vh] flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:justify-evenly'>
                    <div>
                        <button onClick={() => setAnswer("border-width")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            border-width
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setAnswer("border-color")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            border-color
                        </button>
                    </div>
                </div>
                <div className='lg:justify-evenly flex-col lg:flex-row items-center flex space-y-4 lg:space-y-0 mt-5 lg:mt-[30px]'>
                    <div>
                        <button onClick={() => setAnswer("border-style")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            border-style
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setAnswer("border-range")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            border-range
                        </button>
                    </div> 
                </div>
        </>
    )
}
export default QuestionThree;