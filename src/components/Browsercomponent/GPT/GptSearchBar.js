import React, { useRef } from 'react'
import { language, options } from '../../../utlis/constants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../../../utlis/openAi/Openai'
import { addGPT, addGPT2, gptResultMovie } from '../../../utlis/Redux/GptSlice'

const GptSearchBar = () => {
   const dispatch = useDispatch()
    const langchge = useSelector((store)=> store.configureLanguage.default)
    const searchtext = useRef(null)

    

    const searchMovieTMDB = async(movie) =>{
   const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', options)
   const json =  await data.json()

   return json.results

    }

    const handelSearchClick = async () =>{

    
      

      const searchResult = "Act as a movie Recommendation system and suggest some movie for the query :" + searchtext.current.value + ".only give me names of 5 movie, comma seperated like the example result given ahead. Example Result:Gadar,Sholay,Don,Golmaal,Koi Mil Gaya"
      const gptsearch = await openai.chat.completions.create({
        messages: [{ role: 'user', content: searchResult }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptsearch.choices[0]?.message?.content)      
      
      const gptMovie = gptsearch.choices[0]?.message?.content.split(",")
      

      const  resultinArray = gptMovie.map((movie)=> searchMovieTMDB(movie)) 

      const tmdbresult = await Promise.all(resultinArray)

      dispatch(gptResultMovie({movieName:gptMovie, movieResults:tmdbresult}))

      console.log(tmdbresult) 
    }
  return (
    // 
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchtext} type='text' placeholder={language[langchge].gptSearchPlaceholder} className='p-4 m-4 col-span-9'/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white' onClick={handelSearchClick}>{language[langchge].search}</button>
        </form>

    </div>
    
    
  )
}

export default GptSearchBar