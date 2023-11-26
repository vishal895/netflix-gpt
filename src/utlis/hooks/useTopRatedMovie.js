import React, { useEffect } from 'react'
import { options } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRatedTrailer } from '../Redux/movieslice'

const useTopRatedMovie = () => {
    const dispatch = useDispatch()
    const nowRatedTrailer = useSelector((store)=> store.movie.nowRatedTrailer)
   
    const getRatedMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      const json= await data.json()
      dispatch(addRatedTrailer(json.results))
      // console.log(json?.results)
    }
    
    useEffect(() => {
      !nowRatedTrailer &&
      getRatedMovies()
    }, [])
}

export default useTopRatedMovie