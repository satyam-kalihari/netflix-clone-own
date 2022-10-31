import axios from "./axios";
import React, { useEffect, useState } from "react";
import './row.css';
import arrowRight from "./images/arrow-right.png";
import arrowLeft from "./images/arrow-left.png";
import arrowBack from "./images/back-arrow.png";
import playBtn from "./images/play.png";
import YouTube from "react-youtube";

export default function Row({genere, fetchURL, isLarge}){

    
    // DETAIL CONTENER
    const [disNone, setTrue] = useState(true)
    const [movieDetail, setmovieDetail] = useState([]);

    const base_URL = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return request
        }
        fetchMovies();
    }, [fetchURL])

    const slideLeft = () => {
        var slide = document.getElementById(genere);
        slide.scrollLeft -= 500;
        console.log("slide left")
    }
    const slideRight = () => {
        var slide = document.getElementById(genere);
        slide.scrollLeft += 500 
    }
    // movie trailer
    const API_KEY = "bbdc86c0b04991c3385288b510b3b719";
    const [movieVideo, setMovieVideo] = useState()
    const [playing, setPlaying] = useState(false)

    async function fetchMoviesVideo(id) {
        const videoRequest = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}`);
        setMovieVideo(videoRequest.data.results)
        return videoRequest
    }
    function renderTrail() {
        if(movieVideo === undefined){
            return null
        }else{
            const trailer = movieVideo.find(vid => vid.name==='Official Trailer');
            return (
                trailer !== undefined && (
                    playing && 
                        <div className="youtube-contener">
                            {console.log("not working")}
                            <YouTube 
                                videoId={trailer.key}
                                opts={
                                    {
                                        playerVars: {
                                            autoplay: 1,
                                            controls: 0,
                                            cc_load_policy: 0,
                                            fs: 0,
                                            iv_load_policy: 0,
                                            modestbranding: 0,
                                            rel: 0,
                                            showinfo: 0,
                                        },
                                    }
                                }
                            />
                    </div>
                    )
                )
        }
        
    }

    return(
        <div className="row content-row p-2">
                <p className="fs-2 text-white py-3">{genere}</p>
                <div className="row-movies d-flex gap-3 m-2" id={genere}>
                    {movies.map(movie => (
                        (isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path)) && (
                        <div>
                            <div key={movie.id} onClick={() => {setmovieDetail([movie?.title || movie?.name || movie?.original_name, movie?.backdrop_path, movie.poster_path, movie?.overview, movie.original_language, movie.vote_average, movie.id])
                            setTrue(!disNone);  setPlaying(false)}}>

                                <img className={`movie-img ${isLarge ? "large-row" : "small-row"}`}
                                src={`${base_URL}${isLarge ? movie.poster_path : movie?.backdrop_path}`}
                                ></img>

                            </div>
                        </div>
                    ))}
                </div>
                <img src={arrowLeft} alt="arrow left" onClick={slideLeft} className="arrow arrow-left rounded-circle"></img>
                <img src={arrowRight} alt="arrow right" onClick={slideRight} className="arrow arrow-right rounded-circle"></img>
                
                {/* Detail contener */}
                <div className={`detail-contener ${disNone && 'dis-none'} text-white display-none rounded`} >
                    
                    {/*contener background */}
                    <img src={`https://image.tmdb.org/t/p/original/${movieDetail[1]}`} className="background-img" onClick={() => setPlaying(false)}></img>
                    
                    {/*contener poster */}
                    <img src={`https://image.tmdb.org/t/p/original/${movieDetail[2]}`} className="img-poster rounded" alt="poster"></img>

                    {/*Details of movie*/}
                    <div className="movie-detail pt-3 m-1">
                        <h1 className="p-1 rounded fw-bold">{movieDetail[0]}</h1>
                        <p className="p-2 movie-overview">{movieDetail[3]}</p>
                        
                        <div className="button-det d-flex gap-4 m-2">
                            <span className="det-background rounded-pill fw-bold p-2 align-items-center">Language : <span className=" text-danger">{movieDetail[4]}</span></span>
                            <span className="det-background rounded-pill fw-bold p-2 align-items-center">Rating : <span className=" text-danger">{movieDetail[5]}</span></span>
                            <button onClick={() => {
                                setPlaying(true);
                                fetchMoviesVideo(movieDetail[6]);
                            }} className="btn-background rounded-pill fw-bold p-2 px-3 d-flex justify-content-center align-items-center"><img src={playBtn} ></img> Play</button>
                        </div>
                    </div>
                    <img src={arrowBack} alt="back arrow"  onClick={() => {setTrue(true); setPlaying(false)}} className="back-arrow rounded-circle"></img>
                </div>
                {renderTrail()}
        </div>
    )
}