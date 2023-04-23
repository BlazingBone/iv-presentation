import React from 'react';

type QuestionOneProps = {
    setAnswer: any;
};

const QuestionOne:React.FC<QuestionOneProps> = ({setAnswer}) => {

    return(
        <>
        <h3 className='text-3xl'>
                    Was ist "Margin" und wie viele Margin-Attribute gibt es?
                </h3>

                <div className='mt-[20vh] flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:justify-evenly'>
                    <div>
                        <button onClick={() => setAnswer("Außenabstand und 4")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            Außenabstand und 4
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setAnswer("Innenhabstand und 3")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            Innenhabstand und 3
                        </button>
                    </div>
                </div>
                <div className='lg:justify-evenly flex-col lg:flex-row items-center flex space-y-4 lg:space-y-0 mt-5 lg:mt-[30px]'>
                    <div>
                        <button onClick={() => setAnswer("Außenabstand und 7")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            Außenabstand und 7
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setAnswer("Innenabstand und 2")} className='w-[200px] text-white h-[50px] bg-purple-500 hover:bg-purple-800 rounded-lg'>
                            Innenabstand und 2
                        </button>
                    </div> 
                </div>
        </>
    )
}
export default QuestionOne;