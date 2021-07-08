import React, { useEffect } from 'react';
import { requestPokemons, requestMorePokemons } from '../redux/actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './layout';
import HomePageHeader from './homePageHeader';
import PokemonsList from './pokemonsList';





const HomePage = (props) => {
    const pokemons = useSelector((state) => state.pokemons.pokemons);
    const favorites = useSelector((state) => state.pokemons.favorites);
    const pokemon = useSelector((state) => state.pokemons.pokemon);    
    const hasMore = useSelector((state) => state.pokemons.hasMore);   
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
                                     
                        <InfiniteScroll
                            dataLength={pokemons.length}
                            next={() => dispatch(requestMorePokemons())}
                            hasMore={hasMore}
                            endMessage={
                               <p style={{ textAlign: "center", marginBottom: 20, fontSize: 18 }}>
                                  <b>You have seen it all</b>
                               </p>
                            }
                        >          
                        
                            <PokemonsList pokemons={pokemons}  />
                    
                        </InfiniteScroll>                       
                </main>
            </Layout>
        </>
    );

};



export default HomePage;
