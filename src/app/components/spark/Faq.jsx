'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import plus from '../../../../public/images/debit/plus.svg'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        { title: 'When do I get my Spark Driver trip earnings?', subtitle: 'Drivers who set One as their primary earnings method in the Spark Driver Portal can get trip earnings instantly after every trip.' },
        { title: 'Is there a fee to get my trip earnings instantly1 through One?', subtitle: "It's free to get your trip earnings instantly1 when you bank through One.Plus, there are no monthly fees or minimum balances with a One deposit account.'" },
        { title: 'How do I set my earnings method to One?', subtitle: 'Log in to the Spark Driver Portal and navigate to the Earnings page. Tap on “Manage earnings accounts,” then select One. From there, it’s quick to sign up for a One deposit account.Once approved, your primary earnings method will automatically be set to One.' },
        { title: 'When will I start to receive my Spark Driver trip earnings into One?', subtitle: 'After you select One as your primary earnings method: 1.For new drivers, your trip earnings will be deposited instantly1 into One after every trip. 2.For existing drivers who switch to One, trip earnings you make starting Monday of the following pay period will be deposited after every trip.' },
        { title: 'Where do I see my trip earnings in the One app?', subtitle: 'Your Spark Driver trip earnings will appear in the Debit section of your One app. If you are enrolled in Pay Autosave, that portion of your earnings will be deposited into your Savings.' },
        { title: 'Can I use One before I start earning through the Spark Driver app?', subtitle: 'Yes! Add money to use your One deposit account right away so you can start earning cash back, saving, and more.' },
        { title: 'Can I direct deposit other gig earnings into One?', subtitle: 'Yes, you can direct deposit income from other gigs into your One deposit account, not just Spark Driver trip earnings.' },
        { title: 'What are the benefits of using One?', subtitle: 'In addition to getting Spark Driver trip earnings instantly,1 you can use One as your primary banking app and enjoy Debit Rewards, early pay, high-yield Savings, and no monthly fees.' },
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

export default Faq;