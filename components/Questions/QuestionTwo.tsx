import React from 'react';

type QuestionTwoProps = {
    setAnswer: any;
};

const QuestionTwo:React.FC<QuestionTwoProps> = ({setAnswer}) => {
    
    return (
    <>
        <h3 className='text-3xl'>
                    Was ist Padding und wie viele Padding-Attribute gibt es?
                </h3>

                <div className='mt-[20vh] flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:justify-evenly'>
                    <div>
                        <button onClick={() => setAnswer("Außenabstand und 7")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            Außenabstand und 7
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setAnswer("Höhe und 2")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            Höhe und 2
                        </button>
                    </div>
                </div>
                <div className='lg:justify-evenly flex-col lg:flex-row items-center flex space-y-4 lg:space-y-0 mt-5 lg:mt-[30px]'>
                    <div>
                        <button onClick={() => setAnswer("Breite und 4")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            Breite und 4
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setAnswer("Innenabstand und 4")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            Innenabstand und 4
                        </button>
                    </div> 
                </div>
    </>
    )
}
export default QuestionTwo;