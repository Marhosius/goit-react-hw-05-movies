import React, { useState, useEffect } from 'react'
import { getTrending } from 'API/api'
import css from './Home.module.css'
import MoviesList from 'components/moviesList/MoviesList'
const Home = () => {
    const [movies, setmovies] = useState(null)
    useEffect(() => {
        if (!movies) {
            const api = async () => {
                const { data: { results } } = await getTrending()
                setmovies([...results])
            };
            api();
        }
    }, [movies])

    if (!movies) return
    return (
        <div className={css.home}>
            <h2 className={css.homeTitle}>Trending Today</h2>
            <MoviesList movies={movies} path="movies/"></MoviesList>
        </div>
    )
}

export default Home
