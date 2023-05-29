import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'API/api';


const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setmovie] = useState({})
    const { title, overview, genres, poster_path: path, vote_average: vote, release_date: release } = movie
    const fullUrl = path ? `https://image.tmdb.org/t/p/w500${path}` : "";
    const votes = `User Score: ${Math.round((vote * 10))}%`;
    const releaseDate = `(${release?.slice(0, 4)})`

    useEffect(() => {
        if (!movie.length) {
            const api = async () => {
                const { data } = await getMovieById(`${movieId}`)
                setmovie({ ...data })
            };
            api();
        }
    }, [movie, movieId])
    return (
        < div className='movieContainer' >
            <div className="movieInfo">
                <div className="movieInfoImgWrap"><img src={fullUrl} alt="" width={300} height={400} className="movieInfoImg" /></div>
                <div className="movieInfoWrap">
                    <h2 className="movieTitle">{title} {releaseDate}</h2>
                    <p className="movieInfoText">{votes}</p>
                    <h3 className="movieInfoOv">Overview</h3>
                    <p className="movieInfoText">{overview}</p>
                    <h4 className="movieInfoGen">Genres</h4>
                    <p className="movieInfoText">{(genres?.map(({ name }) => `${name} `))}</p>
                </div>
            </div>
            <div className="addInfo">
                <h3 className="addInfoTitle">Additional information</h3>
                <ul className="addInfoOptionsList">
                    <li className="addInfoItm">
                        <Link to='cast' >Cast</Link>
                    </li>
                    <li className="addInfoItm">
                        <Link to='reviews'>Reviews</Link>
                    </li>
                </ul>
                <div className="addInfoOutlet">
                    <Outlet />
                </div>
            </div>
        </div >
    )
}

export default MovieDetails
