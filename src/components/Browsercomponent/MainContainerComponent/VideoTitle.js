import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='pt-[5%] md:pt-[20%] px-6 md:px-12 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-lg font-bold md:text-3xl'>{title}</h1>
        <p className='w-full text-xs md:text-lg md:w-1/3'>{description}</p>
        <div className='flex gap-2'>
            <button className='px-6 py-1 md:px-12 md:py-1 text-lg bg-white text-black'>Play</button>
            <button className='px-6 md:px-12 py-1 text-lg bg-gray-800 text-white'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle