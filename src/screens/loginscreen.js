import React, { useState } from "react";
import './loginscreen.css';
import NetflixLogo from '../images/netflix-logo.png';
import Signin from "../signin";

export default function Loginscreen() {

    const [signin, setSignin] = useState(false);
    return(
        <div className="loginscreen ">
            <div className="gradient-bg">
                <nav className="login-nav nav d-flex justify-content-between fixed-top">
                    <img className="nav-item nav-netflix-logo" src={NetflixLogo}></img>
                    <img className="nav-item nav-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVBE7_OvUoIYmIfLTbgZ3Extjd9JxdzeBig&usqp=CAU"></img>
                </nav>
                
                {signin ? (<Signin />) : (<div className="login-contener text-center text-white">
                    <p className="fs-2 fw-bolder">Unlimitea films, TV programmes and more.</p>
                    <p className="fs-4 fw-bold">Watch anywhere. Cancel at any time.</p>
                    <p className="fs-5">Ready to watch? Enter your email to create or restart your membership.</p>
                    <button  className="btncus text-white fw-bold" onClick={() => setSignin(true)}>GET STARTED</button>
                </div>)}
            </div>
        </div>
    )
}