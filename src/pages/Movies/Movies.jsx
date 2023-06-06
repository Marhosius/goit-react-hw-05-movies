import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchingMovie } from 'API/api';
import css from './Movies.module.css'
import MoviesList from 'components/moviesList/MoviesList';
import SearchForm from 'components/searchForm/SearchForm';

const Movies = () => {
    const [searchParams, setsearchParams] = useSearchParams()
    const [movieList, setmovieList] = useState(null)
    const submitHandler = (value) => {
        setsearchParams({ q: value })
    }

    useEffect(() => {
        if (searchParams.get(`q`)) {
            const api = async () => {
                const { data: { results } } = await getSearchingMovie(`${searchParams.get(`q`)}`, 1)
                setmovieList([...results])

            };
            api();
        }
    }, [searchParams])

    return (
        <div className={css.movies}>
            <SearchForm submitHandler={submitHandler}></SearchForm>
            <MoviesList movies={movieList} path=""></MoviesList>
        </div>

    )
}

export default Movies