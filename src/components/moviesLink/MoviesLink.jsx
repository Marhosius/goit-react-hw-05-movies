import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import css from './MoviesLink.module.css';
import propTypes from 'prop-types';

const MoviesLink = ({ title, id }) => {
    const location = useLocation()
    return (
        <li className={css.linkItm}>
            <Link className={css.movieLink} state={{ from: location }} to={id} > {title}</Link >
        </li>
    )
}

MoviesLink.propTypes = {
    title: propTypes.string.isRequired,
    id: propTypes.string.isRequired
}

export default MoviesLink