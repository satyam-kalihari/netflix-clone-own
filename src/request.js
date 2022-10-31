const API_KEY = "bbdc86c0b04991c3385288b510b3b719";

const requests = {
    fetchAiringToday : `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixoriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchFantasy:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchAnimation:`/discover/movie?api_key=${API_KEY}&with_genres=16`
}

export default requests;