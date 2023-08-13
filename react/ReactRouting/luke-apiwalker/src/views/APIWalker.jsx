import React from 'react'
import SearchForm from '../components/SearchForm'
import { Route, Routes } from 'react-router-dom'
import InfoDisplayPeople from './InfoDisplayPeople'
import InfoDisplayPlanet from './InfoDisplayPlanet'
import Error from './Error'

const APIWalker = () => {
    return (
        <div>
            <SearchForm/>
            <Routes>
                <Route path='/people/:id' element={<InfoDisplayPeople />} />
                <Route path='/planets/:id' element={<InfoDisplayPlanet />} />
                <Route path='/error' element={<Error />} />
            </Routes>
        </div>
    )
}

export default APIWalker