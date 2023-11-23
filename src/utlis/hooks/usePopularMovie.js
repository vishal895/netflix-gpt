import React, { useEffect } from 'react'
import { options } from '../constants'
import { useDispatch } from 'react-redux'
import { addPopularTrailer } from '../Redux/movieslice'

const usePopularMovie = () => {
    const dispatch = useDispatch()
   
    const getPopularMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      const json= await data.json()
      dispatch(addPopularTrailer(json.results))
      // console.log(json?.results)
    }
    
    useEffect(() => {
      getPopularMovies()
    }, [])
}

export default usePopularMovie