import Image from 'next/image'
import React from 'react'
import cont2Img from '../../../../public/images/spark/cont2Img.avif'

const Content2 = () => {
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blackish text-whitish flex md:flex-row flex-col items-center md:gap-5'>
            <div className=' text-blueish'>
                <div className='font-neoOne pt-6 text-[32px] lg:text-[48px] leading-[110%] pb-4 lg:pb-6'>Plus, enjoy more banking benefits</div>
                <ul className='lg:text-2xl font-semibold flex flex-col lg:gap-6 gap-4 list-disc ml-5 '>
                    <li>3% cash back at Walmart<span className=' text-whitish font-normal'>, up to $50 every year, with eligible deposits</span></li>
                    <li>Take out cash for free at Walmart <span className=' text-whitish font-normal'>with your One card</span></li>
                    <li>No monthly fees<span className=' text-whitish font-normal'>or minimum balances</span></li>
                </ul>
            </div>
            <Image src={cont2Img} alt='Content 2 Image' className='md:w-[50%]' />
        </div>
    )
}

export default Content2