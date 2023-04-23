import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type ResultsProps = {
    answers: {
        answer1: string,
        answer2: string, 
        answer3: string, 
        answer4: string, 
        answer5: string
    },
    reset: any
};

const Results:React.FC<ResultsProps> = ({answers, reset}) => {
    
    const router = useRouter();

    return (
        <div className='space-y-3 text-xl lg:text-2xl'>
            <div className='lg:flex items-center'>
                <p>Frage 1:   Antwort = {answers.answer1}</p>
                <div className={`ml-3 w-5 h-5 rounded-full ${answers.answer1 === "Außenabstand und 4" ? "bg-green-500" : "bg-red-600"}`}/>
            </div>
            <div className='lg:flex items-center'>
                <p>Frage 2:   Antwort = {answers.answer2}</p>
                <div className={`ml-3 w-5 h-5 rounded-full ${answers.answer2 === "Innenabstand und 4" ? "bg-green-500" : "bg-red-600"}`}/>
            </div>
            <div className='lg:flex items-center'>
                <p>Frage 3:   Antwort = {answers.answer3}</p>
                <div className={`ml-3 w-5 h-5 rounded-full ${answers.answer3 === "border-style" ? "bg-green-500" : "bg-red-600"}`}/>
            </div>
            <div className='lg:flex items-center'>
                <p>Frage 4:   Antwort = {answers.answer4}</p>
                <div className={`ml-3 w-5 h-5 rounded-full ${answers.answer4 === "border-box und content-box" ? "bg-green-500" : "bg-red-600"}`}/>
            </div>
            <div className='lg:flex items-center'>
                <p>Frage 5:   Antwort = {answers.answer5}</p>
                <div className={`ml-3 w-5 h-5 rounded-full ${answers.answer5 === "min-width" ? "bg-green-500" : "bg-red-600"}`}/>
            </div>
            
            <div className='flex w-full justify-end space-x-2'>
                <div className='text-white'>
                    <button onClick={reset} className=' w-[100px] lg:w-[200px] h-[50px] bg-cyan-400 rounded-lg hover:bg-cyan-500'>
                        Reset
                    </button>
                </div>

                <div className='text-white'>
                    <button onClick={() => router.push("/")} className=' w-[100px] lg:w-[200px] h-[50px] bg-purple-400 rounded-lg hover:bg-purple-500'>
                        Home
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Results;