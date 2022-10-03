import React from "react";
import Nav from '../nav';
import './homescreen.css'
import Banner from "../banner";
import Row from "../row";

export default function Homescreen() {
    return(
        <div className="home-screen bg-dark">
            <Nav />
            <Banner />
            <Row />
        </div>
    )
}