import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "../../../utlis/validation";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../utlis/Firebase";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../../../utlis/Redux/userslice";
const Login = () => {

  const [signup, setSignup] = useState(true);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
 const navigate = useNavigate() 
  const dispatch = useDispatch()
  const handlebutton = () => {
    // console.log(name)
    const messege = validation(
      email.current.value,
      password.current.value,
    //   name.current.value
    );
    setError(messege);

    if (messege === null) {
      if (!signup) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        //   name.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }).then(() => {
              // Profile updated!
              // ...
              const {uid,email,displayName,photoURL} = auth.currentUser
              dispatch(adduser({
                uid:uid,email:email,displayName:displayName,photoURL:photoURL
              }

              ))
              console.log(user);
            navigate("/browser")
            }).catch((error) => {
              // An error occurred
              setError(error.message)
              // ...
            });
            

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode + "-" + errorMessage);
            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/browser")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode + "-" + errorMessage);
          });
      }
    }
  };
  const handelsignup = () => {
    setSignup(!signup);
  };

  useEffect = (()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeuser())
          
        }
      });
  }, [])
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg')] h-screen ">
      <div className="px-16">
        <img
          src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
          className="w-36"
          alt="netflix logo"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 p-12 bg-black text-white mx-auto bg-opacity-50"
        >
          <h1 className="font-bold text-3xl py-1">
            {signup ? "Sign In" : "Sign up"}
          </h1>
          {!signup && (
            <input
              type="text"
              placeholder="full Name"
              className="w-full p-2 my-2 text-black"
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 my-2 text-black"
            ref={email}
          />
          <input
            type="password"
            placeholder="password"
            className="w-full p-2 my-2 text-black"
            ref={password}
          />
          <p className="font-bold text-red-600">{error}</p>
          <button className="bg-red-700 p-2 my-2 w-full" onClick={handlebutton}>
            {signup ? "Sign In" : "Sign up"}
          </button>

          <p className="font-bold mt-2" onClick={handelsignup}>
            {signup
              ? "New to Netflix? Sign up now."
              : "Already registered? sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
