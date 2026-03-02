import React from 'react'
import { GrFormNextLink } from "react-icons/gr";

export default function Card2() {
    return (
        <div className='p-[24px] flex flex-col items-center w-[220px] sm:w-[240px] md:w-[270px] rounded-[34px] 
                        bg-[linear-gradient(97.12deg,rgba(255,255,255,0.08)_-3.52%,rgba(255,255,255,0.07)_100.35%)] 
                        shadow-[0px_22px_18px_0px_#0000000D]'>
            <div className='flex justify-center items-center mt-[30px] mb-[10px] w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] md:w-[74px] md:h-[74px] rounded-full 
                            bg-gradient-to-b from-[#8A7FD9] to-[#402F8F]'>
                <img className='rounded-full w-full h-full object-cover'
                    src="https://www.wilsoncenter.org/sites/default/files/styles/480x480/public/media/images/person/james-person-1.jpg"
                    alt="Team Member" />
            </div>
            <h1 className='text-[20px] sm:text-[22px] md:text-[24px] font-medium mb-[7px] text-white'>Sunny Khan</h1>
            <p className='text-[#FFFFFF] text-[14px] sm:text-[15px] mb-[11px]'>Executive officer</p>
            <div className='flex gap-2 sm:gap-2.5 md:gap-3'>
                <img src="/Group.svg" alt="Social" />
                <img src="/linkedin 1.svg" alt="LinkedIn" />
                <img src="/twitter 1.svg" alt="Twitter" />
                <img src="/Frame.svg" alt="Other" />
            </div>
        </div>
    )
}