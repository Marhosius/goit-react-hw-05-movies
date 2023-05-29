import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'API/api'

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setreviews] = useState([])
    useEffect(() => {
        if (!reviews.length) {
            const api = async () => {
                const { data: { results } } = await getMovieInfo(`${movieId}`, 'reviews')
                setreviews([...results])
            };
            api();
        }
    }, [reviews, movieId])
    return (
        <ul className="reviewsList">
            {reviews.length ? reviews.map(({ author, content, id }) => {
                return <li className="reviewsListItm" id={id}>
                    <p className="reviewsListName">{author}</p>
                    <p className="reviewsListText">{content}</p>
                </li>
            }) : <li className="reviewsListItm" >
                <p className="reviewsListName">No reviews found</p>
            </li>}
        </ul>
    )
}

export default Reviews
