import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieIMG } from 'API/api';
import css from './Images.module.css';
import { nanoid } from 'nanoid'

const defaultPicture = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`;

const Images = () => {
    const { movieId } = useParams();
    const [images, setimages] = useState(null)
    useEffect(() => {
        const api = async () => {
            const { data: { backdrops, posters } } = await getMovieIMG(`${movieId}`)
            setimages([...backdrops, ...posters])
        };
        api();
    }, [movieId])

    if (!images) return

    return (
        <ul className={css.imagesList}>
            {images?.map(({ file_path: path }) => {
                const fullUrl = path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPicture;
                return <li className={css.imagesListItm} key={nanoid(6)}>
                    <img src={fullUrl} alt="" className={css.imagesListImg} width={300} height={400} />
                </li>
            })}
        </ul>
    )
}

export default Images