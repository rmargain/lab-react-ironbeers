import React from 'react'
import {Link} from 'react-router-dom'
import homeImage from './../home.png'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <img src={homeImage} alt='home'/>
            </Link>
        </nav>
    )
}
