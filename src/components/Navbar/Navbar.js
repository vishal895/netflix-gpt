import React from 'react'
import { auth } from '../../utlis/Firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addGPT } from '../../utlis/Redux/GptSlice';
import { type_language } from '../../utlis/constants';
import { changeLang } from '../../utlis/Redux/LanguageSlice';

const Navbar = () => {
  const dispatch = useDispatch()
   const user = useSelector(store => store.user)
   const showselect = useSelector(store => store.GPT.Showgpt)
    const navigate = useNavigate()
    const handelsignout = () => {
        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const handelGptClick = () =>{
      dispatch(addGPT())
    }
    const handellangchange = (e) =>{
      dispatch(changeLang(e.target.value))
    }
  return (
    <div className='flex justify-between bg-black text-white py-1 items-center  '>
        <div className='flex  items-center'>
        <img src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" className="w-24 md:w-36 h-12" alt="netflix logo" />
            {/* <div className='flex'>
                <ul className='flex align-middle font-bold gap-4'>
                    <li>Home</li>
                    <li>Tv Show</li>
                    <li>Movie</li>
                    <li>News&popular</li>
                    <li>My list</li>
                </ul>
            </div> */}
        </div>
        <div className='flex items-center'>
          {showselect &&(
          <select className='bg-gray-700 rounded-lg py-1 mr-1 px-1 md:py-2 md:px-4 md:mx-4 md:my-2' onChange={handellangchange}>
          {type_language.map((lang) =>(
            <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>
          ))}
        </select>
          )}
          
          <button className='bg-purple-800 rounded-lg py-1 mr-2 px-1 md:py-2 md:px-4 md:mx-4 md:my-2' onClick={handelGptClick}>{showselect ? "SearchGPT" : "Go GPT"}</button>
            {/* <img src={user?.photoURL} alt='' className='w-6 h-6'/> */}
        <div className='font-bold bg-red-700 py-1 px-2 md:px-4 md:py-2 rounded-lg' onClick={handelsignout}>sign out</div>
        </div>
    </div>
  )
}

export default Navbar