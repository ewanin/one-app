import Image from 'next/image'
import React from 'react'
import coin1 from '../../../../public/images/careers/coin1.svg'
import coin2 from '../../../../public/images/careers/coin2.svg'
import coin3 from '../../../../public/images/careers/coin3.svg'
import coin4 from '../../../../public/images/careers/coin4.svg'
import coin5 from '../../../../public/images/careers/coin5.svg'
import coin6 from '../../../../public/images/careers/coin6.svg'

const Content1 = () => {
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-gradient-to-b from-[#121212] to-[#1d1e31] text-whitish relative flex flex-col h-full xl:py-[15%] py-[20%] items-center justify-center'>
            <div className='hidden sm:block'>
                <Image src={coin1} alt='Coin 1' className=' w-[6.5vw] max-w-[91px] top-[-5%] left-[35%]  absolute' />
                <Image src={coin2} alt='Coin 2' className=' w-[6.8vw] max-w-[102px] top-[10%] left-[30%]  absolute' />
                <Image src={coin3} alt='Coin 3' className=' w-[76px] sm:w-[7vw] max-w-[103px] top-[73%] left-[30%] sm:top-[18%] lg:top-[21%] sm:left-[40%] absolute' />
                <Image src={coin4} alt='Coin 4' className=' w-[6.8vw] max-w-[102px] top-[67%] left-[50%]  absolute' />
                <Image src={coin5} alt='Coin 5' className=' w-[76px] sm:w-[6.9vw] max-w-[101px] top-[85%] left-[56%] sm:top-[80%] sm:left-[56%] absolute' />
                <Image src={coin6} alt='Coin 6' className=' w-[75px] sm:w-[6.8vw] max-w-[102px] top-[8%] left-[53%] sm:top-[95%] sm:left-[45%] absolute' />
            </div>
            <div className='text-[32px] lg:text-[48px] leading-[110%] text-center'>
                <div className='text-whitish mb-[1.5rem] font-neoOne font-semibold sm:font-normal'>We’re here to help people save, spend, and grow their money – all in one place.</div>
                <div className='text-blueish'>It’s kind of our thing.</div>
            </div>
        </div>
    )
}

export default Content1