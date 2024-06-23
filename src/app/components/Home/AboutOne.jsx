import React from 'react'
import Image from 'next/image'

import saveSmarter from '../../../../public/images/home/saveSmarter.avif'
import sendMoney from '../../../../public/images/home/sendMoney.avif'

const AboutOne = () => {

    const data = [
        {
            photo: saveSmarter,
            name: 'MOBILE BANKING',
            heading: 'Save smarter with Goals',
            subheading: 'Create up to 3 Goals to help you save.'
        },
        {
            photo: sendMoney,
            name: 'MOBILE BANKING',
            heading: 'Send money to anyone — easily',
            subheading: 'A quick and free way to move money.'
        },
    ]

    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] lg:py-8 py-4 text-whitish'>
            <div className=''>
                <div className='text-white text-center font-neoOne font-bold text-[40px] sm:text-[48px] tracking-tight leading-[110%]'>There's more to love about One</div>
                <div className='pt-12 flex flex-col lg:flex-row gap-8'>
                    {data.map(value => (
                        <div className='w-full pt-[60px] md:pt-[40px] px-6 md:px-[40px] bg-[linear-gradient(0deg,_#5AC1FF_-0.03%,_#DDF4FF_78.47%)] rounded-3xl flex flex-col justify-between'>
                            <div className='text-blackish'>
                                <div className="text-[18px] leading-[110%] uppercase font-bold font-neoOne pb-5">{value.name}</div>
                                <div className="font-bold font-neoOne xl:text-[52px] sm:text-[42px] text-[35px] leading-[110%] tracking-tight pb-5 ">{value.heading}</div>
                                <div className="text-[20px] leading-[150%] ">{value.subheading}</div>
                            </div>
                            <Image src={value.photo} alt='Photo' className='w-full max-w-[300px] mx-auto' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutOne