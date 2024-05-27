import React from 'react'

const NewsLetter = () => {
    return (
        <div className='pt-[5rem] pb-[5rem]'>
            <div className='text-center'>
                <h1 className='text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase'>
                    join for hot offers</h1>
                <p className='text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta deserunt, ipsum alias ipsam nam fugit odit molestias laboriosam dolor nemo.</p>
                <div className='flex items-center space-x-2 mt-[3rem] justify-center'>
                    {/* input */}
                    <input type="email" placeholder='Email address' className='bg-gray-400 px-5 py-4 w-[40%] outline-none placeholder:text-black rounded-lg' />

                    {/* subcribe button */}
                    <button className='bg-green-700 hover:bg-green-900 px-8 py-4 transition-all duration-200 rounded-md text-white font-bold '>
                        Subcribe
                        </button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter