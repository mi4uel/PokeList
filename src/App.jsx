
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import ModalPokemon from './components/ModalPokemon';
import {FavoriteProvider} from './contexts/FavoriteContext';
import { getPokemonData, getPokemons, searchPokemon } from "./services/pokeapi";


function App() {
  const [pokemons, setPokemons] = useState([]);//listado de todos los pokemons
  const [pokemon, setPokemon]=useState();
  const [modal, setModal]=useState(false);
  const [page, setPage] = useState(0);//pagina
  const [total, setTotal] = useState(0);//total
  const [loading, setLoading] = useState(true);//cargando
  const [favorites, setFavorites] = useState([]);//pokemon's favoritos
  const [notFound, setNotFound] = useState(false);//pokemon no encontrado
  const [searching, setSearching] = useState(false);//busqueda
  const localStorageKey = "favorite_pokemon";
  const searchPokemon = async (pokemon) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  };
   
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(10, 10 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 10));
      setNotFound(false);
    } catch (err) {}
  };
  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };


  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };
  const openPokemon=(pokemon)=>{
    setModal(true)
    setPokemon(pokemon)
  }
  const closePokemon=()=>{
    setModal(false)
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }}
    >
    <main className='overflow-x-hidden relative'>
      {modal ? <ModalPokemon pokemon={pokemon} closePokemon={closePokemon}/> :      
      null}
      <Header/>
      <Searchbar onSearch={onSearch} />
          {notFound ? (
            <div className="not-found-text">
              No se encontro el Pokemon que buscabas 😭
            </div>
          ) : (
            <Pokedex
              openPokemon={openPokemon}
              loading={loading}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total}
            />
          )}
    </main>
    </FavoriteProvider>
  );
}

export default App;

