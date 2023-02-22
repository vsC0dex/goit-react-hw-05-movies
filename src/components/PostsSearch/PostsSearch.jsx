import { useState, memo } from 'react';
import PropTypes from 'prop-types';

import initialState from './initialState';

import styles from './posts-search.module.css';

const PostsSearch = ({ onSubmit }) => {
  console.log(onSubmit);

  const [state, setState] = useState({ ...initialState });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value.trim() };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (state.search.trim().toLowerCase() === '') {
      return console.log('Enter correct search!');
    }

    onSubmit(state.search);
    setState({ ...initialState });
  };

  const { query } = state;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          name="search"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          required
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default memo(PostsSearch);

PostsSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
