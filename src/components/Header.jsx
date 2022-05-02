import React from 'react'
import logo from '../pokemon.png';

const Header = () => {
  return (
    <header>
        <div className="container mx-auto flex items-center justify-center">
            <img src={logo} className="w-[150px] lg:W-[250px]" alt='pokemon'/>
        </div>

    </header>
  )
}

export default Header