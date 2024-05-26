"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './BurgerCard';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };



const PopularBurger = () => {
  return (
    <div className='pt-[3rem] pb-[3rem]'>
        <h1 className='heading'>Our Popular <span className='text-red-600'>Burgers</span></h1>

        <div>
            <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass='items'
            showDots={false}
            >
                {/* Burger Card */}
                <BurgerCard
                title = "Beefy Burger"
                image='/images/b1.png'
                reviews='6'
                price='10.30$'
                />
                <BurgerCard
                title = "Loaded Burger"
                image='/images/b2.png'
                reviews='6'
                price='10.30$'
                />
                <BurgerCard
                title = "Chicken Cheese Burger"
                image='/images/b3.png'
                reviews='6'
                price='10.30$'
                />
                <BurgerCard
                title = "Classic Burger"
                image='/images/b4.png'
                reviews='6'
                price='10.30$'
                />
                <BurgerCard
                title = "Double Fatty Burger"
                image='/images/b5.png'
                reviews='6'
                price='10.30$'
                />
                <BurgerCard
                title = "Chicken Tripple Burger"
                image='/images/b6.png'
                reviews='6'
                price='10.30$'
                />
                <BurgerCard
                title = "Beef salad Burger"
                image='/images/b7.png'
                reviews='6'
                price='10.30$'
                />
                <BurgerCard
                title = "Cheesy Chicken Burger"
                image='/images/b8.png'
                reviews='6'
                price='10.30$'
                />
                <BurgerCard
                title = "Mouth Watering Burger"
                image='/images/b9.png'
                reviews='6'
                price='10.30$'
                />
                
            </Carousel>
        </div>
    </div>
  )
}

export default PopularBurger