import React from 'react'
import HeroBanner from './HeroBanner'
import Banking from './Banking'
import Walmart from './Walmart'
import Testimonial from './Testimonial'
import Stacks from './Stacks'
import AboutOne from './aboutOne'
import JoinToday from './JoinToday'

const HomeMain = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blueish to-whitish'>
        <HeroBanner />
        <Banking />
        <Walmart />
        <Testimonial />
      </div>
      <div className=' bg-blackish'>
        <Stacks />
        <AboutOne />
        <JoinToday />
      </div>
    </>
  ) 
}

export default HomeMain