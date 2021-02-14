import React , {useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            return request;
        }
        fetchData();
    }, [])

    // console.log(movie);
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1 ) + "..." : str;
    }

    return (
        <header className="banner"
            style={{backgroundSize: "cover", backgroundImage: 
            `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, 
            backgroundPosition: "center center",
        }}>

            <div className="banner__contents">
                {/* title */}
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/* div> 2 buttons */}
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button_play">
                        <div>
                            <svg className="banner__button_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor"/></svg>
                        </div>
                        <div className="banner__button_text">
                            Assistir
                        </div>
                    </button>
                    <button className="banner__button">
                        <div>
                            <svg className="banner__button_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z" fill="currentColor"/>
                            </svg>
                            {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor"/></svg> */}
                        </div>
                        <div className="banner__button_text">
                            Mais informações
                        </div>
                    </button>
                </div>
                <h1 className="banner__disclaimer">
                    DISCLAIMER: This app was created by Josue Arana for educational purposes only.
                </h1>
                
            </div>

            <div className="banner__fadeBottom"></div>
            
        </header>
    )
}

export default Banner
