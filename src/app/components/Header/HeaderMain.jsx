'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Form from './Form';

// Import images using an alias for the public directory
import logo from '../../../../public/images/header/logo.svg';
import logoWhite from '../../../../public/images/header/logoWhite.svg';
import menu from '../../../../public/images/header/menu.svg';
import close from '../../../../public/images/header/close.svg';
import cart from '../../../../public/images/header/cart.svg';
import facebook from '../../../../public/images/footer/facebook.svg';
import instagram from '../../../../public/images/footer/instagram.svg';
import linkedin from '../../../../public/images/footer/linkedin.svg';
import x from '../../../../public/images/footer/x.svg';
import Link from 'next/link';

const HeaderMain = () => {

    // State to control the visibility of the pop-up and menu
    const [showPopup, setShowPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle menu and close pop-up
    const toggleMenuAndClosePopup = () => {
        setIsOpen(!isOpen);
        setShowPopup(false);
    };

    const handleJoinOneClick = () => {
        // Show the pop-up when "Join One" button is clicked
        setShowPopup(true);
    };

    return (
        <div className={`sticky top-0 z-50 block w-full h-fit ${isOpen ? 'bg-blackish' : 'bg-blueish'}`}>
            <div className={`3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] shadow-lg  z-10 w-full transition-transform duration-500 h-20 flex justify-between items-center`}>
                <div>
                    <Link href="/" className='cursor-pointer group relative bg-red-600'>
                        <Image src={isOpen ? logoWhite : logo} alt={isOpen ? 'Logo' : 'White Logo'} className='group-hover:invisible absolute' />
                        <Image src={isOpen ? logoWhite : logoWhite} alt={isOpen ? 'LogoWhite' : 'Logo'} className='group-hover:visible invisible' />
                    </Link>
                </div>

                <div className="flex flex-row gap-4">
                    <div className="hidden sm:flex gap-4 relative">
                        <div className="hidden md:flex items-center">
                            <div className={`text-base font-neoOne font-bold relative ${isOpen ? 'text-whitish' : 'text-blackish'} cursor-pointer  hover:underline hover:underline-offset-8 decoration-2`} onClick={handleJoinOneClick}>Sign In</div>
                        </div>
                        <button className={`rounded-[30px] flex justify-center items-center hover:${isOpen ? 'border-2' : ''} hover:${isOpen ? 'border-blueish' : ''} bg-${isOpen ? 'blueish' : 'blackish'} hover:bg-${isOpen ? 'blackish' : 'whitish'} text-${isOpen ? 'blackish' : 'whitish'} hover:text-${isOpen ? 'blueish' : 'blackish'} w-[157px] h-[45px] text-base font-bold  font-neoOne`} onClick={handleJoinOneClick}>Join One</button>
                    </div>

                    <div>
                        <Image src={isOpen ? close : menu} alt={isOpen ? 'Close' : 'Menu'} onClick={toggleMenuAndClosePopup} className='cursor-pointer' />
                    </div>
                </div>
            </div>

            {/* Pop-up component */}
            {showPopup && <Form setShowPopup={setShowPopup} />}


            {isOpen &&
                <div className=' 3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] pb-5 bg-blackish w-full '>
                    <div className="text-blueish leading-[110%] font-neoOne font-bold text-[28px] sm:text-[32px] mb-[34px] mt-[60px]">Join the millions of customers <br />banking through One.</div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 p-0 w-[100%] mb-[36px] gap-4'>
                        <div className='grid col-span-1 md:col-span-2 md:grid-cols-2 gap-4'>
                            {[
                                { title: 'Debit Rewards', subtitle: 'debit-rewards' },
                                { title: 'Careers', subtitle: 'careers' },
                                { title: 'Help Center', subtitle: 'spark-driver' },
                                { title: 'Legal', subtitle: 'debit-rewards' }
                            ].map((item, index) => (
                                <Link href={item.subtitle} key={index} className="relative group overflow-hidden border-blueish text-white hover:text-black hover:bg-blueish border-2 rounded-2xl flex justify-between items-center h-auto md:h-[131px] min-h-[80px] w-full first-letter:sm:min-w-[340px] py-[15px] px-[30px] transition-all duration-500 cursor-pointer">
                                    <div className="relative md:py-8 md:pr-2 md:pl-[2px]">
                                        <h3 className="font-bold font-neo text-[24px] leading-[110%] md:mt-0">{item.title}</h3>
                                    </div>
                                    <div className="text-blackish group-hover:text-blueish static w-[40px] h-[40px] md:group-hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" className="rounded-full bg-blueish group-hover:bg-blackish" viewBox="0 0 42 42" fill="none">
                                            <path d="M12.0844 22.4444L27.044 22.4444L20.9269 28.5328C20.6546 28.8038 20.5016 29.1714 20.5016 29.5547C20.5016 29.9381 20.6546 30.3057 20.9269 30.5767C21.1992 30.8477 21.5686 31 21.9537 31C22.3388 31 22.7081 30.8477 22.9804 30.5767L31.5755 22.0219C31.6101 21.9877 31.6428 21.9515 31.6734 21.9136C31.7048 21.8756 31.7339 21.8359 31.7605 21.7944C31.7868 21.7548 31.811 21.7138 31.8331 21.6717C31.8752 21.5947 31.9092 21.5136 31.9347 21.4297L31.9637 21.3178C31.9885 21.2137 32.0007 21.107 32 21C31.9993 20.9018 31.9896 20.8039 31.9709 20.7075L31.9347 20.5703C31.9099 20.4861 31.8759 20.405 31.8331 20.3283C31.811 20.2862 31.7868 20.2452 31.7605 20.2056C31.7339 20.1641 31.7048 20.1244 31.6734 20.0864C31.6428 20.0485 31.6101 20.0123 31.5755 19.9781L22.9805 11.4233C22.8456 11.2891 22.6855 11.1826 22.5094 11.11C22.3332 11.0374 22.1444 11 21.9537 11C21.763 11 21.5742 11.0374 21.398 11.11C21.2218 11.1826 21.0618 11.2891 20.9269 11.4233C20.7921 11.5575 20.6851 11.7168 20.6122 11.8922C20.5392 12.0675 20.5016 12.2555 20.5016 12.4453C20.5016 12.635 20.5392 12.823 20.6122 12.9983C20.6851 13.1737 20.7921 13.333 20.9269 13.4672L27.044 19.5556L12.0845 19.5555L11.9756 19.5555L11.4511 19.5555C11.0662 19.5555 10.6971 19.7077 10.4249 19.9786C10.1527 20.2495 9.99984 20.6169 9.99984 21C9.99984 21.3831 10.1527 21.7505 10.4249 22.0214C10.6971 22.2923 11.0662 22.4444 11.4511 22.4444L11.9756 22.4444L12.0844 22.4444Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="relative group overflow-hidden border-blueish text-white  hover:bg-blueish border-2 rounded-2xl flex flex-col h-full min-h-[80px] w-full py-[15px] px-[30px] transition-all duration-700 justify-between cursor-pointer">
                            <div className="relative group-hover:text-blackish">
                                <h3 className="font-bold font-neoOne text-[24px] leading-[110%] md:mt-0 mb-[6px]">Earn 3% cash back in store &amp; online</h3>
                                <p className="">at Walmart up to $50 a year, with eligible deposits.</p>
                            </div>
                            <div className="flex w-full items-start justify-between">
                                <h3 className="text-[16px] leading-[24px] font-bold font-neoOne rounded-full flex justify-center items-center px-[19px] py-2 mt-4 bg-[#21213C] shrink-0">Learn More</h3>
                                <Image src={cart} alt="Cart" loading="lazy" className="max-h-[150px] object-contain object-right xl:block hidden" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                        <p className="font-semibold leading-[135%] tracking-tight text-white text-[12px] mb-[16px]">
                            One is a financial technology company, not a bank.
                            <span className="block">Banking services provided by Coastal Community Bank, Member FDIC.</span>
                        </p>
                        <div className='flex flex-row w-full  max-w-[186px] gap-[30px] lg:justify-end '>
                            {[facebook, instagram, x, linkedin].map((item, index) => (
                                <div key={index} >
                                    <Image src={item} alt='Social Media Icons' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default HeaderMain;