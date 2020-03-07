import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return(
        <div>
            <nav>
                <Link to='/'>Sign up</Link>
                <Link to='/login'>Login</Link>
                <Link to='/login' onClick={localStorage.removeItem('token')} >Log Out</Link>
            </nav>
        </div>
    )
}
export default NavBar