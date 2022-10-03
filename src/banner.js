import React from "react";
import './banner.css';

export default function Banner() {
    return(
        <div className="banner bg-dark p-5">
            <div className="movie-name fs-1">Movie name</div>
            <button className="border-0">Play</button> <button className="border-0">Bookmark</button>
            <div className="movie-details fs-5">test details about movie</div>
        </div>
    )
}