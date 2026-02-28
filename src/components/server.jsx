import React from 'react'
import Card from './ui/Card'

export default function Server() {
    return (
        <div className='mt-[61px]'>
            <div>
                <h1 className='mb-[30px] text-[#FFFFFF] text-[42px] text-center'>
                    Our Service
                </h1>
                <p className='text-[16px] text-[#FFFFFF] text-center mb-10'>
                    We turn information into actionable insights We work to understand your issues <br/>
                    and are driven to ask better questions in the pursuit of making work.
                </p>
            </div>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='hidden md:flex justify-center gap-[30px] mb-10'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                <div className='hidden md:flex justify-center gap-[30px]'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6 mb-10'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}