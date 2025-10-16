import React from 'react'

interface CardProps{
    title: string;
    description: string;
    image: string;
    link: string;
}
const Card = ({title,description,image,link}: CardProps) => {
  return (
    <div className='max-w-sm mx-auto m-[1rem] bg-[#1a1c1e] rounded-lg shadow-md overflow-hidden'>
      <img src={image} alt={title} className='w-full h-48 object-cover'/>
    </div>
  )
}

export default Card