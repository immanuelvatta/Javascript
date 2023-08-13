import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const InfoDisplayPlanet = () => {
  const [planet, setPlanet] = useState("null");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() =>{
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(response => {setPlanet(response.data)})
    .catch(err => {
      console.log(err)
      navigate('/error')

    })

  }, [id])
  return (
    <div className='container'>
      <h2>Name: {planet.name} </h2>
      <h4>Climate: {planet.climate}</h4>
      <h4>Terrain: {planet.terrain} kg</h4>
      {/* {planet.surface_water < 1 ? planet.surface_water = false : planet.surface_water = true} */}
      <h4>Surface Water: {parseInt(planet.surface_water) > 0 ? 'True': 'False'}</h4>
      {/* <h4>Surface Water: {planet.surface_water}</h4> */}
      <h4>Population: {planet.population}</h4>
    </div>
  )
}

export default InfoDisplayPlanet