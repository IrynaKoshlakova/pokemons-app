import React from 'react';
import PokemonCard from './pokemonCard'; 
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';



const PokemonsList = (props) => {   
     
    const loading = useSelector((state) => state.pokemons.loading);
    
        return (
            <section className="pokemonsBlock">  
                   {loading ?
                  <div>
                     <Loader type="Hearts" color="#00BFFF" height={80} width={80} /><br></br>
                     <span> Loading...</span>
                  </div> :          
         
                    props.pokemons.map((item) => {       
                        return (
                           <div className = "pokemonCardWrapper" key = {item.id} >
                               
                               <PokemonCard pokemon = {item}                                            
                               />           
                           </div>         
                        );       
                    }                   
                )}                  

            </section>         
        );       
  
};





export default PokemonsList;