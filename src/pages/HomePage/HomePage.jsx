import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';

import { fetchTrending } from 'shared/services/FetchMoviesApi';
import MovieList from 'components/MovieList/MovieList';
import { PaginationStyled } from 'shared/Pagination.styled';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const currentPage = Number(params.get('page'))
    ? Number(params.get('page'))
    : 1;

  useEffect(() => {
    const getTrending = async page => {
      try {
        setLoading(true);
        const { results, total_pages } = await fetchTrending(page);
        setItems(results);
        setTotalPages(total_pages);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTrending(currentPage);
  }, [currentPage]);

  const handleClick = e => {
    setParams({ page: e.selected + 1 });
  };

  return (
    <>
      <h1>Trending today</h1>
      <MovieList results={items} />
      {loading && (
        <Triangle
          height="180"
          width="180"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          visible={true}
        />
      )}
      {totalPages > 1 && (
        <PaginationStyled
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handleClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          disabledLinkClassName="disabled"
          activeClassName="activePage"
          forcePage={currentPage - 1}
        />
      )}
    </>
  );
};

export default HomePage;
