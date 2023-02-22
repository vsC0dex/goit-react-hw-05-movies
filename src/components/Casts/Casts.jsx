import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import { fetchCredits } from 'shared/services/FetchMoviesApi';

import styles from './casts.module.css';

const Casts = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchCredits(movieId);
        setMovieCast(cast);
      } catch ({ response }) {
        setError(true);
        console.log(response.data.message);
      }
    };
    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {error && <NotFoundPage />}
      {movieCast.length ? (
        <ul className={styles.list}>
          {movieCast.slice(0, 12).map(actor => (
            <li key={actor.cast_id} className={styles.items}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : `https://via.placeholder.com/200`
                }
                alt={`${actor.name}`}
              />
              <div>
                <p>{actor.name}</p>
                <p>
                  Character:
                  <span>{actor.character}</span>
                </p>
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

export default Casts;
