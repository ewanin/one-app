import React from 'react'

import Image from 'next/image'
import star from '../../../../public/images/home/star.svg'

const Testimonial = () => {
    return (
        <div className='text-whitish 3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] lg:py-24 py-12 bg-blackish'>
            <div className='text-center'>
                <div className="text-blueish w-full font-bold font-neoOne xl:text-[52px] sm:text-[42px] text-[35px] text-center leading-[110%] tracking-[-0.01em] lg:pb-12 pb-8 ">Why drivers love One</div>
                <Image src={star} alt='Star' className='  mx-auto' />
                <div className="lg:text-[30px] sm:text-[24px] text-[18px] leading-[150%] lg:pt-12 pt-8 text_pretty line-clamp-4 sm:line-clamp-3 xl:line-clamp-2">
                    "I love this app. Gives me access to my money as soon as I'm done with my delivery. Love it, love it, love It."
                </div>
                <div className="font-bold font-neo uppercase text-[16px] leading-[110%] lg:pt-12 pt-8">APP STORE® REVIEW</div>
                <div className="flex justify-center h-12 lg:mt-12 mt-8  gap-6 lg:gap-8">
                    <button className="h-[49px]">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Previous" className="h-full w-auto">
                            <circle cx="24.5178" cy="24.5178" r="24.5178" transform="matrix(-1 0 0 1 50.0005 0.752686)" className="fill-[#D9D9D9]"></circle>
                            <path d="M24.7543 35.9971L27.1727 33.6078L20.8243 27.2815H35.6997V23.7703H20.8243L27.1727 17.4544L24.7543 15.0547L14.2466 25.5259L24.7543 35.9971Z" className="fill-[#CBCBCB]"></path>
                        </svg>
                    </button>
                    <button className="h-[49px]">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Next" className="h-full w-auto">
                            <circle cx="24.5178" cy="25.2705" r="24.5178" className="fill-[#5AC1FF]"></circle>
                            <path d="M26.2687 35.9971L23.8503 33.6078L30.1986 27.2815H15.3232V23.7703H30.1986L23.8503 17.4544L26.2687 15.0547L36.7763 25.5259L26.2687 35.9971Z" className="fill-[#121212]"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimonial