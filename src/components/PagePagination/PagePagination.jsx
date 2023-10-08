import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import style from './PagePagination.module.scss'
import { useSearchParams } from 'react-router-dom'

const PagePagination = ({ totalPages }) => {
  const [requestParameters, setRequestParameters] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(requestParameters.get('page') && Number(requestParameters.get('page')) || 1);
  const theme = useSelector((state) => state.UIStateReducer.lightTheme);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setRequestParameters({
      categories: requestParameters.get('categories') || '',
      minPrice: requestParameters.get('minPrice') || '',
      maxPrice: requestParameters.get('maxPrice') || '',
      page: page,
      sort: requestParameters.get('sort') || ''
    })
  };

  const handleNextPage = () => {
    const page = currentPage + 1;
    setCurrentPage(page);
    setRequestParameters({
      categories: requestParameters.get('categories') || '',
      minPrice: requestParameters.get('minPrice') || '',
      maxPrice: requestParameters.get('maxPrice') || '',
      page: page
    })
  };

  const handlePrevPage = () => {
    const page = currentPage - 1;
    setCurrentPage(page);
    setRequestParameters({
      categories: requestParameters.get('categories') || '',
      minPrice: requestParameters.get('minPrice') || '',
      maxPrice: requestParameters.get('maxPrice') || '',
      page: page
    })
  };

  return (
    <div className={style.pagination}>
      <button
        className={`${style.pagination__btn} ${theme ? '' : style.pagination__btn__darkTheme} ${
          currentPage === 1 ? style.activePage : ''
        }`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`${index + 1 === currentPage ? style.activePage : ''} ${style.pagination__btn} ${
            theme ? '' : style.pagination__btn__darkTheme
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`${style.pagination__btn} ${theme ? '' : style.pagination__btn__darkTheme} ${
          currentPage === totalPages ? style.activePage : ''
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PagePagination;
