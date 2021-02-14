import React, {useState, useEffect} from 'react';
import logo from './images/netflix_logo.png';
import avatar from './images/netflix_avatar.png';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src={logo} alt="Netflix Logo" className="nav__logo"/>
            <div className="nav__tabs">
                <button className="nav__tab"><b>Início</b></button>
                <button className="nav__tab">Séries</button>
                <button className="nav__tab">Filmes</button>
                <button className="nav__tab">Bombando</button>
                <button className="nav__tab">Minha lista</button>
            </div>
            <div className="nav__icons_right">
            </div>
            <img src={avatar} alt="Netflix Avatar" className="nav__avatar"/>
        </div>
    )
}

export default Nav

