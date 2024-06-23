import Image from 'next/image'
import React from 'react'
import heroImg from '../../../../public/images/careers/heroImg.svg'

const HeroBanner = () => {
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blueish text-blackish'>
            <div className="text-xl font-semibold leading-normal pt-6 pb-3 w-full border-b-2 border-blackish">Careers</div>
            <div className="lg:text-[64px] sm:text-[45px] text-[35px] font-bold font-neoOne leading-[110%] pt-10 sm:pb-[32px] pb-[20px]">Become one of the team</div>
            <div className='sm:text-[40px] text-[30px] leading-[135%]'>We’re on a mission to help people achieve financial progress.</div>
            <button className="duration-700 rounded-[30px] bg-blackish text-white hover:bg-whitish hover:text-blackish flex justify-center items-center text-base font-bold mt-6 px-20 py-4">Join Us</button>
            <Image src={heroImg} alt='Hero Image' loading="lazy" className='w-full lg:max-w-none max-h-[618px] object-contain mx-auto' />
        </div>
    )
}

export default HeroBanner