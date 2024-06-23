import React from 'react'

const JoinToday = () => {
    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] lg:pb-24 pb-12'>
            <div className='relative lg:py-[107px] sm:py-[67px] py-[37px] sm:px-6 px-3 rounded-3xl text-center flex flex-col justify-center items-center overflow-hidden bg-[linear-gradient(159deg,_#5AC1FF_13.04%,_#F9F9F9_100.43%)]'>
                <div className="relative flex flex-col items-center">
                    <div className='font-bold font-neo text-[45px] sm:text-[56px] lg:text-[76px] xl:text-[96px] leading-[110%] tracking-[-0.01em] pb-4'>Join One today</div>
                    <div className="sm:text-[24px] text-[20px] leading-[150%] sm:pb-12 text_pretty">Debit Rewards, early pay, high-yield Savings.</div>
                    <div className='hidden sm:block'>
                        <div className="flex items-center h-[51px] w-[412px] justify-between text-sm xl:text-base relative z-20">
                            <input placeholder="Phone Number" className="pl-[25px] h-[51px] w-[412px] p-1 rounded-full bg-whitish" type="text" />
                            <div className="bg-blueish hover:bg-blackish hover:text-whitish cursor-pointer absolute right-[5px] text-base w-[200px] h-[calc(100%-10px)] font-neoOne font-medium rounded-full flex items-center justify-center shrink-0 transition-colors duration-500">Send Download Link</div>
                        </div>
                        <div className="3xl:text-[18px] text-[13px] tracking-tight pt-6">
                            <div>Enter your number to download the app and get started.</div>
                            <div>Messaging rates may apply.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinToday