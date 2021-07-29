const initialState = {
    pokemons: [], 
    favorites: [],
    pokemon: {},    
    loading: false,       
};


export const pokemonsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'REQUEST_POKEMONS': {
            return {
                ...state,
                loading: true
            }
        } 
        case 'REQUEST_POKEMONS_SUCCESS': {                              
            return {
                ...state,
                pokemons: action.pokemons,
                loading: false
            }         
        }
       
            
        case 'ERROR_POKEMONS': {
            return {
                ...state,                
                loading: false                
            }
        } 
        
        case 'REQUEST_POKEMON': {            
            return {
                ...state,
                loading: true
            }
        } 

        case 'REQUEST_POKEMON_SUCCESS': {                              
            return {
                ...state,
                pokemon: action.pokemon,
                loading: false
            }         
        }
             
               
        case 'ADD_TO_FAVORITES': {             
            return {
                ...state,
                favorites: [...state.favorites, action.pokemon],                                
            }
        }
        
       
        case 'REMOVE_FROM_FAVORITES': {
            return {                
                ...state,
                favorites: state.favorites.filter(item => item.name !== action.payload.name),                                            
            }
        } 

       
        default: return state; 
           
    }


};