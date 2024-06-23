import Image from 'next/image'
import React from 'react'

import heroImg from '../../../../public/images/home/heroImg.avif'

const HeroBanner = () => {
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw]'>
            <div className='lg:py-24 py-12 lg:flex items-center justify-between text-blakish w-fit'>
                <div className='flex flex-col 3xl:gap-20 xl:gap-32 lg:gap-20 gap-10 lg:w-[50%] sm:w-full w-[90vw]'>
                    <div className='flex flex-col sm:gap-8 gap-4'>
                        <div className=' font-neoOne font-bold xl:text-[52px] sm:text-[42px] text-[35px] text-blackish leading-[110%] tracking-[-.01em]'>Join the millions of customers banking through One</div>

                        <div className='flex flex-col gap-6 w-full'>
                            <div className="flex items-center h-[51px] sm:w-[412px] w-full justify-between text-sm xl:text-base relative z-20">
                                <input placeholder="Phone Number" className="pl-[25px] h-[51px] sm:w-[412px] w-full p-1 rounded-full bg-whitish" type="text" />
                                <div className="bg-blueish hover:bg-blackish hover:text-whitish cursor-pointer absolute right-[5px] text-base w-[200px] h-[calc(100%-10px)] font-neoOne font-medium rounded-full sm:flex hidden items-center justify-center shrink-0 transition-colors duration-500">Send Download Link</div>
                                <div className="bg-blueish hover:bg-blackish hover:text-whitish cursor-pointer absolute right-[5px] text-base w-[100px] h-[calc(100%-10px)] font-neoOne font-medium rounded-full sm:hidden flex items-center justify-center shrink-0 transition-colors duration-500">Send</div>
                            </div>

                            <div className='3xl:text-[18px] text-[13px] leading-[135%] tracking-tight w-fit'>
                                <div>Enter your number to download the app and get started.</div>
                                <div>Messaging rates may apply.</div>
                            </div>
                        </div>
                    </div>

                    <div className='font-semibold 3xl:text-[18px] text-[13px] leading-[135%] tracking-tight w-fit'>
                        <div>One is a financial technology company, not a bank.</div>
                        <div>Banking services provided by Coastal Community Bank, Member FDIC.</div>
                    </div>
                </div>
                <Image src={heroImg} alt='Hero Image' priority={true} className="lg:w-[50%] sm:w-full w-[90vw] object-contain lg:mt-0 mt-10 xl:-mr-16 -mr-12" />
            </div>
        </div>

    )
}

export default HeroBanner;