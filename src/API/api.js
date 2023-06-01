import axios from 'axios';
import Notiflix from 'notiflix';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmNkYTc5NGI1YzdhOWU5OTI1OThkNmQ1NTY1ODU5OCIsInN1YiI6IjY0NzExNzBmYmUyZDQ5MDEzM2EzOGE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jfZ3RR84pJADZLl4dkLKAprXQjhw6uOCeb899-OWaGU'
    }
};

export const getTrending = async () => await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .catch(function (error) { Notiflix.Notify.failure(`${error.message}`) });

export const getSearchingMovie = async (find, page) => await axios.get(`https://api.themoviedb.org/3/search/movie?query=${find}&include_adult=true&language=en-US&page=${page}`, options)
    .catch(function (error) { Notiflix.Notify.failure(`${error.message}`) });

export const getMovieById = async (id) => await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .catch(function (error) { Notiflix.Notify.failure(`${error.message}`) });

export const getMovieInfo = async (id, option) => await axios.get(`https://api.themoviedb.org/3/movie/${id}/${option}?language=en-US`, options)
    .catch(function (error) { Notiflix.Notify.failure(`${error.message}`) });

