import React from 'react'
import Card2 from './ui/Card2'

export default function Section3() {
    return (
        <div className='max-w-7xl mx-auto mt-[107px] mb-[120px] px-4 md:px-0'>
            <div>
                <h1 className='mb-10 md:mb-[40px] text-[#FFFFFF] text-[32px] md:text-[42px] text-center'>
                    Met Our Team
                </h1>
                <p className='text-[14px] md:text-[16px] text-[#FFFFFF] text-center mb-6 md:mb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br />
                    accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                </p>
            </div>
            <div className='flex flex-wrap justify-center gap-4 md:gap-7.5'>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
            </div>
        </div>
    )
}