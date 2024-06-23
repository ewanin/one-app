'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import plus from '../../../../public/images/debit/plus.svg';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        { title: '#Community-Black', subtitle: 'Community-Black aims to provide a safe and inclusive space for Black employees to connect, network, and support each other. We leverage the knowledge and expertise of our Community members in the creation of processes and products at the company. We can also contribute to One’s diversity, equity, and inclusion (DEI) initiatives by highlighting our experiences, cultures, and successes, which can help encourage learning, growth, and understanding on a company-wide level.' },
        { title: '#Community-Parents', subtitle: 'Community-Parents was founded to support and build up parents, with a focus on what it means to be a working parent.' },
        { title: '#Community-Women', subtitle: 'Community-Women at One was formed to help provide women and allies the opportunity to make valuable business contacts, hear advice from peers and experts, and share and build knowledge and experiences.' },
        { title: '#Community-Pride', subtitle: 'Community-Pride is a safe space dedicated to those who associate themselves with the LGBTQ+ community, plus its allies, to come together.' },
        { title: '#Community-Asian', subtitle: 'Community-Asian aims to represent all Asian cultures from within the continent and bring similar people and allies together to connect, learn, and share cultures with one another.' },
        { title: '#Community-LatinX', subtitle: 'Community-LatinX at One focuses on Latinx culture, experiences, and perspectives, and is committed to creating a more inclusive workplace.' },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blackish text-whitish flex flex-col lg:flex-row py-[44px] lg:py-[120px] gap-[8.5%]'>
            <div className='lg:w-[390px]'>
                <div className='font-neoOne sm:text-[48px] text-[35px] leading-[1em] pb-4 lg:pb-6 text-blueish'>#Communities</div>
                <div className='text-[20px] leading-[1.5em]'>Check out our #Communities, groups that celebrate important parts of our lives and identities. These are hubs of connection and education — and a great way to meet colleagues across departments. Don’t see what you’re looking for? Start your own!</div>
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
    );
};

export default Faq;
