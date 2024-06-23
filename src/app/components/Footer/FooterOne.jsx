import React from 'react'
import Image from 'next/image'
import qr from '../../../../public/images/footer/qr.avif';
import facebook from '../../../../public/images/footer/facebook.svg';
import instagram from '../../../../public/images/footer/instagram.svg';
import x from '../../../../public/images/footer/x.svg';
import linkedin from '../../../../public/images/footer/linkedin.svg';
import Link from 'next/link';

const FooterOne = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-y-[58.5px] justify-between border-y-[1px] border-blueish mx-[3vw] 3xl:px-[22vw] xl:px-[7vw] lg:px-[5vw] px-[2vw] py-[48px]'>
            <div className="hidden sm:flex justify-between">
                <div className="flex-1">
                    <div className="max-w-[307px] hidden sm:block col-span-2">
                        <div className="text-blueish text-[32px] font-bold font-neoOne leading-[110%] mb-8">Join the millions of customers banking through One.</div>
                        <div className="bg-whitish rounded-[11.27px] flex flex-row items-center w-[200px] justify-between p-2">
                            <div className="flex justify-center flex-grow items-center gap-4">
                                <div className="text-blackish text-[12px] font-bold leading-[13.2px] w-[66px] text-center">Download app and get started</div>
                                <Image src={qr} alt='QR Code' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end h-fit mt-7 lg:hidden flex-1">
                    <div className="flex flex-row w-full max-w-[162px] justify-between ">
                        <Image src={facebook} alt='Facebook Icon' />
                        <Image src={instagram} alt='Instagram Icon' />
                        <Image src={x} alt='X Icon' />
                        <Image src={linkedin} alt='Linkedin Icon' />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:px-7 justify-between sm:flex-row w-auto gap-6 sm:gap-9">
                <div className="flex flex-col w-full max-w-[220px] sm:max-w-[140px] lg:max-w-[184px] xl:w-[184px] pb-[2px] gap-1 md:gap-2">
                    <div className="pb-[2px] font-semibold font-neoOne text-blueish leading-[150%] text-base sm:text-sm md:text-base">Explore</div>
                    <div className="flex flex-col xl:gap-4 sm:gap-2 gap-1">
                        <Link href="/debit-rewards">Debit Rewards</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/spark-driver">One for the Spark Driver™ app</Link>
                        <div>Help Center</div>
                    </div>
                </div>

                {/* <div className="flex flex-col w-full max-w-[220px] sm:max-w-[140px] lg:max-w-[184px] xl:w-[184px] pb-[2px] gap-1 md:gap-2">
                    <div className="pb-[2px] font-semibold font-neoOne text-blueish leading-[150%] text-base sm:text-sm md:text-base">Help Center</div>
                    <div className="flex flex-col xl:gap-4 sm:gap-2 gap-1">
                        <div>Getting started </div>
                        <div>Adding money to your account</div>
                        <div>Account and profile</div>
                        <div>Rewards and bonuses</div>
                        <div>Spending</div>
                        <div>Saving with One</div>
                        <div>Making payments and transfers</div>
                        <div>Privacy and security</div>
                        <div>General information</div>
                    </div>
                </div> */}

                <div className="flex flex-col w-full max-w-[220px] sm:max-w-[140px] lg:max-w-[184px] xl:w-[184px] pb-[2px] gap-1 md:gap-2">
                    <div className="pb-[2px] font-semibold font-neoOne text-blueish leading-[150%] text-base sm:text-sm md:text-base">Legal</div>
                    <div className="flex flex-col xl:gap-4 sm:gap-2 gap-1">
                        <div>Terms of service</div>
                        <div>Your privacy choices</div>
                        <div>Privacy policies</div>
                        <div>E-Sign agreement</div>
                        <div>Deposit account agreement</div>
                        <div>Account rates and fees</div>
                        <div>Promotions terms and conditions</div>
                        <div>One Pay cash back deal terms</div>
                        <div>Consumer report and SSA authorization</div>
                        <div>Cookie policy</div>
                        <div>Licenses</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="pb-[2px] font-semibold font-neoOne text-blueish leading-[150%] text-base sm:text-sm md:text-base">Contact Us</div>
                    <div className='h-full flex flex-col justify-between'>
                        <div className="mt-1 md:mt-2 mb-12 sm:mb-0 text-sm sm:text-[12px] md:text-sm leading-[150%]">
                            <div className="font-semibold">Customer Service</div>
                            <div className="text-blueish hover:underline transition-all duration-700 ">(855) 830-6200</div>
                            <div>9AM - 9PM ET</div>
                            <div>7 days a week</div>
                            <div>Chat available in app 24/7</div>
                            <div className="font-semibold mt-6">Press inquiries</div>
                            <div className="text-blueish hover:underline transition-all duration-700 ease-out-expo">press@one.app</div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="flex flex-row w-full max-w-[162px] justify-between gap-3 ">
                                <Image src={facebook} alt='Facebook Icon' />
                                <Image src={instagram} alt='Instagram Icon' />
                                <Image src={x} alt='X Icon' />
                                <Image src={linkedin} alt='Linkedin Icon' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FooterOne