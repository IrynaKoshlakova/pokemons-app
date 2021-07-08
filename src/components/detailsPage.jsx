import React, { useState, useEffect } from 'react';
import Layout from './layout';
import { useDispatch, useSelector } from 'react-redux';
import { requestPokemon, addToFavorites, removeFromFavorites } from '../redux/actions';
import {useRouteMatch} from "react-router-dom";
import Header from './header';



const DetailsPage = (props) => {
    
    const favorites = useSelector((state) => state.pokemons.favorites);    
    const pokemon = useSelector((state) => state.pokemons.pokemon);     
    let match = useRouteMatch();
    const dispatch = useDispatch();   
    
    const favorite = favorites.find(item => item.name === pokemon.name);

    useEffect(() => {       
        const id = Number(match.params.id);
        dispatch(requestPokemon(id));       
    }, []);   
    
   
    const addPokemon = () => {
        if(!pokemon) return;          
        const selectedPokemon = {
            name: pokemon.name,
            url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
        }
        const pokemonAlreadyAdded = favorites.find(item => item.name === selectedPokemon.name);
        if(pokemonAlreadyAdded) return;       
        dispatch(addToFavorites(selectedPokemon));                                
    }

    const removePokemon = () => {                                 
        dispatch(removeFromFavorites(pokemon.name));  
        localStorage.setItem("myFavorites", JSON.stringify(favorites));                       
    }
    

    return (
        <>
            <Layout>
                <Header />
                { !pokemon ? null :
                      
                <>    
                   <div className="detailsPageImageBlock">
                    <img className = "detailsPageImage" src = {`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} />
                    <h1 className = "detailsPageTitle">{pokemon.name}</h1>
                    </div>
                  <div className = "detailsPagePropertiesBlock"> 

                  <p className = "detailsLine">
                        <div className = "pokemonProperty">Base Experience</div>
                        <div className = "pokemonPropertyValue">{pokemon.base_experience}</div>
                    </p> 
                     <p className = "detailsLine">
                        <div className = "pokemonProperty">Height</div>
                        <div className = "pokemonPropertyValue">{pokemon.height}</div>
                    </p>
                    <p className = "detailsLine">
                        <div className = "pokemonProperty">Weight</div>
                        <span className = "pokemonPropertyValue">{pokemon.weight}</span>
                    </p> 
                      <p className = "detailsLine">
                        <div className = "pokemonProperty">Types</div>
                        <div className = "pokemonPropertyValue">{pokemon.types && pokemon.types.map((item) => item.type.name).join(', ')}</div>
                    </p>  
                      <p className = "detailsLine">
                        <div className = "pokemonProperty">Abilities</div>
                        <div className = "pokemonPropertyValue">{pokemon.abilities && pokemon.abilities.map((item) => item.ability.name).join(', ')}</div>
                    </p> 
                    {!favorite ? (
                    <button className = "detailsPageBtnAdd" 
                            onClick = {() => addPokemon()}>
                             &#9825;    Add to Favorites
                    </button>
                    ) : ( 
                        <button className = "detailsPageBtnRemove" 
                                onClick = {() => removePokemon(pokemon.name)}>Remove from Favorites
                        </button>
                    )}
                  </div> 
                  </> 
                }
            </Layout>
        </>
    );

};




export default DetailsPage;