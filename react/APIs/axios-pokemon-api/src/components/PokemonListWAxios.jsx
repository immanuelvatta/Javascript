import React, {useState} from 'react'
import axios from 'axios'

const PokemonListWAxios = () => {
    const [pokemonList, setPokemonList] = useState([])

    // const getPokemon = async() => {

    //     try {
    //         const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=807');
    //         setPokemonList(response.data.results) 
    //     } catch (error) {
    //         console.log((error))
    //     }
    //     // console.log(pokemonList)
    // }

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response =>{
                setPokemonList(response.data.results);
            }).catch(err=>{
                console.log(err)
            })

    }

    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <h2>Pokemon List</h2>
            <ul>
                {pokemonList.map((pokemon, index) =>
                    <li key={index}> {pokemon.name} </li>
                )}
                
            </ul>
        </div>
    )
}

export default PokemonListWAxios