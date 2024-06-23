'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import plus from '../../../../public/images/debit/plus.svg'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        { title: 'How do I know what purchases are eligible for cash back?', subtitle: 'You can see your current rewards available on your Debit Rewards page in the app. This can be accessed via the Debit tab or the One-ups tab. Brands and rewards rotate, so check back to see what’s new!' },
        { title: 'Where does my cash back go?', subtitle: 'Once your purchase is complete, the cash back you earned will go to your Savings. To see how much you have earned in total, track your progress on your Debit Rewards page in the app.' },
        { title: 'What is a One-tap reward?', subtitle: 'These are cash back deals which are available when you pay with One at a rotating selection of top brands. To redeem a One-tap reward, you must activate in the One app by tapping the reward module. You can find them listed under Debit Rewards in your Debit tab. Only one One-tap reward may be active at a time. The One-tap reward must be active at the time of purchase, and can be switched after the purchase has been made.' },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blackish text-whitish flex lg:items-centr flex-col lg:flex-row py-[44px] lg:py-[120px] gap-[8.5%]'>
            <div className='lg:w-[390px]'>
                <div className='font-neoOne sm:text-[48px] text-[35px] leading-[1em] pb-4 lg:pb-6 text-blueish'>Got questions?</div>
                <div className='text-[20px] leading-[1.5em]'>We’ve got answers. Check out our Help Center to learn more.</div>
                <button className="duration-700 rounded-[30px] bg-blueish text-blackish hover:bg-whitish flex justify-center items-center text-base font-bold mt-6 px-8 py-4">Visit Help Center</button>
            </div>

            <div className='w-full lg:mt-0 mt-10'>
                {data.map((value, index) => (
                    <div key={index} className='w-full border-blueish md:border-b-2 border-b-[1px] py-[1rem] md:py-[29px] flex items-cener justify-between'>
                        <div className='block w-[90%] cursor-pointer'
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className=' py-[0.5rem] px-0 transition-color duration-700 ease-out sm:text-[1rem] lg:text-[20px] text-[1rem] leading-[150%] text-whitish hover:text-blueish'>{value.title}</div>
                            {activeIndex === index && (
                                <div className='w-full sm:text-[1rem] lg:text-[20px] text-[1rem] leading-[150%] text-whitish opacity-80 mt-2'>{value.subtitle}</div>
                            )}
                        </div>
                        <div
                            className={`bg-blueish h-fit cursor-pointer text-blackish rounded-full ${activeIndex === index ? 'transform rotate-45' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <Image src={plus} alt='Plus' className='sm:w-12 w-8' />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Faq