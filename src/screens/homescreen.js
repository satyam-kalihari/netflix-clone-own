import React from "react";
import Nav from '../nav';
import './homescreen.css'
import Banner from "../banner";
import Row from "../row";
import requests from "../request";
import Footer from "../footer";
import '../footer.css'

export default function Homescreen() {
    return(
        <div className="bg-dark">
            <div className="banner"><Banner /></div>
            <div className="home-screen">
                <Nav />
                <Row
                genere = "Airing Today"
                fetchURL = {requests.fetchAiringToday}
                isLarge= {false}
                />

                <Row
                genere = "Trending"
                fetchURL = {requests.fetchTrending}
                isLarge= {false}
                />

                <Row
                genere = "Netflix originals"
                fetchURL = {requests.fetchNetflixoriginals}
                isLarge = {true}
                />

                <Row
                genere = "Action Movies"
                fetchURL = {requests.fetchActionMovies}
                isLarge= {false}
                />

                <Row
                genere = "Horror Movies"
                fetchURL = {requests.fetchHorrorMovies}
                isLarge= {false}
                />

                <Row
                genere = "Comedy Movies"
                fetchURL = {requests.fetchComedyMovies}
                isLarge= {false}
                />

                <Row
                genere = "Documentaries"
                fetchURL = {requests.fetchDocumentaries}
                isLarge= {false}
                />

                <Row
                genere = "Romance Movies"
                fetchURL = {requests.fetchRomanceMovies}
                isLarge= {false}
                />
                
                <Row
                genere = "Top Rated"
                fetchURL = {requests.fetchTopRated}
                isLarge = {true}
                />

                <Row
                genere = "Fantasy"
                fetchURL = {requests.fetchFantasy}
                isLarge = {false}
                />
                
                <Row
                genere = "Animation"
                fetchURL = {requests.fetchAnimation}
                isLarge = {false}
                />
                
            </div>
            <div className="sticky-bottom"><Footer /></div>
        </div>
        
    )
}