import {
    requestMorePokemonsSuccess, requestPokemonsSuccess, requestPokemonSuccess,
    errorPokemons, setScroll
} from './actions';
import { takeLatest, call, put, all, select } from 'redux-saga/effects';




export async function requestToServer() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12`);
    const data = await response.json();
    return data;
}


export async function requestToSelectedPokemon(action) {
    const urlId = action.payload.id;
    const urlIdString = String(urlId);
    const urlRequestPokemon = `https://pokeapi.co/api/v2/pokemon/${urlIdString}`;
    const response = await fetch(urlRequestPokemon);
    return await response.json();
}



function* requestPokemonsSaga(action) {
    try {
        const requestedData = yield call(requestToServer, action);
        yield put(requestPokemonsSuccess(requestedData.results));
    } catch (error) {
        yield put(errorPokemons());
    }
}

function* requestMorePokemonsSaga(action) {
    try {  
        const requestedData = yield call(requestToServer, action);       
        
        let hasMore = yield select((store) => store.pokemons.hasMore);
        let pokemons = yield select((store) => store.pokemons.pokemons);
        yield put(requestMorePokemonsSuccess(requestedData.results));
        if (pokemons.length < requestedData.count) {
            hasMore = true;
        } else {
            hasMore = false;
        }
        yield put(setScroll(hasMore));

        console.log("pokemons.length", pokemons.length);
        console.log("requestedData.count", requestedData.count);
        console.log("hasMore", hasMore);
    } catch (error) {
        yield put(errorPokemons());
    }
}

function* requestPokemonSaga(action) {
    try {
        const selectedPokemon = yield call(requestToSelectedPokemon, action);
        yield put(requestPokemonSuccess(selectedPokemon));
    } catch (error) {
        yield put(errorPokemons());
    }

}

const requestPokemonsSubscribe = () => {
    return takeLatest('REQUEST_POKEMONS', requestPokemonsSaga);
}

const requestMorePokemonsSubscribe = () => {
    return takeLatest('REQUEST_MORE_POKEMONS', requestMorePokemonsSaga);
}

const requestPokemonSubscribe = () => {
    return takeLatest('REQUEST_POKEMON', requestPokemonSaga);
}

export function* pokemonsSagas() {
    yield all([
        requestPokemonsSubscribe(), requestMorePokemonsSubscribe(), requestPokemonSubscribe()
    ]);
}
