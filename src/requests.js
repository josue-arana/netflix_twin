

const API_KEY = "cfbe39a6506eba5d6df81da47f103500" ;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&langugage=en-US`, 
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&langugage=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`, 
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;