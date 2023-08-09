import React, { useState } from 'react'
import { SearchBar } from '../components/PokemonChallenge/SearchBar'
import { DisplayPokemonOnLoad } from '../components/PokemonChallenge/DisplayPokemonOnLoad'


const PokemonChallenge = () => {
    const [currentName, setCurrentName] = useState("pikachu");

    const receiveNewName = (newName) =>{
        setCurrentName(newName);
    }
  return (
    <div>PokemonChallenge
        <SearchBar onSubmit= {receiveNewName}/>
        <DisplayPokemonOnLoad currentName={currentName}/>
    </div>
  )
}

export default PokemonChallenge