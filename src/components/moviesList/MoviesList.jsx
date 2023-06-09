import MoviesLink from 'components/moviesLink/MoviesLink';
import React from 'react';
import css from './MoviesList.module.css';
import propTypes from 'prop-types';

const MoviesList = ({ movies }) => {
    if (!movies) return
    return (
        <ul className={css.homeList}>
            {movies?.length > 0 && movies.map(({ title, id }) =>
                <MoviesLink key={id} title={title} id={id} />)}
        </ul>
    )
}

MoviesList.propTypes = {
    movies: propTypes.array
}

export default MoviesList
