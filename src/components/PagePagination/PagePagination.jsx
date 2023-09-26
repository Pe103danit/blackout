import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery, useQueryClient } from 'react-query'
import { setCategories } from './setCategories'

import style from './PagePagination.module.scss'
import { instance } from '../assets/axiosUrl'
import { getProductsPerPage } from '../../redux/reducers/ProductReducer/ProductReducer'
import { useLocation, useSearchParams } from 'react-router-dom'

const PagePagination = ({ cardOnPage, productItems }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [prevCategory, setPrevCategory] = useState(null)
  const [totalPages, setTotalPages] = useState(Math.ceil(productItems.length / cardOnPage))
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const categorySelectFilter = useSelector(state => state.ProductReducer.categories)
  const priceFilter = useSelector(state => state.ProductReducer.priceFilter)
  const categorySelectFilterString = categorySelectFilter ? categorySelectFilter.join(',') : ''
  const [queryCategorySelectFilterString, setQueryCategorySelectFilterString] = useState('')
  const selectValue = useSelector(state => state.ProductReducer.selectValue)
  const selectValueData = selectValue || ''

  const priceMinReq = priceFilter[0]
  const priceMaxReq = priceFilter[1]

  useEffect(() => {
    setCurrentPage(1)
  }, [categorySelectFilter])

  useEffect(() => {
    const categorySelectFilterValue = categorySelectFilter ? categorySelectFilter.join(',') : ''
    setQueryCategorySelectFilterString(categorySelectFilterValue ? `categories=${categorySelectFilterValue}&` : '')
  }, [categorySelectFilterString, categorySelectFilter])

  const GeneratePathName = (pathname) => {
    return setCategories(pathname.substring(1))
  }

  const getProductsPage = useCallback(async (req) => {
    let filterCategory = ''
    let priceReq = ''
    if (location.pathname !== '/shop') {
      filterCategory = `categories=${GeneratePathName(location.pathname)}&`
    }

    if (priceMinReq || priceMaxReq) {
      priceReq = `minPrice=${priceMinReq}&maxPrice=${priceMaxReq}&`
    }

    const { data } = await instance.get(`/api/products/filter?${filterCategory}${queryCategorySelectFilterString}${priceReq}perPage=${cardOnPage}&startPage=${req.queryKey[1]}${selectValueData}`)

    setTotalPages(Math.ceil(data.productsQuantity / cardOnPage))
    if (req.queryKey[1] === 1) {
      setSearchParams(`${queryCategorySelectFilterString}${priceReq}${selectValueData}`)
    } else {
      setSearchParams(`${queryCategorySelectFilterString}${priceReq}page=${req.queryKey[1]}${selectValueData}`)
      console.log(searchParams)
    }

    return data.products
  }, [cardOnPage, location.pathname, queryCategorySelectFilterString, priceMinReq, priceMaxReq, selectValueData, searchParams, setSearchParams])

  const updateListProducts = useCallback(async () => {
    await queryClient.prefetchQuery(['products', currentPage], getProductsPage)
  }, [currentPage, queryClient, getProductsPage])

  useEffect(() => {
    const currentCategory = GeneratePathName(location.pathname)
    if (prevCategory !== currentCategory) {
      setCurrentPage(1)
      setPrevCategory(currentCategory)
    }
    updateListProducts()
  }, [updateListProducts, location.pathname, prevCategory])

  useEffect(() => {

  }, [location.pathname])

  useEffect(() => {
    updateListProducts()
  }, [priceMinReq, priceMaxReq, updateListProducts])

  useEffect(() => {
    updateListProducts()
  }, [selectValueData, updateListProducts])

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
        onClick={handlePrevPage} disabled={currentPage === 1}
      >Prev
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
        onClick={handleNextPage} disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default PagePagination
