import React , {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [showError, setShowError] = useState(false);
    const [movieLink, setMovieLink] = useState("");

    // A snippet of code which runs based on a specific condition.variable. 
    useEffect( () => {
        //if [], rn once when row loads and dont run again. If we add movies variable, then it will run everytime movie changes. 
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.table(request.data.results);
            // setMovies(request.data.results.sort((a,b) => b['vote_average'] - a['vote_average']));
            setMovies(request.data.results.sort((a,b) => 0.5 - Math.random()));
            // setMovies(shuffle(request.data.results));
            return request; 
        }
        fetchData();
    }, [fetchUrl]);


    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        },
    };

    // console.table(movies);
    const handleClick = (movie) => {

        if (showError){
            setShowError(false);
        }
        if (trailerUrl) {
            setTrailerUrl("");
            
        } else {

            movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title || "")
            .then(url => {
                // console.table(movie);
                // https://www.youtube.com/watch?v=XtMThy8QKqU    <- to get the last part or url
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(encodeURIComponent(urlParams.get('v')));
            })
            .catch((error) => {
                
                if (showError){
                    setShowError(false);
                }else{
                    setShowError(true);
                    
                    setMovieLink(encodeURIComponent(movie?.title || movie?.original_name || movie?.original_title || ""));
                }
                console.log(error)
                
            });
        }
    }


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters" >
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.title}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />  }

            {showError && 
            <div className="noTrailer">
                <h4>Sorry! We couldn't find this trailer. You may click <a className="link__redirect" target="blank" href={`https://www.youtube.com/results?search_query=${movieLink}`}>here to find it on YouTube.</a></h4>
                <br/>
                <br/>
            </div> }
            
        </div>
    )
}

export default Row;
