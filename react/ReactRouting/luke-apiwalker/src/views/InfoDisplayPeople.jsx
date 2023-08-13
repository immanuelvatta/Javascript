import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const InfoDisplayPeople = () => {
  const [character, setCharacter] = useState("null");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() =>{
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(response => {setCharacter(response.data)})
    .catch(err => {
      console.log(err)
      navigate("/error")
    })

  }, [id])

  return (
    <div className='container'>
      <h2>Name: {character.name} </h2>
      <h4>Height: {character.height}</h4>
      <h4>Mass: {character.mass} kg</h4>
      <h4>Hair Color: {character.hair_color}</h4>
      <h4>Skin Color: {character.skin_color}</h4>
    </div>
  )
}

export default InfoDisplayPeople;