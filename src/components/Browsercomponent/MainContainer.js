import React from 'react'
import VideoTitle from './MainContainerComponent/VideoTitle'
import { useSelector } from 'react-redux'
import VideoBG from './MainContainerComponent/VideoBG'

const MainContainer = () => {
  const movies  = useSelector((store) => store.movie?.nowPlayingMovie)
  if(!movies) return

  const mainMovies = movies[0]
  

  const {original_title,overview,id} = mainMovies
  return (
    <>
    <div>
    <VideoTitle title={original_title} description={overview}/>
    <VideoBG  moviesId={id} />
    </div>
    </>
  )
}

export default MainContainer