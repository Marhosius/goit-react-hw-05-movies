import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'API/api';
import css from './MovieDetails.module.css';

const defaultPicture = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`;


const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setmovie] = useState(null)
    const location = useLocation()
    const validLocation = useRef(location?.state?.from ?? "/Movies")

    useEffect(() => {
        const api = async () => {
            const { data } = await getMovieById(`${movieId}`)
            setmovie({ ...data })
        };
        api();
    }, [movieId])

    if (!movie) return
    const { title, overview, genres, poster_path: path, vote_average: vote, release_date: release } = movie
    const fullUrl = path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPicture;
    const votes = `User Score: ${Math.round((vote * 10))}%`;
    const releaseDate = `(${release?.slice(0, 4)})`;

    return (

        < div className={css.movieContainer} >
            <Link className={css.backBtn} to={validLocation.current}>Back</Link>
            <div className={css.movieInfo}>
                <div className={css.movieInfoImgWrap}>
                    <img src={fullUrl} alt="" width={250} height={350} className={css.movieInfoIm} />
                </div>
                <div className={css.movieInfoWrap}>
                    <h2 className={css.movieTitle}>{title} {releaseDate}</h2>
                    <p className={css.movieInfoText}>{votes}</p>
                    <h3 className={css.movieInfoOv}>Overview</h3>
                    <p className={css.movieInfoText}>{overview}</p>
                    <h4 className={css.movieInfoGen}> Genres</h4 >
                    <p className={css.movieInfoText}>{(genres?.map(({ name }) => `${name} `))}</p>
                </div>
            </div>
            <div className={css.addInfo}>
                < h3 className={css.addInfoTitle} > Additional information</h3 >
                <ul className={css.addInfoOptionsList}>
                    <li className={css.addInfoItm}>
                        <Link className={css.addInfoItmLink} to='cast' >Cast</Link>
                    </li>
                    <li className={css.addInfoItm}>
                        <Link className={css.addInfoItmLink} to='reviews'>Reviews</Link>
                    </li>
                </ul>
                <div className={css.addInfoOutlet}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div >
        </div >
    )
}

export default MovieDetails
