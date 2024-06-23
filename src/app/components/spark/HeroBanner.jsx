import Image from 'next/image'
import React from 'react'
import heroImg from '../../../../public/images/spark/heroImg.avif'

const HeroBanner = () => {
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-gradient-to-b from-blueish to-whitish text-blackish lg:flex lg:justify-stretch lg:items-end items-center pt-[30px] md:pt-12'>
            <div className='w-full lg:max-w-none pb-[30px] md:pb-8'>
                <div className='uppercase pb-[9px] text-[15px] md:text-[16px] leading-[110%] font-neoOne font-bold -tracking-tighter'>MOBILE BANKING</div>
                <div className='text-[35px] md:text-[56px] leading-[110%] font-neoOne font-bold pb-6'>Get Spark Driver<sup className=' text-[0.5em]'>TM</sup> trip earnings instantly</div>
                <div className=' text-[#002F49] text-[18px] md:text-[22px] lg:text-[26px] leading-[130%] tracking-[-0.02em] pb-6'>Why wait a week? Access your trip earnings instantly when you bank through One. Set One as your primary earnings method today.</div>
                <button className="duration-700 rounded-[30px] bg-blackish text-white hover:bg-whitish hover:text-blackish flex justify-center items-center text-base font-bold mt-6 sm:px-32 px-20 py-4">Get Started</button>
                <div className='mt-8 font-semibold text-[12px] leading-[135%] tracking-tight'>
                    <div>One is a financial technology company, not a bank.</div>
                    <div>Banking services provided by Coastal Community Bank, Member FDIC.</div>
                </div>
            </div>
            <Image src={heroImg} alt='Hero Imgae' loading="lazy" className='h-[100vw] sm:h-auto max-h-[400px] lg:max-h-[550px] w-full max-w-[340px] lg:w-[450px] lg:max-w-none object-contain mx-auto mt-4 md:mt-6 lg:mt-0' />
        </div>
    )
}

export default HeroBanner