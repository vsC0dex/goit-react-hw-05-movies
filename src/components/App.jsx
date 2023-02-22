import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Casts from './Casts/Casts';
import Reviewers from './Rewiewers/Reviewers';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Casts />} />
          <Route path="reviews" element={<Reviewers />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
