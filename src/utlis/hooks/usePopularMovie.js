import React, { useEffect } from 'react'
import { options } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularTrailer } from '../Redux/movieslice'

const usePopularMovie = () => {
    const dispatch = useDispatch()
     const nowPopularTrailer = useSelector((store)=> store.movie.nowPopularTrailer)
   
    const getPopularMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      const json= await data.json()
      dispatch(addPopularTrailer(json.results))
      // console.log(json?.results)
    }
    
    useEffect(() => {
      !nowPopularTrailer &&
      getPopularMovies()
    }, [])
}

export default usePopularMovie