import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'API/api';


const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setmovie] = useState({})
    const { title, overview, genres, poster_path: path, vote_average: vote } = movie
    const fullUrl = `https://image.tmdb.org/t/p/w500${path}`
    const votes = `User Score: ${Math.round((vote * 10))}%`

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
                    <h2 className="movieTitle">{title}</h2>
                    <p className="movieInfoText">{votes}</p>
                    <h3 className="movieInfoOv">Overview</h3>
                    <p className="movieInfoText">{overview}</p>
                    <h4 className="movieInfoGen">Genres</h4>
                    <p className="movieInfoText">{(genres?.map(({ name }) => `${name} `))}</p>
                </div>
            </div>
        </div >
    )
}

export default MovieDetails
