import React from 'react'
import Hero from './hero/Hero'
import Feature from './features/Feature'
import PopularBurger from './popularBurger/PopularBurger'
import Delivery from './delivery/Delivery'
import Team from './team/Team'
import Reservation from './reservation/Reservation'
import NewsLetter from './newsLetter/NewsLetter'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Feature/>
      <PopularBurger/>
      <Delivery/>
      <Team/>
      <Reservation/>
      <NewsLetter/>
    </div>
  )
}

export default Home