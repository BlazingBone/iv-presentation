import Image from 'next/image';
import React from 'react';

type waffelProps = {
    
};

const Waffel:React.FC<waffelProps> = () => {
    
    return (
        <div className='w-full h-screen bg-[#311664d3]'>
            <div className=''>
                <Image className='object-contain' src={"/images/Bild9.png"} fill alt="" />
            </div>
        </div>
    )
}
export default Waffel;