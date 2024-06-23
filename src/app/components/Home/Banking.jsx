'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import mobileBank from '../../../../public/images/home/mobileBank.avif';
import creditBuilder from '../../../../public/images/home/creditBuilder.avif';
import saving from '../../../../public/images/home/saving.svg';
import paid from '../../../../public/images/home/paid.svg';
import fees from '../../../../public/images/home/fees.svg';
import earn from '../../../../public/images/home/earn.svg';
import search from '../../../../public/images/home/search.svg';
import zero from '../../../../public/images/home/zero.svg';
import progress from '../../../../public/images/home/progress.svg';
import tick from '../../../../public/images/home/tick.svg';

const Banking = () => {
    const [activeTab, setActiveTab] = useState('Mobile Banking');

    const tabs = [
        { name: 'Mobile Banking', icon: mobileBank },
        { name: 'Credit Builder', icon: creditBuilder }
    ];

    const tabContents = {
        'Mobile Banking': {
            mainHeading: 'MOBILE BANKING',
            subHeading: 'Banking for the better',
            buttonText: 'Join One',
            data: [
                { photo: earn, heading: 'Earn up to 5% cash back', subheading: 'On select brands.' },
                { photo: saving, heading: '5.00% APY on Savings', subheading: 'With eligible deposits.' },
                { photo: paid, heading: 'Get paid up to 2 days early', subheading: 'With direct deposit.' },
                { photo: fees, heading: 'No monthly fees', subheading: 'Or minimum balances.' }
            ]
        },
        'Credit Builder': {
            mainHeading: 'CREDIT BUILDER',
            subHeading: 'Build your credit with zero fees*',
            buttonText: 'Get Started',
            data: [
                { photo: search, heading: 'No credit check or score required' },
                { photo: zero, heading: 'Zero interest, zero stress' },
                { photo: progress, heading: 'Easily track your progress' },
                { photo: tick, heading: 'Your credit score at your fingertips' }
            ]
        }
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw]'>
            <div className='text-blakish bg-whitish md:p-[60px] sm:p-[40px] p-[20px] w-full rounded-3xl'>
                <div className="relative w-full max-w-[412px] h-[51px] mx-auto flex justify-between items-center bg-blackish text-white rounded-[30px] px-1 font-bold text-[16px] leading-[95%]">
                    <div className={`absolute h-[calc(100%-8px)] rounded-[30px] sm:w-[49%] w-[48.5%] bg-blueish transition-all duration-300 ease-in-out ${activeTab === 'Mobile Banking' ? 'translate-x-0' : 'translate-x-full'}`}></div>
                    {tabs.map(tab => (
                        <button key={tab.name} onClick={() => handleTabClick(tab.name)} className={`relative flex items-center justify-center rounded-[30px] w-1/2 font-neoOne h-full transition-all duration-300 ease-in-out ${activeTab === tab.name ? 'text-blackish' : 'text-whitish'}`}>{tab.name}</button>
                    ))}
                </div>

                <main>
                    {tabs.map(tab => (
                        <div key={tab.name} style={{ display: activeTab === tab.name ? 'block' : 'none' }}>
                            <div className='lg:flex gap-4 py-12'>
                                <div className=''>
                                    <div className='text-[16px] md:text-[24px] leading-[110%] uppercase font-neoOne font-bold'>{tabContents[tab.name].mainHeading}</div>
                                    <div className='py-6 font-neo font-bold xl:text-[52px] sm:text-[42px] text-[35px] tracking-[-0.01em] leading-[110%]'>{tabContents[tab.name].subHeading}</div>
                                    <div className='sm:text-[24px] text-[18px] leading-[153%]'>{
                                        tab.name === 'Mobile Banking' ?
                                            'Debit Rewards, early pay, high-yield Savings, and no monthly fees.' :
                                            'Set aside just $1 a month to build your credit history, with $500+ in monthly eligible direct deposits.'
                                    }</div>
                                    <button className="duration-700 rounded-[30px] flex justify-center items-center bg-blueish text-black hover:bg-blackish hover:text-whitish h-[44px] w-[166px] mt-[40px] text-base font-bold  font-neoOne">{tabContents[tab.name].buttonText}</button>
                                </div>
                                <div className="w-full lg:max-w-[530px] h-[345px] sm:h-[432px] flex justify-center bg-[#aaddfc] rounded-[19px] lg:mt-0 mt-10">
                                    <Image src={tab.icon} alt={tab.name} className='h-full w-auto' />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 lg:gap-y-[60px] sm:gap-y-[40px] gap-y-[40px] md:grid-cols-2 gap-x-[96px]'>
                                {tabContents[tab.name].data.map((value, index) => (
                                    <div key={index}>
                                        <Image src={value.photo} alt='Icon' className='h-[96px] sm:h-[120px] w-auto' />
                                        <div className='font-bold font-neoOne text-[20px] md:text-[32px] leading-[110%] tracking-[-0.01em] sm:pt-6 pt-3'>{value.heading}</div>
                                        {value.subheading && <div className="text-[16px] sm:text-[20px] leading-[135%] pt-2 lg:text-[24px] tracking-[-0.01em]">{value.subheading}</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default Banking;
