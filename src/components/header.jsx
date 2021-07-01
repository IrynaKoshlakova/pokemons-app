import React from 'react';
import {Link} from 'react-router-dom';
import imgLogo from './images/pokemon-logo-200px.png';





const Header = () => {
    return (
        <>
           <header className = "header">
                <Link className = "arrowLink" to = "/">
                    <div className = "arrowLink">&lt;</div>                    
                </Link> 
                <Link className = "logoLink" to = "/">
                    <img className = "logoImg" src = {imgLogo} alt = "logo"></img>                    
                </Link> 
               </header>   
        </>
    );
};



export default Header;