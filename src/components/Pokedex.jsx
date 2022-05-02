import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import loaderImg from '../loader.gif'

const Pokedex = ({ pokemons, page, setPage, total, loading, openPokemon } ) => {
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="container mx-auto mt-24 mb-16">
        <h1 className="text-center mt-4 text-slate-800 font-bold text-4xl">Pokedex</h1>
      </div>
      {loading ? (
        <div className="container mx-auto lg:min-h-[400px] flex flex-col items-center justify-center">
          <img src={loaderImg} alt="loader" className="w-[350px]"/>
          <p>Cargando pokemon's...</p>
        </div>
      ) : (
        <div className="container mx-auto lg:min-h-[400px] w-[90%] lg:w-full">
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 mt-8 ">
              {pokemons.map((pokemon, idx) => {
                return <Pokemon pokemon={pokemon} key={pokemon.name} openPokemon={openPokemon}/>;
              })}
            </div>
        </div>
        
      )}

      <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
    </div>
  );
};

export default Pokedex;
