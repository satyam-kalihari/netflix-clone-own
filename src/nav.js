import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NetflixLogo from './images/netflix-logo.png';
import './nav.css'

export default function Nav() {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        }else {setShow(false)}
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])
    return(
        <div className={`nav-contener align-items-center container-fluid d-flex justify-content-between p-2 fixed-top ${show && 'nav-bg'}`}>
            <img className="nav-netflix-logo" src={NetflixLogo}></img>
            <img onClick={() => navigate('/profile')} className="nav-item nav-avatar mx-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVBE7_OvUoIYmIfLTbgZ3Extjd9JxdzeBig&usqp=CAU"></img>
        </div>
    )
}