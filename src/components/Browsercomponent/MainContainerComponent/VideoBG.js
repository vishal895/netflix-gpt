import React, { useEffect } from "react";
import { options } from "../../../utlis/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../../../utlis/Redux/movieslice";


const VideoBG = ({ moviesId }) => {
    const dispatch = useDispatch()
    const trailerId = useSelector((store) => store.movie?.nowPlayingTrailer)
    const getMovieTrailer = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ moviesId +'/videos?language=en-US', options)
        const json = await data.json()
        

        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        dispatch(addMovieTrailer(trailer.key))
        

    }
    useEffect(()=>{
        getMovieTrailer()
    },[])
  return (
    <div className="w-screen">
    <iframe
      className="w-screen aspect-video"
      src={"https://www.youtube.com/embed/"+ trailerId + "?&autoplay=1&mute=1"}
      title="YouTube video player"
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    
    ></iframe>
    </div>
  );
};

export default VideoBG;
