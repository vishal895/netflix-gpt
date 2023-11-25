import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../secondaryComponent/MovieList'

const GptSearchSuggestion = () => {
  const {movieResults,movieName} = useSelector((store) => store.GPT) 
  
  

  
  return (
    <div>
      
      <div className='px-4 mt-[10%] bg-black text-white opacity-80'>
      <div >
        {movieName?.map((movieNames, index) => (
          <MovieList key={movieNames} title={movieNames} movies={movieResults[index]}/>
        ))}
      </div>
       
    </div>
    
    </div>
    
    
  )
}

export default GptSearchSuggestion