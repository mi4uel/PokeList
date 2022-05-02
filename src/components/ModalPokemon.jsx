import React from 'react'
import {MdClose} from 'react-icons/md'

const ModalPokemon = ({pokemon, closePokemon}) => {
    console.log(pokemon)
  return (
    <div className='fixed z-10 top-0 left-0 h-full min-h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] z-20'>
        <div className="container mx-auto h-[100vh] flex items-center justify-center">
            <div className='w-3/4 bg-slate-200 shadow-xl rounded py-4 px-6 relative h-[90%] overflow-y-auto'>
                <button onClick={closePokemon} className="fixed  top-10 right-[50px] lg:top-16 lg:right-72 text-red-600 text-lg lg:text-4xl"><MdClose/></button>
                <div className='flex gap-1 justify-center mt-4 lg:mt-10 flex-wrap'>
                {pokemon.sprites.front_default ? <img src={pokemon.sprites.front_default} alt="" /> : null }
                {pokemon.sprites.back_default ? <img src={pokemon.sprites.back_default} alt="" /> : null }
                {pokemon.sprites.back_female ? <img src={pokemon.sprites.back_female} alt="" /> : null }
                {pokemon.sprites.back_shiny ? <img src={pokemon.sprites.back_shiny} alt="" /> : null }
                {pokemon.sprites.back_shiny_female ? <img src={pokemon.sprites.back_shiny_female} alt="" /> : null }
                {pokemon.sprites.front_female ? <img src={pokemon.sprites.front_female} alt="" /> : null }
                {pokemon.sprites.front_shiny ? <img src={pokemon.sprites.front_shiny} alt="" /> : null }
                {pokemon.sprites.front_shiny_female ? <img src={pokemon.sprites.front_shiny_female} alt="" /> : null }
                </div>
                <h1 className='text-slate-900 text-sm lg:text-4xl uppercase font-bold text-center mb-4'>{pokemon.name}</h1>
                <div className=' grid grid-cols-2 lg:grid-cols-3 '>
                <div>
                    <h2 className='mt-2 font-bold text-sm lg:text-xl capitalize text-slate-900'>habilidades</h2>
                    <ul>
                      {pokemon.abilities.map(ability=>(
                        <li className='ml-2 text-sm lg:text-lg'>* {ability.ability.name}</li>
                    ))}  
                    </ul>
                    
                </div>
                <h2 className='mt-2 font-bold text-sm lg:text-xl capitalize text-slate-900 flex flex-col'>Experiencia <span className='font-normal text-sm lg:text-lg'>{pokemon.base_experience}</span></h2>
                <h2 className='mt-2 font-bold text-sm lg:text-xl capitalize text-slate-900 flex flex-col'>Altura <span className='font-normal text-sm lg:text-lg'>{pokemon.height}cm</span></h2>
                </div>
                <div>
                
                <h2 className='mt-2 font-bold text-sm lg:text-xl capitalize text-slate-900'>Movimientos:</h2>
                    <div className='grid grid-cols-2 lg:grid-cols-8 gap-1 m-2'>
                    {pokemon.moves.map(move=>(
                    <p className='text-sm lg:text-lg'> {move.move.name}</p>
                    ))}
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default ModalPokemon