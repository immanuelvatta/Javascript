import React, {useState} from 'react'

const PokemonFetch = () => {

    const [pokemonList, setPokemonList] = useState([]);

    
    // const getPokemon = async() => {

    //     try {
    //         const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=807');
    //         const pokeList = await response.json();
    //         setPokemonList(pokeList.results) 
    //     } catch (error) {
    //         console.log((error))
    //     }
    //     // console.log(pokemonList)
    // }
    const getPokemon1 = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => {
                return response.json();
            }).then(response =>{
                setPokemonList(response.results)
            }).catch(err=>{
                console.log(err)
            })
    }

    return (
        <div className='container'>
            <button className='btn btn-primary' onClick={getPokemon1}>Fetch Pokémon</button>

            <div>
                <h2>List of Pokémon</h2>
                <div>
                    <ul>
                        {pokemonList.map((pokemon,index) =>
                            <li key={index}>{pokemon.name} </li>
                        )}
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PokemonFetch