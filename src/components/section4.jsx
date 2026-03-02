import React from 'react'
import { BsTelegram } from 'react-icons/bs'

export default function Section4() {
    return (
        <div className='flex flex-col items-center max-w-7xl pb-[38px] m-auto pt-[50px] border border-[#FFFFFF12]  rounded-[34px]  bg-gradient-to-b from-white/5 to-white/10 '>
            <h1 className='font-bold text-[42px] mb-[13px]  leading-[100%] tracking-[0%] text-center text-[#FFFFFF]'>
                Subscribe to get the Latest News
            </h1>
            <p className='text-[#FFFFFF] font-normal mb-[29px] text-[16px] leading-[30px] tracking-[0%] text-center'>
                We recommended you to subscribe to our newspaper,drop your email below to get daily update about us
            </p>
            <div className='relative'>
            <input className='w-[860px] h-[80px] outline-none px-11 font-normal text-[18px] leading-[30px] tracking-[0%] rounded-[70px] text-white shadow-[10px_24px_54px_0px_#00000012] bg-gradient-to-b from-white/5 to-white/10' placeholder='Enter your email addres' type="text"/>
            <div className='absolute w-[196px] h-[60px] rounded-[70px] bg-gradient-to-r from-blue-600 to-pink-500 right-[10px] top-[10px] flex items-center justify-center gap-2 font-medium text-[20px] leading-[30px] tracking-[0%]  text-white cursor-pointer'><BsTelegram/> Subscribe</div>
            </div>

        </div>
    )
}
