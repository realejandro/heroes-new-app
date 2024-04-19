import React from 'react'
import Navbar from '../../ui/components/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MarvelPage from '../pages/MarvelPage'
import DcPages from '../pages/DcPage'
import HeroPage from '../pages/HeroPage'
import SearchPage from '../pages/SearchPage'


const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={ <HomePage /> }></Route>
            <Route path='marvel' element={ <MarvelPage /> }></Route>
            <Route path='dc' element={ <DcPages /> }></Route>
            <Route path='search' element={ <SearchPage /> }></Route>
            <Route path='hero/:id' element={ <HeroPage /> }></Route>
        </Routes>
    </>
  )
}

export default HeroesRoutes