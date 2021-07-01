export const requestPokemons = () => ({
    type: 'REQUEST_POKEMONS',     
}); 


export const requestPokemonsSuccess = (pokemons) => ({
    type: 'REQUEST_POKEMONS_SUCCESS',
    pokemons,    
});


export const requestMorePokemons = () => ({
    type: 'REQUEST_MORE_POKEMONS',     
});


export const requestMorePokemonsSuccess = (pokemons) => ({
    type: 'REQUEST_MORE_POKEMONS_SUCCESS',    
    pokemons       
});


export const errorPokemons = () => ({
    type: 'ERROR_POKEMONS',    
});


export const requestPokemon = (id) => ({
    type: 'REQUEST_POKEMON',    
    payload: {
       id,
    }        
}); 


export const requestPokemonSuccess = (pokemon) => ({
    type: 'REQUEST_POKEMON_SUCCESS',
    pokemon,       
});


export const addToFavorites = (pokemon) => ({
    type: 'ADD_TO_FAVORITES', 
    pokemon,                
});

export const removeFromFavorites = (name) => ({
    type: 'REMOVE_FROM_FAVORITES',     
    payload: {
        name,
    }   
});


export const setScroll = (hasMore) => ({
    type: 'SET_SCROLL',
    payload: hasMore  
});

