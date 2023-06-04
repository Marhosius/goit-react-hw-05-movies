import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

const Header = () => {
    return (
        <nav className={css.head}>
            <div className={css.headContainer} >
                <div className={css.headNavbar}>
                    <NavLink className={css.headNavLink} to='/'>Home</NavLink >
                    <NavLink className={css.headNavLink} to='/Movies'>Movies</NavLink>
                </div>

            </div>
        </nav>
    )
}

export default Header
