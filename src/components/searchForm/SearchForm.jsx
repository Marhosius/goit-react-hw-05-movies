import React from 'react';
import css from './SearchForm.module.css';
import propTypes from 'prop-types';

const SearchForm = ({ submitHandler }) => {
    const onSubm = (e) => {
        e.preventDefault()
        const { value } = e.target[0];
        submitHandler(value)
    }
    return (
        <form className={css.searchForm} onSubmit={onSubm}>
            <input
                type="text"
                autoFocus
                placeholder="Search movies"
                className={css.formInput} />
            <button className={css.formSubmit} type='submit'>Search</button>
        </form>
    )
}

SearchForm.propTypes = {
    submitHandler: propTypes.func.isRequired
}

export default SearchForm
