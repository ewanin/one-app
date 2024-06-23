import Image from 'next/image'
import React from 'react'
import mobile from '../../../../public/images/debit/mobile.avif'

const Mobile = () => {
  return (
    <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blackish text-whitish  py-12 sm:py-0 flex lg:flex-row flex-col-reverse lg:items-center lg:gap-28 gap-10'>
      <Image src={mobile} alt='Mobile' className='w-[390px]' />
      <div className='lg:w-[494px]'>
        <div className=' font-neoOne sm:text-[48px] text-[35px] leading-[1em] pb-4 lg:pb-6'>Earn 3% cash back at Walmart</div>
        <div className='text-[20px] leading-[1.5em]'>Up to $50 every year, with eligible deposits.</div>
      </div>
    </div>
  )
}

export default Mobile