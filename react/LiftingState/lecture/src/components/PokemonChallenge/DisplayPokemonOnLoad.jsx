import React, { useEffect, useState }from 'react'
import axios from "axios"

/*
1. Get current name from props
2. trigger the useEffect to  call the API: useEffect, axios
3. after receiving the response from API, update pokemon object : useState
*/

export const DisplayPokemonOnLoad = (props) => {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.currentName}`)
            .then(response => setPokemon(response.data))
            .catch(err => {
                alert("Invalid pokemon")
                setPokemon()
            })
    }, [props.currentName])

  return (
    <div>
        {
            pokemon?
            <div>
                <h1> {pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>:
            <h1> Loading...</h1>
        }
    </div>
  )
}
