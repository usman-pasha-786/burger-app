import Image from 'next/image'
import React from 'react'
import image1 from '@/public/images/f1.jpg'
import image2 from '@/public/images/f2.jpg'
import image3 from '@/public/images/f3.jpg'

const Feature = () => {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            {/* Heading */}
            <h1 className='heading'>
                Burger made with <br /> Love and
                <span className='text-red-600'> Care</span>
            </h1>

            {/* Cards section */}
            <div className='w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>

                {/* 1st Card */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                        <Image src={image1} alt='burger image' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
                            Special Burger
                        </h1>
                        <p className='mt-[0.2rem] text-black text-center text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus officiis reiciendis quidem nam quia vero, neque dignissimos laudantium velit exercitationem.</p>
                    </div>
                </div>
                {/* 2nd Card */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                        <Image src={image3} alt='burger image' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
                            Chicken Burgers
                        </h1>
                        <p className='mt-[0.2rem] text-black text-center text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus officiis reiciendis quidem nam quia vero, neque dignissimos laudantium velit exercitationem.</p>
                    </div>
                </div>

                {/* 3rd Card */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                        <Image src={image2} alt='burger image' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
                            Your Openion is Important
                        </h1>
                        <p className='mt-[0.2rem] text-black text-center text-opacity-60'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus officiis reiciendis quidem nam quia vero, neque dignissimos laudantium velit exercitationem.</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Feature