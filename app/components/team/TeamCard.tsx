import Image from 'next/image';
import React from 'react'

interface ChefProps{
    image:string;
    name:string;
    position:string;
}
const TeamCard = ({image,name,position}:ChefProps) => {
  return (
    <div>
        <Image src={image} alt={name} width={400} height={400}
        className='rounded-2xl mx-auto'/>
        <h1 className='text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold'>
            {name}</h1>
        <p className='mt-[0.4rem] mb-[0.4rem] bg-green-600 text-white px-4 py-1 mx-auto font-medium w-fit rounded-lg'>
            {position}</p>
        <p className='mt-[1rem] text-center text-gray-600 mx-auto md:w-[70%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, totam.</p>
    </div>
  )
}

export default TeamCard