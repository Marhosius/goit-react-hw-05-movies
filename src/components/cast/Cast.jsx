import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'API/api';
import css from './Cast.module.css';


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setcast] = useState([])
    useEffect(() => {
        if (!cast.length) {
            console.log(`render cast`)
            const api = async () => {
                const { data: { cast } } = await getMovieInfo(`${movieId}`, 'credits')
                setcast([...cast])
            };
            api();
        }
    }, [cast, movieId])

    return (
        <ul className={css.castList}>
            {cast?.map(({ name, character, id, profile_path: path }) => {
                const fullUrl = path ? `https://image.tmdb.org/t/p/w500${path}` : "";
                return <li className={css.castListItm} key={id}>
                    <img src={fullUrl} alt="" className={css.castListImg} width={120} height={160} />
                    <p className={css.castListName}>{name}</p>
                    <p className={css.castListCharacter}>Character: {character}</p>
                </li>
            })}
        </ul>
    )
}

export default Cast