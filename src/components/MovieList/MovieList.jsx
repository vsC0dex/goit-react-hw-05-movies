import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './movie-list.module.css';

const MovieList = ({ results }) => {
  const location = useLocation();
  const elements = results.map(({ id, title }) => (
    <li key={id} className={styles.item}>
      <NavLink
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <p className={styles.text}>{title}</p>
      </NavLink>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default MovieList;

MovieList.defaultProps = {
  results: [],
};

NavLink.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
