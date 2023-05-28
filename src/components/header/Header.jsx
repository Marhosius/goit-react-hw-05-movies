import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="">
            <div className="" >
                <div className="navbar-nav">
                    <NavLink className="nav-link" to='/'>Home</NavLink >
                    <NavLink className="nav-link" to='/Movies'>Movies</NavLink>
                </div>

            </div>
        </nav>
    )
}

export default Header
