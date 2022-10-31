import React from "react";
import { useSelector } from "react-redux";
import NetflixLogo from '../images/netflix-logo.png';
import './profilescreen.css';
import {selectUser} from '../features/userSlice';
import {auth} from '../firebase';
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import '../footer.css'

export default function Profile() {

    const user = useSelector(selectUser);
    const navigate = useNavigate();
    return(
        <div className="profilescreen">
            <div className="container-fluid p-1 fixed-top">
                <img onClick={() => navigate('/')} className="prof-netflix-logo" src={NetflixLogo}></img>
            </div>
            <div className="profile-contener text-white p-2">
                <p className="fw-bold fs-2">Edit Profile</p>
                <div className="profile-details d-flex gap-3">
                    <div><img className="profile-img m-1 rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVBE7_OvUoIYmIfLTbgZ3Extjd9JxdzeBig&usqp=CAU"></img></div>
                    <div className="user-details d-flex flex-column ">
                        <p className="align-items-center border-bottom border-dark p-2  bg-dark rounded">{user.email}</p>
                        <p className="align-items-center border-bottom border-dark p-2">Plan(current plan: premium)</p>
                        <p className="align-items-center border-bottom border-dark p-2">Renewal date:</p>
                        <div className="detail d-flex justify-content-between align-items-center border-bottom border-dark px-2">
                            <div>Netflix standard<p className="text-danger">1080p</p></div>
                            <div><button className="sub-btn border-0  text-white">subscribe</button></div>
                        </div>
                        <div className="detail d-flex justify-content-between align-items-center border-bottom border-dark px-2">
                            <span>Netflix Basic <p className="text-danger">480p</p></span>
                            <div><button className="sub-btn border-0  text-white">subscribe</button></div>
                        </div>
                        <div className="detail d-flex justify-content-between align-items-center border-bottom border-dark px-2">
                            <span>Netflix Premium <p className="text-danger">4k+HDR</p></span>
                            <div><button className="sub-btn border-0 text-white">subscribe</button></div>
                        </div>
                        <button onClick={() => auth.signOut()} className="signout-btn border-0 text-white fw-bold p-2">Sign out</button>
                    </div>
                </div>
            </div>
            <div className="sticky-bottom mt-5 pt-5"><Footer /></div>
            
        </div>
    )
}