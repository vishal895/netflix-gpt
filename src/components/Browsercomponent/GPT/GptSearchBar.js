import React from 'react'
import { language } from '../../../utlis/constants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  
    const langchge = useSelector((store)=> store.configureLanguage.default)
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg')] h-screen ">
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' placeholder={language[langchge].gptSearchPlaceholder} className='p-4 m-4 col-span-9'/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white'>{language[langchge].search}</button>
        </form>

    </div>
    </div>
    
  )
}

export default GptSearchBar