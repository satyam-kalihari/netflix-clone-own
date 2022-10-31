
import axios from './axios';
import React, { useState, useEffect } from "react";
import './banner.css';
import requests from "./request";

export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchFantasy);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            )
            return request ;
        }
        fetchData();
    }, []);

    function shink(string, stringLength) {
        return string?.length > stringLength ? string.substr(0, stringLength - 1) + '...' : string;
    }
    console.log(movie);
    return(
        <div className=" bg-dark" style={{
            backgroundImage : `URL("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize : "cover",
            backgroundPosition : "center center",
            height: "460px"
        }}>
            <div className="px-4 pt-5">
                <div className="movie-name fs-1  p-2 fw-bolder">{movie?.title || movie?.name || movie?.original_name}</div>
                <button className="banner-btn border-0 m-1 text-white rounded py-1 px-4">Play</button> <button className="banner-btn border-0 m-1 text-white rounded py-1 px-4">Wish List</button>
                <div className="movie-details fs-5 p-2">{shink(movie?.overview, 150)}</div>
            </div>
            <div className="banner-fade-bottom" />
        </div>
    )
}