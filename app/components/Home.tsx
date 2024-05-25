import React from 'react'
import Hero from './hero/Hero'
import Feature from './features/Feature'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Feature/>
    </div>
  )
}

export default Home