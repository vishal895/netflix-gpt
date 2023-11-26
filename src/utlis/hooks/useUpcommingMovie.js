import React, { useEffect } from 'react'
import { options } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addCommingTrailer } from '../Redux/movieslice'

const useUpcommingMovie = () => {
    const dispatch = useDispatch()
    const nowCommingTrailer = useSelector((store)=> store.movie.nowCommingTrailer)
   
    const getUpcommingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      const json= await data.json()
      dispatch(addCommingTrailer(json.results))
      // console.log(json?.results)
    }
    
    useEffect(() => {
      !nowCommingTrailer &&
        getUpcommingMovies()
    }, [])
}

export default useUpcommingMovie