import React from 'react'
import Obi from '../img/ObiWanKenobi.jpeg'

const Error = (props) => {
    return (
        <div className='container'>
            <h2>These aren't the droids you're looking for!</h2>
            <img className='mw-20' src={Obi} alt = "Obi-Wan"/>
        </div>
    )
}

export default Error