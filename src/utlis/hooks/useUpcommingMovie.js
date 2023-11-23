import React, { useEffect } from 'react'
import { options } from '../constants'
import { useDispatch } from 'react-redux'
import { addCommingTrailer } from '../Redux/movieslice'

const useUpcommingMovie = () => {
    const dispatch = useDispatch()
   
    const getUpcommingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      const json= await data.json()
      dispatch(addCommingTrailer(json.results))
      // console.log(json?.results)
    }
    
    useEffect(() => {
        getUpcommingMovies()
    }, [])
}

export default useUpcommingMovie