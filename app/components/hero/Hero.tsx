"use client"
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Burger1 from '@/public/images/b1.png'
import Burger2 from '@/public/images/b2.png'
import { BiCycling } from 'react-icons/bi';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

// install react multi carousel
const Hero = () => {
  return (
    <Carousel
    additionalTransfrom={0}
    arrows={false}
    autoPlay={true}
    autoPlaySpeed={4000}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass='item'
    showDots={true}>

        {/* first hero slide and google/clip path generator / clippy css clip_path maker */}
        <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path'>
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
                {/* 1st image */}
                <Image src={Burger1} alt='burger image' className='hidden md:block'/>
                {/* information */}
                <div>
                    <h1 className='text-[40px] font-semibold text-yellow-400'>Fast Food Burger</h1>
                    <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>Best <br />Burgers</h1>
                    <p className='mt-[1rem] text-white text-opacity-70 text-[18px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsam? Assumenda in impedit saepe commodi adipisci quas suscipit eius cumque eum tempora, dolores optio temporibus.
                    </p>
                    <button className='bg-gray-500 text-white mt-[2rem] px-8 py-3 text-[16px] sm:text-[16px] transition-all duration-200 hover:bg-gray-700 flex items-center rounded-md space-x-2'>
            <span>
              <BiCycling className='w-[1.7rem] h-[1.7rem]'/>
            </span>
            <span className='font-bold'>Order Now</span>
          </button >
                </div>
            </div>
        </div>
        
        
        {/* 2nd slider */}
        <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 md:clip_path'>
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
                {/* 2nd image */}
                <Image src={Burger2} alt='burger image' className='hidden md:block'/>
                {/* information */}
                <div>
                    <h1 className='text-[40px] font-semibold text-yellow-400'>
                        Tasty Burger</h1>
                    <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>Top <br />Burgers</h1>
                    <p className='mt-[1rem] text-white text-opacity-70 text-[18px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsam? Assumenda in impedit saepe commodi adipisci quas suscipit eius cumque eum tempora, dolores optio temporibus.
                    </p>
                    <button className='bg-blue-500 text-white mt-[2rem] px-8 py-3 text-[16px] sm:text-[16px] transition-all duration-200 hover:bg-gray-700 flex items-center rounded-md space-x-2'>
            <span>
              <BiCycling className='w-[1.7rem] h-[1.7rem]'/>
            </span>
            <span className='font-bold'>Order Now</span>
          </button >
                </div>
            </div>
        </div>
    </Carousel>
  )
}

export default Hero