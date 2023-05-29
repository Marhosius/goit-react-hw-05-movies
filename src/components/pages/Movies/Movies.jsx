import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getSearchingMovie } from 'API/api'
import MoviesLink from 'components/moviesLink/MoviesLink'

const Movies = () => {
    const [searchParams, setsearchParams] = useSearchParams()
    const [movieList, setmovieList] = useState([])
    const submitHandler = (e) => {
        e.preventDefault()
        const { value } = e.target[0];
        setsearchParams({ q: value })
    }

    useEffect(() => {
        if (!movieList.length) {
            const api = async () => {
                const { data: { results } } = await getSearchingMovie(`${searchParams.get(`q`)}`)
                setmovieList([...results])

            };
            api();
        }
    }, [searchParams, movieList])

    return (
        <div>
            <form className="searchForm" onSubmit={submitHandler}>
                <input
                    type="text"
                    autoFocus
                    placeholder="Search movies"
                    className="formInput" />
                <button className="formSubmit" type='submit'>Search</button>
            </form>
            <ul className="movieList">
                {movieList.length ? movieList.map(({ title, id }) => <MoviesLink key={id} title={title} id={`${id}`} />) : ""}
            </ul>
        </div>

    )
}

export default Movies