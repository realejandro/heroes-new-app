import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';



const Navbar = () => {

    const { user, logout } = useContext( AuthContext )
    
    const navigate = useNavigate(); //This is a custom hook from react-router

    const onLogout = () => {
        logout();
        navigate('/login');
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">        
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive  ? 'active' : '' }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive  ? 'active' : '' }` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2  justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-light'>{ user?.name /*este ? indica que si tiene un valor continue y si no, no!*/ }</span>
                    <button
                        className="nav-item nav-link btn" 
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;