import { requestPokemonsSuccess, requestPokemonSuccess,
    errorPokemons } from './actions';
import { takeLatest, call, put, all } from 'redux-saga/effects';



export async function requestToServer() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=40`);
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


const requestPokemonSubscribe = () => {
    return takeLatest('REQUEST_POKEMON', requestPokemonSaga);
}

export function* pokemonsSagas() {
    yield all([
        requestPokemonsSubscribe(),  requestPokemonSubscribe()
    ]);
}
