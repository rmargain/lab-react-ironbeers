import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <img src='home.png' alt='home'/>
            </Link>
        </nav>
    )
}
