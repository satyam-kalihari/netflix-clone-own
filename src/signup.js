import React from "react";
import './signup.css'
import { auth } from "./firebase";
import { useRef } from "react";

export default function Signup() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => console.log(authUser))
        .catch((error) => console.log(error.message))
    }

    return(
        <div className="signup">
            <div className="signup-contener  d-flex gap-3">
                <div><img className="signup-contener-profile-img m-1 rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVBE7_OvUoIYmIfLTbgZ3Extjd9JxdzeBig&usqp=CAU"></img></div>
                <div className="signup-contener-user-details d-flex flex-column text-white gap-1">
                    <input ref={emailRef} type={"email"} placeholder="Email" className="align-items-center outline p-2 border-0 background text-white"/>
                    <input ref={passwordRef} type={"password"} placeholder="Password" className="align-items-center outline p-2 border-0 background text-white"/>
                    <input type={"number"} placeholder="Phone number" className="align-items-center outline p-2 border-0 background text-white"/>
                    <div className=" outline detail d-flex justify-content-between align-items-center px-2">
                        <div>Netflix standard<p className="text-danger">1080p</p></div>
                        <div><button className="sub-btn border-0  text-white">subscribe</button></div>
                    </div>
                    <div className=" outline detail d-flex justify-content-between align-items-center border-bottom border-dark px-2">
                        <span>Netflix Basic <p className="text-danger">480p</p></span>
                        <div><button className="sub-btn border-0  text-white">subscribe</button></div>
                    </div>
                    <div className=" outline detail d-flex justify-content-between align-items-center border-bottom border-dark px-2">
                        <span>Netflix Premium <p className="text-danger">4k+HDR</p></span>
                        <div><button className="sub-btn border-0 text-white">subscribe</button></div>
                    </div>
                    <button onClick={signup} className="signout-btn border-0 text-white fw-bold p-2">Sign up</button>
                </div>
            </div>
        </div>
    )
}