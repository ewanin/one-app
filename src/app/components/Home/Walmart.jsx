import React from 'react'

import cart from '../../../../public/images/home/cart.svg'
import mobile from '../../../../public/images/home/mobile.svg'
import Image from 'next/image'

const Walmart = () => {

    const data = [
        {
            photo: cart,
            subheading: 'MOBILE BANKING',
            heading: '3% cash back at Walmart',
        },
        {
            photo: mobile,
            subheading: 'MOBILE BANKING',
            heading: 'Add or take out cash at Walmart',
        },
    ]

    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] lg:py-24 py-12 text-blackish'>
            <div className=' font-bold font-neoOne text-center xl:text-[52px] sm:text-[42px] text-[35px] tracking-[-0.01em] leading-[110%] pb-12'>No better way to shop at Walmart</div>
            <div className='flex md:flex-row flex-col gap-10 justify-between'>
                {data.map(value => (
                    <div className='z-10 relative md:w-[450px] h-auto rounded-3xl px-[25px] pt-[60px] bg-whitish sm:px-12 md:px-8 flex flex-col justify-between'>
                        <div className="">
                            <div className="text-[18px] font-neoOne font-bold uppercase leading-[110%] mb-6">{value.subheading}</div>
                            <div className="text-[32px] font-neoOne font-bold leading-[110%] tracking-[-0.01em] mb-2 sm:text-[40px]">{value.heading}</div>
                        </div>
                        <div className="w-full flex justify-center pb-[60px]">
                            <Image src={value.photo} alt='Photos' className='w-full max-w-[300px] mx-auto' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Walmart