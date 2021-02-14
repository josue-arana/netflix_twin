
import React from 'react';
// import '../../App.css';
// import Cards from '../Cards';
// import Footer from '../Footer';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Nav from './Nav';
import Navbar from './Navbar';

function Home(){
    return (
        <div className="app">

            {/* Nav */}
            {/* <Nav /> */}
            {/* <Navbar /> */}

            {/* Banner */}
            <Banner />

            <Row className="margin_up"
            title="Originais Netflix" 
            fetchUrl ={ requests.fetchNetflixOriginals} 
            isLargeRow 
            />
            <Row title="Tendências Agora" fetchUrl ={ requests.fetchTrending} />
            <Row title="Mais Votado" fetchUrl ={ requests.fetchTopRated} />
            <Row title="Filmes de Ação" fetchUrl ={ requests.fetchActionMovies} /> 
            <Row title="Filmes de Comédia" fetchUrl ={ requests.fetchComedyMovies} />
            <Row title="Filmes de Terror" fetchUrl ={ requests.fetchHorrorMovies} />
            <Row title="Filmes de Romance" fetchUrl ={ requests.fetchRomanceMovies} />
            <Row title="Documentários" fetchUrl ={ requests.fetchDocumentaries} />
        </div>
    );
}

export default Home;