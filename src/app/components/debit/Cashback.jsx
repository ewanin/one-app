import Image from 'next/image'
import React from 'react'
import reawrdIcon1 from '../../../../public/images/debit/rewardIcon1.svg'
import reawrdIcon2 from '../../../../public/images/debit/rewardIcon2.svg'
import reawrdIcon3 from '../../../../public/images/debit/rewardIcon3.svg'
import reawrdIcon4 from '../../../../public/images/debit/rewardIcon4.svg'
import reawrdIcon5 from '../../../../public/images/debit/rewardIcon5.svg'

const Cashback = () => {
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blackish text-whitish sm:py-[120px] py-[60px] flex lg:flex-row flex-col lg:items-center justify-between'>
            <div className='lg:w-[390px] lg:mb-0 mb-10'>
                <div className=' font-neoOne sm:text-[48px] text-[35px] leading-[1em] pb-4 lg:pb-6'>Earn up to 5% cash back on select brands</div>
                <div className='text-[20px] leading-[1.5em]'>From groceries to theaters, restaurants to ride shares, get rewards on select brands.</div>
            </div>
            <div>
                <div className='text-[25px] font-bold leading-[30px] font-neoOne'>Debit Rewards</div>
                <div className='text-[#D0D0D0] text-[18px] font-normal leading-[22px] pb-[10px]'>Cash back, deals, and more.</div>
                <div className='w-fit bg-[#1C1C1E] rounded-[20px] flex flex-row sm:flex-nowrap flex-wrap justify-evenly items-center gap-2 p-2'>
                    <Image src={reawrdIcon1} alt='Reward Icon 1' />
                    <Image src={reawrdIcon2} alt='Reward Icon 2' />
                    <Image src={reawrdIcon3} alt='Reward Icon 3' />
                    <Image src={reawrdIcon4} alt='Reward Icon 4' />
                    <Image src={reawrdIcon5} alt='Reward Icon 5' />
                </div>
            </div>
        </div>
    )
}

export default Cashback