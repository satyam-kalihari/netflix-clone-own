import React, { useRef, useState } from "react";
import { auth } from "./firebase";
import './signin.css'
import Signup from "./signup";



export default function Signin() {

    const [signUp, setSignup] = useState(false)

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const signin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
    }

    return(
        <div>
            {signUp ? (<Signup />) : (
                <div className="signin-contener bg-dark rounded-3 text-center text-white">
                    <p className="fs-2 fw-bold pt-4">Sign in</p>
                    <div>
                        <input ref={emailRef} type={'email'} placeholder="Enter your email" className="outline mb-3 rounded-1 border-0" ></input>
                        <input ref={passwordRef} type={'password'} placeholder="Enter your email" className="outline mb-3 rounded-1 border-0" ></input>
                        <button className="signin-btn mb-2 rounded-1 border-0 text-white py-1" onClick={signin}>Sign in</button>
                    </div>
                <div className="fw-light fs-5">Dont have a account ? <span className="gray-text" onClick={() => setSignup(true)}>Sign up</span></div>
            </div>
            )}
        </div>
    )
}