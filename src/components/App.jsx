import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Triangle } from 'react-loader-spinner';

import Navbar from 'components/Navbar/Navbar';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Casts = lazy(() => import('./Casts/Casts'));
const Reviewers = lazy(() => import('./Rewiewers/Reviewers'));

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Triangle
            height="180"
            width="180"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            visible={true}
          />
        }
      >
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
      </Suspense>
    </BrowserRouter>
  );
};
