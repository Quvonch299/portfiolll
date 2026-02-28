import React from 'react'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-0 mt-10">
      <div className="flex-1">
        <h2 className="font-bold text-[42px] md:text-[58px] leading-[60px] md:leading-[84px] tracking-[0.02em] bg-gradient-to-r from-[#2563EB] to-[#D946EF] bg-clip-text text-transparent">
          Virtual Reality <br /> Business Solutions
        </h2>

        <p className="text-[#E5E7EB] font-dm font-medium text-[14px] md:text-[15px] leading-[24px] md:leading-[30px] tracking-normal mt-6 mb-10">
          We have over 15 years experience in business consulting arena. We have over <br /> 
          15 years experience in business consulting arena and artificial intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[29px]">
          <button className="font-dm font-medium text-[16px] leading-none tracking-normal w-[135px] h-[61px] rounded-[6px] bg-gradient-to-r from-[#2563EB] to-[#D946EF] text-white">
            Join Us
          </button>

          <button className="flex gap-3 sm:gap-5 font-dm font-medium text-[16px] leading-none tracking-normal w-[151px] items-center text-white">
            <img src="/icon.svg" alt="icon" /> Watch video
          </button>
        </div>
      </div>
      <div className="flex-1 mb-8 md:mb-0">
        <img src="/sec.png" alt="Hero Illustration" className="w-full h-auto" />
      </div>
    </section>
  )
}