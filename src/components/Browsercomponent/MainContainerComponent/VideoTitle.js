import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='pt-[20%] px-12 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-3xl'>{title}</h1>
        <p className='text-lg w-1/3'>{description}</p>
        <div className='flex gap-2'>
            <button className='px-12 py-1 text-lg bg-white text-black'>Play</button>
            <button className='px-12 py-1 text-lg bg-gray-800 text-white'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle