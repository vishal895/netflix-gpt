import React from 'react'
import MovieList from './secondaryComponent/MovieList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {

     const movies = useSelector((store) => store.movie)
  return (
    movies.nowPlayingMovie && (
    <div className='bg-black'>
        <div className='px-2 md:-mt-52 md:pl-10 relative z-20 text-white'>
        <MovieList title={"Now playing"} movies={movies.nowPlayingMovie}/>
        <MovieList title={"Now Popular"} movies={movies.nowPopularTrailer}/>
        <MovieList title={"Now Rated"} movies={movies.nowRatedTrailer}/>
        <MovieList title={"Now Comming"} movies={movies.nowCommingTrailer}/>
        </div>
        
    </div>
    )
  )
}

export default SecondContainer