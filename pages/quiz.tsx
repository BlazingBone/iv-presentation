import QuestionFive from '@/components/Questions/QuestionFive';
import QuestionOne from '@/components/Questions/QuestionOne';
import QuestionThree from '@/components/Questions/QuestionThree';
import QuestionTwo from '@/components/Questions/QuestionTwo';
import QuesitonFour from '@/components/Questions/QuestonFour';
import Results from '@/components/Questions/Results';
import React, { useState } from 'react';

type quizProps = {
    
};

const quiz:React.FC<quizProps> = () => {
    
    const [question, setQuestion] = useState(1);
    const [answers,setAnswers] = useState({answer1: "", answer2: "", answer3: "", answer4: "", answer5: ""})

    const setAnswer = (answer: string) => {
        if(question === 1){
            setAnswers(prevValue => ({
                ...prevValue,
                answer1: answer
            }));
        } else if (question === 2){
            setAnswers(prevValue => ({
                ...prevValue,
                answer2: answer
            }));   
        } else if (question === 3){
            setAnswers(prevValue => ({
                ...prevValue,
                answer3: answer
            }));   
        } else if (question === 4){
            setAnswers(prevValue => ({
                ...prevValue,
                answer4: answer
            }));   
        } else if (question === 5){
            setAnswers(prevValue => ({
                ...prevValue,
                answer5: answer
            }));   
        };

        setQuestion(prevValue => prevValue + 1);
    };

    const resetQuiz = () => {
        setAnswers(prevValue => ({
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: "",
        }));
        setQuestion(1);
    }

    return (
    <div className='w-full h-screen bg-[#311664d3] items-center justify-center flex'>
        <div className='bg-white rounded-lg drop-shadow-lg  lg:w-[700px] text-2xl lg:h-[600px]'>
            <h1 className='text-5xl w-full text-center mt-2'>Quiz</h1>
            <p className='ml-2'>{question < 6 ? `Frage ${question}/5` : "Ergebnis"}</p>
            <div className='p-4'>
                {question === 1 ? (
                    <QuestionOne setAnswer={setAnswer} />
                ) : question === 2 ? (
                    <QuestionTwo setAnswer={setAnswer} />
                ) : question === 3 ? (
                    <QuestionThree setAnswer={setAnswer} />
                ) : question === 4 ? (
                    <QuesitonFour setAnswer={setAnswer} />
                ) : question === 5 ? (
                    <QuestionFive setAnswer={setAnswer} />
                ) :  (
                    <Results answers={answers} reset={resetQuiz} />
                )}
            </div>
        </div>
    </div>
    )
}
export default quiz;