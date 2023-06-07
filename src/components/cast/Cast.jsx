import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'API/api';
import css from './Cast.module.css';

const defaultPicture = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`;

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setcast] = useState(null)
    useEffect(() => {
        const api = async () => {
            const { data: { cast } } = await getMovieInfo(`${movieId}`, 'credits')
            setcast([...cast])
        };
        api();
    }, [movieId])

    if (!cast) return

    return (
        <ul className={css.castList}>
            {cast?.map(({ name, character, id, profile_path: path }) => {
                const fullUrl = path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPicture;
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
