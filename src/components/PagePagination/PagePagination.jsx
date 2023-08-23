import React, { useState } from 'react';
import style from './PagePagination.module.scss';

const PagePagination = ({ cardOnPage, productItems, changesOnPage }) => {
    const itemsPerPage = cardOnPage;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = productItems.slice(startIndex, endIndex);

    const totalPages = Math.ceil(productItems.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        changesOnPage(currentItems);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            changesOnPage(currentItems);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            changesOnPage(currentItems);
        }
    };

    return (
        <div className={style.pagination}>
            <button className={style.pagination__btn} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`${index + 1 === currentPage ? style.activePage : ''} ${style.pagination__btn}`}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <button className={style.pagination__btn} onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>)
}

export default PagePagination