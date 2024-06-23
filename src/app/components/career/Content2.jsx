import Image from 'next/image'
import React from 'react'
import cont2Img from '../../../../public/images/careers/cont2Img.svg'

const Content2 = () => {
  return (
      <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blackish text-whitish py-[10%] flex md:flex-row flex-col h-full items-center justify-between'>
          <div className='lg:w-[500px] lg:mb-0 mb-10'>
              <div className='text-blueish font-neoOne sm:text-[48px] text-[35px] leading-[1em] pb-4 lg:pb-6'>Save on your commute</div>
              <div className='text-[20px] leading-[1.5em]'>One will fit your lifestyle wherever you are located with a remote-first workplace, meaningful benefits, and competitive compensation packages.</div>
          </div>
          <Image src={cont2Img} alt='Content 2 Image' className='md:w-[50%]' />
      </div>
  )
}

export default Content2