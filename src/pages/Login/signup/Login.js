import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [signup,setSignup] = useState(true)
    const handelsignup = () =>{
      setSignup(!signup)
    }
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg')] h-screen ">
      <div className="px-16">
        <img
          src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
          className="w-36"
          alt="netflix logo"
        />
        
            <form className="w-3/12 p-12 bg-black text-white mx-auto bg-opacity-50">
                <h1 className="font-bold text-3xl py-1">{signup ? "Sign In" : "Sign up"}</h1>
                {!signup &&(<input type="text" placeholder="full Name" className="w-full p-2 my-2"/>)}
                <input type="text" placeholder="Email" className="w-full p-2 my-2"/>
                <input type="password" placeholder="password" className="w-full p-2 my-2"/>
                <button className="bg-red-700 p-2 my-2 w-full">Sign In</button>
                <p className="font-bold mt-2" onClick={handelsignup}>{signup ?"New to Netflix? Sign up now." :"Already registered? sign in now"}</p>
            </form>
        
      </div>
    </div>
  );
};

export default Login;
