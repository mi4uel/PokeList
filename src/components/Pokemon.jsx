import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import {BsFillHeartFill, BsHeart} from 'react-icons/bs'

const Pokemon = ({ pokemon, openPokemon}) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );

  const redHeart = <BsFillHeartFill className="text-lg lg:text-2xl text-red-500"/>;
  const blackHeart = <BsHeart  className="text-lg lg:text-2xl text-slate-900"/>;
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <><div className={`flex flex-col justify-center items-center relative rounded-xl pb-4 border-[3px] border-slate-800 ${pokemon.types[0].type.name}` } >
      <div className="">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-[80px] lg:w-[100px]"
        />
      </div>
      <div className="">
        <div className="">
          <h3 className="text-lg lg:text-xl font-bold text-slate-900 cursor-pointer hover:text-slate-900" onClick={()=>{openPokemon(pokemon)}}>#{pokemon.id} {pokemon.name}</h3>
        </div>
        <div className="">
          <div className="">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart} className=" absolute top-2 right-3 z-10">
            <div className="mt-2">{heart}</div>
          </button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Pokemon;