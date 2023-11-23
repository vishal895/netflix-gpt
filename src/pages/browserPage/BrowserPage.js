
import React, { useEffect } from 'react'

import Navbar from '../../components/Navbar/Navbar';
import { options } from '../../utlis/constants';
import { useDispatch } from 'react-redux';
import {addmovie} from "../../utlis/Redux/movieslice"
import MainContainer from '../../components/Browsercomponent/MainContainer';
import SecondContainer from '../../components/Browsercomponent/SecondContainer';
const BrowserPage = () => {
  const dispatch = useDispatch()
   
const getNowPlayingMovies = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  const json= await data.json()
  dispatch(addmovie(json.results))
  // console.log(json?.results)
}

useEffect(() => {
  getNowPlayingMovies()
}, [])


  return (
    <><Navbar/>
    <MainContainer/>
    <SecondContainer/>
    
    
    </>
  )
}

export default BrowserPage