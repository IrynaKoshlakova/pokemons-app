import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/actions';
import { FaRegHeart } from 'react-icons/fa';




const PokemonCard = (props) => {
    
    const pokemons = useSelector((state) => state.pokemons.pokemons);
    const favorites = useSelector((state) => state.pokemons.favorites);
    const pokemon = useSelector((state) => state.pokemons.pokemon);         
    const dispatch = useDispatch();
    
    let pokeId = props.pokemon.url.slice(34, -1); 
    
    const favorite = favorites.find(item => item.name === props.pokemon.name);   

    const selectPokemon = (name) => { 
        let pokemonAlreadyAdded = favorites.find(item => item.name === name);
        if(pokemonAlreadyAdded) return;
        let selectedPokemon = pokemons.find(item => item.name === name) || null;                                    
        dispatch(addToFavorites(selectedPokemon));                                  
    }    
    
    
    return (
        <div className="pokemonCard">
            <div className="pokemonCardImageWrapper">
                <Link className="pokemonCardImageLink" to={`/pokemon/${pokeId}`}>
                    <img className="pokemonCardImage" src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
                        alt="Pokemon Image" />
                </Link>
            </div>
            <div className="pokemonCardInfoBlock">
                <div className="pokemonCardInfo">
                    <h6 className="pokemonCardTitle">{props.pokemon.name}</h6>
                    <button className = {favorite ? "pokemonCardBtnRed" : "pokemonCardBtnDark"}
                        onClick={() => selectPokemon(props.pokemon.name)}>
                        <FaRegHeart/>
                    </button>
                </div>
            </div>
        </div>
    );
}



export default PokemonCard;























