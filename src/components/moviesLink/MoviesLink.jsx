import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MoviesLink = ({ title, id }) => {
    const location = useLocation()
    return (
        <li className="linkItm">
            <Link className="movieLink" state={location} to={id} > {title}</Link >
        </li>
    )
}

export default MoviesLink