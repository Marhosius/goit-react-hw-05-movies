import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import css from './MoviesLink.module.css'

const MoviesLink = ({ title, id }) => {
    const location = useLocation()
    return (
        <li className={css.linkItm}>
            <Link className={css.movieLink} state={location} to={id} > {title}</Link >
        </li>
    )
}

export default MoviesLink