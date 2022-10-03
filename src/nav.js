import React from "react";
import NetflixLogo from './images/netflix-logo.png';
import './nav.css'


export default function Nav() {
    return(
        <div className="nav bg-dark container-fluid nav d-flex justify-content-between p-1 fixed-top">
            <img className="nav-item nav-netflix-logo" src={NetflixLogo}></img>
            <img className="nav-item nav-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVBE7_OvUoIYmIfLTbgZ3Extjd9JxdzeBig&usqp=CAU"></img>
        </div>
    )
}