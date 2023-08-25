import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import style from './PagePagination.module.scss';

const PagePagination = ({ cardOnPage, productItems, changesOnPage }) => {
    const itemsPerPage = cardOnPage;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(productItems.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = productItems.slice(startIndex, endIndex);
    // changesOnPage(currentItems);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newCurrentItems = productItems.slice(startIndex, endIndex);
        changesOnPage(newCurrentItems);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const theme = useSelector(state => state.UIStateReducer.lightTheme);

    return (
        <div className={style.pagination}>
            <button className={`${style.pagination__btn} ${theme ? '' : style.pagination__btn__darkTheme}`} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`${index + 1 === currentPage ? style.activePage : ''} ${style.pagination__btn} ${theme ? '' : style.pagination__btn__darkTheme}`}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <button className={`${style.pagination__btn} ${theme ? '' : style.pagination__btn__darkTheme}`} onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default PagePagination;
