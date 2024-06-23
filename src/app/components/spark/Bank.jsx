import React from 'react'

const Bank = () => {
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] lg:py-24 py-12 bg-blackish text-[#122733]'>
            <div className='relative lg:py-[107px] sm:py-[67px] py-[37px] sm:px-6 px-3 rounded-3xl text-center flex flex-col justify-center items-center overflow-hidden bg-[linear-gradient(159deg,_#5AC1FF_13.04%,_#F9F9F9_100.43%)]'>
                <div className="relative flex flex-col items-center">
                    <div className="font-bold font-neoOne text-[40px] md:text-[56px] leading-[110%] tracking-[-0.01em] pb-[24px]">Bank through One and get trip earnings instantly</div>
                    <div className=" text-[24px] leading-[150%] pb-[48px] w-[80%]">Go to the Spark Driver Portal and set One as your primary earnings method today.</div>
                    <button className="duration-700 rounded-[30px] bg-blackish text-white hover:bg-whitish hover:text-blackish flex justify-center items-center text-base font-bold sm:px-32 px-20 py-4">Get Started</button>
                </div>
            </div>
            <div className='hidden md:block mt-10 text-[16px] leading-[150%] text-whitish text-center'>
                <div>One is a financial technology company, not a bank.</div>
                <div>Banking services provided by Coastal Community Bank, Member FDIC.</div>
            </div>
        </div>
    )
}

export default Bank