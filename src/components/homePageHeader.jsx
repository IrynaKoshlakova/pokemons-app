import React from 'react';
import {Link} from 'react-router-dom';
import imgLogo from './images/pokemon-logo-200px.png';
//import { FaRegHeart } from 'react-icons/fa';
import imgHeart from './images/white-heart.png';




const HomePageHeader = () => {
    return (
        <>
            <header className="header">
                <Link className="logoLink" to="/">
                    <img className = "logoImg" src = {imgLogo} alt = "logo"></img> 
                </Link>
                <Link className="heartLink" to = {`/favorites`}>
                    <img className = "heartImg" src = {imgHeart} alt = "img-heart"></img> 
                   
                </Link>
            </header> 
        </>
    );
};



export default HomePageHeader;