import Image from 'next/image'
import React from 'react'
import cont3Img from '../../../../public/images/careers/cont3Img.svg'

const Content3 = () => {
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blueish text-blackish py-[10%] flex md:flex-row flex-col-reverse h-full items-center justify-between'>
            <Image src={cont3Img} alt='Content 2 Image' className='md:w-[50%]' />
            <div className='lg:w-[500px] lg:mb-0 mb-10'>
                <div className='font-neoOne sm:text-[48px] text-[35px] leading-[1em] pb-4 lg:pb-6'>Spend time with us</div>
                <div className='text-[20px] leading-[1.5em]'>We welcome everyone, and value different backgrounds and cultures and varied work experiences. We want to hear about you!</div>
            </div>
        </div>
    )
}

export default Content3