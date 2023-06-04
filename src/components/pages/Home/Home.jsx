import React, { useState, useEffect } from 'react'
import { getTrending } from 'API/api'
import MoviesLink from 'components/moviesLink/MoviesLink'
import css from './Home.module.css'
const Home = () => {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        if (!movies.length) {
            console.log(`home render`)
            const api = async () => {
                const { data: { results } } = await getTrending()
                setmovies([...results])
            };
            api();
        }
    }, [movies])

    return (
        <div className={css.home}>
            <h2 className={css.homeTitle}>Trending Today</h2>
            <ul className={css.homeList}>
                {movies.length && movies.map(({ title, id }) => <MoviesLink key={id} title={title} id={`movies/${id}`} />)}
            </ul>
        </div>
    )
}

export default Home
