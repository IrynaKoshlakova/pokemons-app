import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useSelector, useDispatch} from 'react-redux';
import Layout from './layout';
import PokemonCard from './pokemonCard';
import Header from './header';





const FavoritesPage = (props) => {

    const favorites = useSelector((state) => state.pokemons.favorites);       
    
    console.log("favoritesPage - favorites", favorites);   
    
        
   
    return (      
        <>  
           <Layout>  
               <Header/>     
                   <main>               
                        <section className="pokemonsBlock">  
                        {favorites.length > 0 ?         
                            favorites.map((item) => {                                       
                                return (
                                    <div className = "pokemonCardWrapper" key = {item.id} >
                                        <PokemonCard pokemon = {item}                                            
                                        />           
                                    </div>         
                                );       
                              }                   
                            )                  
                            : <div className = "noFavoritesText">You have no favorites</div> 
                        } 
                        </section>         
                   </main>
            </Layout>                 
        </>
   );

};



export default FavoritesPage;