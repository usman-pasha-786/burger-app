import React from 'react'
import { GrRestaurant } from 'react-icons/gr'

const ReservationForm = () => {
  return (
    <div className='bg-green-700 p-6 rounded-lg'>
    <GrRestaurant className='w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto'/>
    <h1 className='text-center font-bold uppercase text-[30px] md:text-[40px] lg:text-[50px] mt-[0.5rem] text-white'>
        Reservation</h1>
        <p className='uppercase text-white text-[20px] md:text-[25px] font-semibold text-center'>Book your table</p>

            {/*inputs */}
            <div className='mt-[2rem]'>
                <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center w-[80%] mx-auto justify-between space-x-4'>
                    <select className='px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100'
                     name="people" id="people">
                      <option value="1" className='text-black'>1 people</option>
                      <option value="2" className='text-black'>2 people</option>
                      <option value="3" className='text-black'>3 people</option>
                      <option value="4" className='text-black'>4 people</option>
                     </select>
                     <input type="date" className='px-10 py-2.5 bg-transparent font-bold text-[17px] text-white border-[2.2px] border-gray-100 rounded-lg outline-none' />
                </div>
                <input type="time" className='px-10 py-2.5 bg-transparent block w-[80%] mx-auto mt-[1rem] rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100' />
                <div className='mt-[2rem] w-[80%] mx-auto text-center'>
                  <button className='px-8 py-3 mb-[3rem] text-[16px] w-full bg-blue-950 hover:bg-red-600 text-white rounded-lg'>Book Now</button>
                </div>
            </div>
    </div>
  )
}

export default ReservationForm