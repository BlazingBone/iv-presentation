import { useRouter } from 'next/router';
import React from 'react';

type ButtonsProps = {
    
};

const Buttons:React.FC<ButtonsProps> = () => {
    
    const router = useRouter();

    return (
        <div className='flex w-full space-y-3 lg:space-y-0 lg:items-baseline items-center justify-center space-x-3 flex-wrap  p-3 lg:justify-end'>
            <div className=''>
                <button onClick={() => router.push("/waffel")} className='w-[200px] h-[50px] bg-cyan-400 rounded-lg hover:bg-cyan-500'>
                    Secret Deal
                </button>
            </div>

            <div>
                <button onClick={() => router.push("https://youtu.be/dQw4w9WgXcQ")} className='w-[200px] h-[50px] bg-purple-400 rounded-lg hover:bg-purple-500'>
                    The Rules
                </button>
            </div>

            <div>
                <button onClick={() => router.push("/quiz")} className='w-[200px] h-[50px] bg-purple-700 hover:bg-purple-800 rounded-lg'>
                    Quiz
                </button>
            </div>
        </div>
    )
}
export default Buttons;