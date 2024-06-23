import Image from 'next/image'
import React from 'react'
import arrow from '../../../../public/images/careers/arrow.svg'

const Lists = () => {

    const department = ['Engineering', 'Risk', 'Product', 'People', 'Marketing', 'Customer Operations', 'Data', 'Legal & Compliance']

    const details = [
        {
            id: 1,
            department: 'Engineering',
            post: 'Staff Site Reliability Engineer',
            location: 'Banglore {Hybrid}',
        },
        {
            id: 2,
            department: 'Engineering',
            post: 'Platform Engineer',
            location: 'United States {Remote}',
        },
        {
            id: 3,
            department: 'Engineering',
            post: 'Site Reliability Engineer',
            location: 'United States {Remote}',
        },
        {
            id: 4,
            department: 'Engineering',
            post: 'Staff + site Reliability Engineer',
            location: 'United States {Remote}',
        },
        {
            id: 5,
            department: 'Engineering',
            post: 'Staff + Application Security Engineer',
            location: 'Banglore {Hybrid}',
        },
        {
            id: 6,
            department: 'Risk',
            post: 'Risk Implementation Engineer',
            location: 'Banglore {Hybrid}',
        },
        {
            id: 7,
            department: 'Product',
            post: 'People Analytics',
            location: 'United States {Remote}',
        },
        {
            id: 8,
            department: 'Engineering',
            post: 'Staff + Platform Engineer',
            location: 'United States {Remote}',
        },
        {
            id: 9,
            department: 'Marketing',
            post: 'Product Marketing Manager',
            location: 'United States {Remote}',
        },
        {
            id: 10,
            department: 'Legal & Compliance',
            post: 'Compliance Manager, Marketing',
            location: 'United States {Remote}',
        },
        {
            id: 11,
            department: 'Engineering',
            post: 'Staff + Engineer (Backend)',
            location: 'Banglore {Hybrid}',
        },
        {
            id: 12,
            department: 'Customer Operations',
            post: 'Fraud Operation Associate',
            location: 'Delhi NCR {Hybrid}',
        },
        {
            id: 13,
            department: 'Engineering',
            post: 'Site Reliability Engineer Manager',
            location: 'Banglore {Hybrid}',
        },
        {
            id: 14,
            department: 'Engineering',
            post: 'Staff + Data Engineer',
            location: 'United States {Remote}',
        },
        {
            id: 15,
            department: 'Engineering',
            post: 'Software Engineer (Backend)',
            location: 'Banglore {Hybrid}',
        },
    ]

    return (
        <div className='3xl:px-[29vw] xl:px-[17vw] sm:px-[10vw] px-[5vw] bg-blackish text-whitish py-[44px] lg:py-[120px]'>
            <div className='w-fit mx-auto text-center mb-8'>
                <div className='text-blueish font-neoOne sm:text-[48px] text-[35px] leading-[1em] pb-4 lg:pb-6'>Find your One today</div>
                <div className='text-[20px] leading-[1.5em]'>Filter by department</div>
            </div>
            <div>
                <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center gap-2 md:gap-4'>
                    {department.map((values) => (
                        <div className="">
                            <button className="text-[16px] text-white md:text-blueish md:bg-blackish  hover:text-blueish md:hover:text-blackish md:hover:bg-blueish  md:border-2 md:border-blueish rounded-full text-left md:text-center w-fit font-semibold md:py-3 md:w-[284px] md:min-w-[284px] md:font-medium duration-700">{values}</button>
                        </div>
                    ))}
                </div>
                <div className='text-[16px] leading-[1.5em] w-fit mx-auto underline pt-6'>Reset filter</div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-6 pt-12 max-w-[1440px] md:mx-auto'>
                {details.map((value, index) => (
                    <div key={index} className="bg-blueish hover:bg-whitish text-blackish max-w-[385px] md:max-w-none md:min-w-0 md:w-auto p-8 rounded-3xl my-0 flex flex-col justify-between min-h-[265px] duration-700 cursor-pointer">
                        <div>
                            <p className="text-[16px] font-semibold leading-[24px]">{value.department}</p>
                            <h3 className="text-[24px] font-neoOne font-semibold leading-[110%] mt-4 mb-2">{value.post}</h3>
                            <p className="">{value.location}</p>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <p className="underline text-[16px] font-medium leading-6">learn more and apply</p>
                            <Image src={arrow} alt="Arrow" loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lists