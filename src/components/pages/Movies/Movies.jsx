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
        if (searchParams.get(`q`)) {
            console.log(`render movie list`)
            const api = async () => {
                const { data: { results } } = await getSearchingMovie(`${searchParams.get(`q`)}`, 1)
                setmovieList([...results])

            };
            api();
        }
    }, [searchParams])

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
                {movieList.length ? movieList.map(({ title, id }) => <MoviesLink key={id} title={title} id={`${id}`} />) :
                    (searchParams.get(`q`) ? <li><p className="reviewsListName">No movies found</p></li> : "")}
            </ul>
        </div>

    )
}

export default Movies