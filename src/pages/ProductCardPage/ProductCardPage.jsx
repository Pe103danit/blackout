import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import Spinner from '../../components/Spinner/Spinner'
import { useSelector } from 'react-redux'

const ProductCardPage = () => {
  const productIsLoading = useSelector(state => state.ProductReducer.productIsLoading)

  return (
    <ProductCard/>
  )
}
export default ProductCardPage