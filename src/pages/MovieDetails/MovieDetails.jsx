import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styles from './movie-details.module.css';

import { fetchMovieById } from 'shared/services/FetchMoviesApi';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieDetails = async id => {
      try {
        const result = await fetchMovieById(id);
        setMovieInfo(result);
      } catch ({ response }) {
        console.log(response.data.message);
        setError(true);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  const goBack = () => navigate(from);

  return (
    <>
      <button className={styles.button} onClick={goBack}>
        Go Back
      </button>
      {error && <NotFoundPage />}
      {movieInfo && (
        <div className={styles.container}>
          <img
            src={
              movieInfo.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`
                : 'https://via.placeholder.com/200'
            }
            alt={movieInfo.tagline}
          />
          <div className={styles.description}>
            <h1>
              <span>{movieInfo.title}</span>
              <span>{`(${movieInfo.release_date.slice(0, 4)})`}</span>
            </h1>
            <p>Popularity: {Math.ceil(movieInfo.popularity)}</p>
            <p>
              <span>Overview</span>
              {movieInfo.overview}
            </p>
            <p>
              <span>Genre:</span>
              <span>
                {movieInfo.genres &&
                  movieInfo.genres.map(genre => genre.name).join(', ')}
              </span>
            </p>
          </div>
        </div>
      )}

      <div className={styles.secondaryContainer}>
        <NavLink to="cast" state={{ from }}>
          Cast
        </NavLink>
        <NavLink to="reviews" state={{ from }}>
          Reviews
        </NavLink>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
