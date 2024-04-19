import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../heroes/pages/LoginPage'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const AppRouter = () => {
  return (
    <>
        <Routes>
            {/*This is my public route */}
            <Route 
              path='/login'
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            {/* This is my private route */}
            <Route 
              path='/*' element={ 
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>}
            />
            { /* Estas eran mis rutas pasadas */ }
            { /*<Route path='login' element={ <LoginPage />} />*/ }
            { /*<Route path='/*' element={ <HeroesRoutes /> } /> */ }
        </Routes>
    </>
  )
}

export default AppRouter