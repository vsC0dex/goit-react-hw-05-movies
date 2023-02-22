import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import { fetchReviews } from 'shared/services/FetchMoviesApi';

const Reviewers = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const { results } = await fetchReviews(movieId);
        setReviews(results);
      } catch ({ response }) {
        setError(true);
        console.log(response.data.message);
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {error && <NotFoundPage />}
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <div>
                <h3>{author}</h3>
                <p>{content}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

Reviewers.defaultProps = [];

Reviewers.propTypes = {
  id: PropTypes.number,
  autor: PropTypes.string,
  content: PropTypes.string,
};

export default Reviewers;
