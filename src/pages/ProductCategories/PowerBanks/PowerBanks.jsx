import React, { useEffect, useState, } from 'react'
import { instance } from '../../../components/assets/axiosUrl'
import { useQuery } from 'react-query'

import Spinner from '../../../components/Spinner/Spinner';

const PowerBanks = () => {
  const [products, setProducts] = useState([])
  const getPowerBanksProducts = async () => {
    const { data } = await instance.get('/api/products/filter?categories=Power Banks')
    return data
  }
  const { data, isLoading, isError } = useQuery('getPowerBanksProducts', getPowerBanksProducts)
  useEffect(() => {
    if (data) {
      setProducts(data.products)
    }
  }, [data])

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <div>
      {isLoading && <Spinner/>}
      {isError && <p>Something went wrong</p>}
      {products.map(product => {
          return (<div key={product.itemNo}>{product.name}</div>)
        }
      )}
    </div>
  )
}

export default PowerBanks