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
const store = createStore(rootReducer, JSON.parse(localStorage['myStore']), composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


store.subscribe( () => {  
    localStorage['myStore'] = JSON.stringify(store.getState());
});

export default store;

