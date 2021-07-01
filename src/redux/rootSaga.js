import {all} from 'redux-saga/effects';
import {pokemonsSagas} from './pokemonsSagas'; 


export default function* rootSaga() {
    yield all([
        pokemonsSagas()
    ])    
}