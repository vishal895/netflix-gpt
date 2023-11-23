import React from 'react'
import { auth } from '../../utlis/Firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Navbar = () => {
   const user = useSelector(store => store.user)
    const navigate = useNavigate()
    const handelsignout = () => {
        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='flex justify-between bg-black text-white py-1 items-center '>
        <div className='flex  items-center'>
        <img src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" className="w-36 h-12" alt="netflix logo" />
            <div className='flex'>
                <ul className='flex align-middle font-bold gap-4'>
                    <li>Home</li>
                    <li>Tv Show</li>
                    <li>Movie</li>
                    <li>News&popular</li>
                    <li>My list</li>
                </ul>
            </div>
        </div>
        <div className='flex'>
            <img src={user?.photoURL} alt='' className='w-6 h-6'/>
        <div className='font-bold' onClick={handelsignout}>sign out</div>
        </div>
    </div>
  )
}

export default Navbar