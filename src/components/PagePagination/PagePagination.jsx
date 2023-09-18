import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery, useQueryClient} from 'react-query'
import { setCategories } from './setCategories'

import style from './PagePagination.module.scss'
import { instance } from '../assets/axiosUrl'
import { getProductsPerPage } from '../../redux/reducers/ProductReducer/ProductReducer'
import { useLocation } from 'react-router-dom'

const PagePagination = ({ cardOnPage, productItems }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const location = useLocation()
  const totalPages = Math.ceil(productItems.length / cardOnPage)
  const theme = useSelector(state => state.UIStateReducer.lightTheme);
  const GeneratePathName = (pathname) => {
    return setCategories(pathname.substring(1))
  }
  const getProductsPage = useCallback(async (req) => {
    let filterCategory = ''
    if (location.pathname !== '/shop') {
      filterCategory = `categories=${GeneratePathName(location.pathname)}&`
    }
    const { data } = await instance.get(`/api/products/filter?${filterCategory}perPage=${cardOnPage}&startPage=${req.queryKey[1]}`)
    return data.products
  }, [cardOnPage, location.pathname])

  const updateListProducts = useCallback(async () => {
    await queryClient.prefetchQuery(['products', currentPage], getProductsPage)
  }, [currentPage, queryClient, getProductsPage])

  useEffect(() => {
    updateListProducts()
    setCurrentPage(1)
  }, [updateListProducts, location.pathname])

  const { data } = useQuery(
    ['products', currentPage],
    getProductsPage,
    { keepPreviousData: true }
  )
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1)
  }
  useEffect(() => {
     updateListProducts()
  }, [updateListProducts])
  useEffect(() => {
    if (data) {
      dispatch(getProductsPerPage(data))
    }
  }, [data, dispatch])

  return (
    <div className={style.pagination}>

      <button
        className={`${style.pagination__btn} ${theme ? '' : style.pagination__btn__darkTheme} ${currentPage === 1 ? style.activePage : ''}`}
        onClick={handlePrevPage} disabled={currentPage === 1}>Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`${index + 1 === currentPage ? style.activePage : ''} ${style.pagination__btn} ${theme ? '' : style.pagination__btn__darkTheme}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`${style.pagination__btn} ${theme ? '' : style.pagination__btn__darkTheme} ${currentPage === totalPages ? style.activePage : ''}`}
        onClick={handleNextPage} disabled={currentPage === totalPages}>Next
      </button>
    </div>
  )
}

export default PagePagination
