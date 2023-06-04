import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'API/api';
import css from './Reviews.module.css';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setreviews] = useState([])
    useEffect(() => {
        const api = async () => {
            const { data: { results } } = await getMovieInfo(`${movieId}`, 'reviews')
            setreviews([...results])
        };
        api();
    }, [movieId])
    return (
        <ul className={css.reviewsList}>
            {reviews.length ? reviews.map(({ author, content, id }) => {
                return <li className={css.reviewsListItm} key={id}>
                    <p className={css.reviewsListName}>{author}</p>
                    <p className={css.reviewsListText}>{content}</p>
                </li>
            }) : <li className={css.reviewsListItm} id='def-idreviewsListItm'>
                <p className={css.reviewsListName}>No reviews found</p>
            </li>}
        </ul>
    )
}

export default Reviews
