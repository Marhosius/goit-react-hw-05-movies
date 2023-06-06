import MoviesLink from 'components/moviesLink/MoviesLink';
import React from 'react';
import css from './MoviesList.module.css';
import propTypes from 'prop-types';

const MoviesList = ({ movies, path }) => {
    if (!movies) return
    return (
        <ul className={css.homeList}>
            {movies.length && movies.map(({ title, id }) =>
                <MoviesLink key={id} title={title} id={`${path}${id}`} />)}
        </ul>
    )
}

MoviesList.propTypes = {
    movies: propTypes.array,
    path: propTypes.string
}

export default MoviesList
