import Image from 'next/image'
import React from 'react'
import cont1Img from '../../../../public/images/spark/cont1Img.avif'

const Content1 = () => {
  return (
      <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blackish text-whitish flex md:flex-row flex-col-reverse items-center md:gap-10'>
        <Image src={cont1Img} alt='Content 1 Image' className='md:w-[50%]' />
        <div className=' text-blueish'>
              <div className='font-neoOne pt-6 text-[32px] lg:text-[48px] leading-[110%] md:-ml-5 pb-4 lg:pb-6'>Trip earnings arrive faster with One</div>
              <ul className='lg:text-2xl font-semibold flex flex-col lg:gap-6 gap-4 list-disc md:ml-0 ml-5'>
                  <li>Trip earnings <span className=' text-whitish font-normal'>arrive instantly after you complete a trip</span></li>
                  <li>Tips <span className=' text-whitish font-normal'>arrive 24-48 hours after a trip</span></li>
                  <li>Incentives<span className=' text-whitish font-normal'>arrive weekly on Tuesdays</span></li>
              </ul>
        </div>
      </div>
  )
}

export default Content1