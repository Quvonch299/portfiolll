import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='max-w-7xl mx-auto mt-10 px-4 flex justify-between items-center'>
      <div>
        <img src="/Logo.svg" alt="Logo" className='h-8' />
      </div>
      <div className='hidden md:flex gap-[60px] items-center'>
        <a className='font-medium text-[14px] leading-[14px] tracking-[0%] text-white' href="">Home</a>
        <a className='font-medium text-[14px] leading-[14px] tracking-[0%] text-white' href="">About Us</a>
        <a className='font-medium text-[14px] leading-[14px] tracking-[0%] text-white' href="">Service</a>
        <a className='font-medium text-[14px] leading-[14px] tracking-[0%] text-white' href="">Pricing</a>
        <a className='font-medium text-[14px] leading-[14px] tracking-[0%] text-white' href="">Blog</a>
        <button className='w-[132px] h-[42px] rounded-[5px] font-medium text-[14px] leading-[14px] tracking-[0%] bg-gradient-to-r from-blue-600 to-pink-500 text-white'>
          Contact Us
        </button>
      </div>
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-[#0F172A] flex flex-col gap-4 p-4 md:hidden'>
          <a className='font-medium text-[14px] leading-[14px] tracking-[0%] text-white' href="">Home</a>
          <a className='font-medium text-[14px] leading-[14px] tracking-[0%] text-white' href="">About Us</a>
          <a className='font-medium text-[14px] leading-[14px] tracking-[0%] text-white' href="">Service</a>
          <a className='font-medium text-[14px] leading-[14px] tracking-[0%] text-white' href="">Pricing</a>
          <a className='font-medium text-[14px] leading-[14px] tracking-[0%] text-white' href="">Blog</a>
          <button className='w-full h-[42px] rounded-[5px] font-medium text-[14px] leading-[14px] tracking-[0%] bg-gradient-to-r from-blue-600 to-pink-500 text-white'>
            Contact Us
          </button>
        </div>
      )}
    </nav>
  )
}