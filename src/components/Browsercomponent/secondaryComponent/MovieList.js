import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title,movies}) => {
    // console.log(movies)
    
  return (
    <div className='px-0 md:px-6'> 
     <h1 className='text-3xl py-2'>{title}</h1>
     <div className='flex overflow-x-scroll [&::-webkit-scrollbar]:hidden'>
        <div className='flex'>
            {movies?.map((mov)=>(
               <MovieCard key={mov.id} title={""} posterPath={mov.poster_path}/>
            ))}
            
        </div>
     </div>



        
    </div>
  )
}

export default MovieList