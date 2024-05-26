import React from 'react'
import Hero from './hero/Hero'
import Feature from './features/Feature'
import PopularBurger from './popularBurger/PopularBurger'
import Delivery from './delivery/Delivery'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Feature/>
      <PopularBurger/>
      <Delivery/>
    </div>
  )
}

export default Home