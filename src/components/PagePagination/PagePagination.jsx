import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import style from './PagePagination.module.scss'
import { instance } from '../assets/axiosUrl'
import { getProductsPerPage } from '../../redux/reducers/ProductReducer/ProductReducer'
import { useLocation, useSearchParams } from 'react-router-dom'

const PagePagination = ({ cardOnPage, productItems, categoryName, categoryNameShort }) => {
  const theme = useSelector((state) => state.UIStateReducer.lightTheme)
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('startPage')) || 1)
  const [params, setParams] = useState(`perPage=${cardOnPage}&startPage=${currentPage}`)
  const [totalPages, setTotalPages] = useState(
    Math.ceil(productItems.length / cardOnPage)
  )
  const location = useLocation()
  const dispatch = useDispatch()

  const fetchProducts = useCallback(async () => {
    const { data } = await instance.get(
      `/api/products/filter?${params}`
    )
    return data
  }, [params])

  useEffect(() => {
    if (location.search.length === 0) {
      setSearchParams({
        perPage: cardOnPage,
        startPage: 1
      })
      setCurrentPage(1)
    }
  }, [location.search.length, cardOnPage, searchParams, setSearchParams])

  useEffect(() => {
    let newParams = categoryName !== undefined
      ? `${categoryName}perPage=${cardOnPage}&startPage=${currentPage}`
      : `perPage=${cardOnPage}&startPage=${currentPage}`

    const paramsObject = {
      perPage: cardOnPage,
      startPage: currentPage
    }
    if (categoryName !== undefined) {
      paramsObject.categories = categoryNameShort
    }

    if (location.search.length > 0) {
      for (const [key, value] of searchParams.entries()) {
        paramsObject[key] = value
      }

      paramsObject.startPage = currentPage
      paramsObject.perPage = cardOnPage
      const paramStrings = Object.entries(paramsObject).map(
        ([key, value]) => `${key}=${value}`
      )

      newParams = paramStrings.join('&')
    } else {
      setParams('')
    }

    if (paramsObject.startPage === 1 && paramsObject.perPage === 12) {
      delete paramsObject.startPage
      delete paramsObject.perPage
    }

    setSearchParams(paramsObject)
    setParams(newParams)
  }, [location.search, currentPage, searchParams, cardOnPage, setSearchParams, categoryName, categoryNameShort])

  const { data } = useQuery(
    ['products', params, searchParams],
    fetchProducts,
    { keepPreviousData: true }
  )

  useEffect(() => {
    if (data) {
      dispatch(getProductsPerPage(data.products))
      if (data.productsQuantity <= cardOnPage) {
        setTotalPages(1)
        setCurrentPage(1)
      } else {
        setTotalPages(Math.ceil(data.productsQuantity / cardOnPage))
      }
    }
  }, [data, cardOnPage, dispatch, searchParams])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1)
  }
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
  )
}

export default PagePagination
