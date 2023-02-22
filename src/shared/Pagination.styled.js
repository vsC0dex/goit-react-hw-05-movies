import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationStyled = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  justify-content: flex-start;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
  & li {
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px;
    color: ${p => 'black'};
    transition: color 300ms linear, border 300ms linear;
    :hover:not(.disabled) {
      color: ${p => 'red'};
      border: 1px solid red;
    }
  }
  & .activePage {
    color: ${p => 'red'};
    border: 1px solid red;
  }
  & a {
    padding: 0 8px;
    cursor: pointer;
  }
  & a.disabled {
    cursor: default;
  }
`;
