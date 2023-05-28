import React, { useState, useEffect } from 'react'
import { getTrending } from 'API/api'
import MoviesLink from 'components/moviesLink/MoviesLink'

const Home = () => {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        if (!movies.length) {
            const api = async () => {
                const { data: { results } } = await getTrending()
                setmovies([...results])
            };
            api();
        }
    }, [movies])

    return (
        <div>
            <h2 className="title">Trending Today</h2>
            <ul className="listOfmovies">
                {movies.length && movies.map(({ title, id }) => <MoviesLink key={id} title={title} id={`movies/${id}`} />)}
            </ul>
        </div>
    )
}

export default Home
