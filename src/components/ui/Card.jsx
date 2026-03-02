import React from 'react'
import { GrFormNextLink } from "react-icons/gr";

export default function Card() {
    return (
        <div className='p-[24px] flex flex-col items-center w-[270px] sm:w-[320px] md:w-[370px] rounded-[34px] 
                        bg-[linear-gradient(97.12deg,rgba(255,255,255,0.08)_-3.52%,rgba(255,255,255,0.07)_100.35%)] 
                        shadow-[0px_22px_18px_0px_#0000000D]'>
            <div className='flex justify-center items-center mt-[30px] mb-[19px] w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] md:w-[74px] md:h-[74px] rounded-full 
                            bg-gradient-to-b from-[#8A7FD9] to-[#402F8F]'>
                <img src="/svg2.svg" alt="Icon" />
            </div>
            <h1 className='text-[20px] sm:text-[22px] md:text-[24px] font-medium mb-[14px] md:mb-[17px] text-white text-center'>Order Management</h1>
            <p className='text-[#FFFFFF] text-[14px] sm:text-[15px] md:text-[16px] mb-[20px] md:mb-[24px] text-center'>
                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
            <a className='flex items-center text-white gap-1 mb-[6px]' href="">
                Learn more <GrFormNextLink />
            </a>
        </div>
    )
}