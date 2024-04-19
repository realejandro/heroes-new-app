import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

const LoginPage = () => {

  const { login } = useContext( AuthContext )
  
  const navigate = useNavigate();

  const onLogin = () => {
    
    const lastPath = localStorage.getItem('lastPath')
    
    login( 'Alejandro' );

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className='container mt-5'>
      <h1>
        Login
      </h1>
      <hr/>
      <button className='btn btn-dark' onClick={ onLogin }>login</button>
    </div>
  )
}

export default LoginPage