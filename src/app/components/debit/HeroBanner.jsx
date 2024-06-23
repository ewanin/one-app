import Image from 'next/image'
import React from 'react'
import heroImg from '../../../../public/images/debit/heroImg.svg'

const HeroBanner = () => {
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blueish text-blackish'>
            <div className="text-xl font-semibold leading-normal pt-6 pb-3 w-full border-b-2 border-blackish">Debit Rewards</div>
            <div className="lg:text-[64px] sm:text-[45px] text-[35px] font-bold font-neoOne leading-[110%] pt-10 pb-[32px]">Earn up to 5% cash back on select brands, including 3% at Walmart.</div>
            <Image src={heroImg} alt='Hero Image' loading="lazy" className='w-full lg:max-w-none max-h-[618px] object-contain mx-auto' />
        </div>
    )
}

export default HeroBanner