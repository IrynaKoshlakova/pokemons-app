import React from 'react';
import PokemonCard from './pokemonCard'; 



const PokemonsList = (props) => {   
    
        return (
            <section className="pokemonsBlock">  
                            
         
                    {props.pokemons.map((item) => {       
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