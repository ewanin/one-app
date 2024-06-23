import React from 'react'
import Table from './Table'

const Stacks = () => {
    return (
        <div className=' text-whitish 3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] lg:py-24 py-12'>
            <div>
                <div className="mx-4 sm:mx-5 text-center font-neo font-bold text-[40px] tracking-[-0.01em] leading-[110%] text_balance">See how One stacks up</div>
                <div className="text-[24px] text-center leading-[150%] tracking-[-0.01em] pt-4">When it comes to Spending and Saving, we're the One raising the bar.</div>
            </div>
            <div>
                <Table />
            </div>
        </div>
    )
}

export default Stacks