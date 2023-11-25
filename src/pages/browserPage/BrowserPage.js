
import React, { useEffect } from 'react'

import Navbar from '../../components/Navbar/Navbar';
import { options } from '../../utlis/constants';
import { useDispatch, useSelector } from 'react-redux';
import {addmovie} from "../../utlis/Redux/movieslice"
import MainContainer from '../../components/Browsercomponent/MainContainer';
import SecondContainer from '../../components/Browsercomponent/SecondContainer';
import usePopularMovie from '../../utlis/hooks/usePopularMovie';
import useTopRatedMovie from '../../utlis/hooks/useTopRatedMovie';
import useUpcommingMovie from '../../utlis/hooks/useUpcommingMovie';
import GPTsearch from '../../components/Browsercomponent/GPT/GPTsearch';
const BrowserPage = () => {
  const dispatch = useDispatch()
  const showGPT = useSelector((store) => store.GPT.Showgpt)
   
const getNowPlayingMovies = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  const json= await data.json()
  dispatch(addmovie(json.results))
  // console.log(json?.results)
}

useEffect(() => {
  getNowPlayingMovies()
}, [])
usePopularMovie()
useTopRatedMovie()
useUpcommingMovie()


  return (
    <>
    <Navbar/>
    {showGPT ? <GPTsearch/> : <>
    <MainContainer />
    <SecondContainer />
    </>}
    
    
    
    
    </>
  )
}

export default BrowserPage