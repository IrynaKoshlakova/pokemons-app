import {combineReducers, createStore, applyMiddleware} from 'redux';
import {pokemonsReducer} from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'; 
import {composeWithDevTools} from 'redux-devtools-extension';


const rootReducer = combineReducers ({
    pokemons: pokemonsReducer,
});

const composeEnhancers = composeWithDevTools({trace: true});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);



export default store;

