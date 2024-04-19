import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

//const initialState = {
//    logged: false,
//}

//ya no necesitamos el initialState en el use reducer y por eso lo cambiamos a un {} vacio

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user
  }
} 

export const AuthProvider = ({ children }) => { 
    
    //useReducer( authReducer, initialState); o´
    const [ authState, dispatch ] = useReducer( authReducer, {}, init);

    //Necesitamos una variable que se encuentre en todo el sistema para manejar el login, por ello crearemos esto
    const login =  ( name = '') => {
      
      const user = { id: 'abc', name }
      const action = { type: types.login, payload : user }  

      localStorage.setItem('user' , JSON.stringify( user ))


      dispatch(action);
    }

    const logout = () => {
      localStorage.removeItem('user');
      const action = {  type : types.logout, }
      dispatch(action);
    }


  return (
    <AuthContext.Provider value = {{
      ...authState,
      login: login,
      logout:logout
     }}> 
        { children }
    </AuthContext.Provider>
  )
}
