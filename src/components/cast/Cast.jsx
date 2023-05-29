import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'API/api'

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setcast] = useState([])
    useEffect(() => {
        if (!cast.length) {
            const api = async () => {
                const { data: { cast } } = await getMovieInfo(`${movieId}`, 'credits')
                setcast([...cast])
            };
            api();
        }
    }, [cast, movieId])

    return (
        <ul className="castList">
            {cast?.map(({ name, character, id, profile_path: path }) => {
                const fullUrl = path ? `https://image.tmdb.org/t/p/w500${path}` : "";
                return <li className="castListItm" id={id}>
                    <img src={fullUrl} alt="" className="castListImg" width={80} height={100} />
                    <p className="castListName">{name}</p>
                    <p className="castListCharacter">Character: {character}</p>
                </li>
            })}
        </ul>
    )
}

export default Cast
