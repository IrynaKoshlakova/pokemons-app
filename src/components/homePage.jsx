import React, { useEffect } from 'react';
import { requestPokemons } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './layout';
import HomePageHeader from './homePageHeader';
import PokemonsList from './pokemonsList';





const HomePage = (props) => {
    const pokemons = useSelector((state) => state.pokemons.pokemons);          
    const dispatch = useDispatch();
    
   

    useEffect(() => {
        dispatch(requestPokemons());                   
    }, []);

    console.log("home page, pokemons", pokemons);
     
    return (
        <>
            <Layout>
                <HomePageHeader/>               
                <main>                                     
                    <PokemonsList pokemons={pokemons}  />                      
                </main>
            </Layout>
        </>
    );

};



export default HomePage;
