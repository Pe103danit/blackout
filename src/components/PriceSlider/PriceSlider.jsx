import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useQuery } from 'react-query';
import { instance } from '../assets/axiosUrl';

import { Slider } from 'primereact/slider'
import style from './PriceSlider.module.scss'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import { setPriceFilter } from '../../redux/reducers/ProductReducer/ProductReducer'

const PriceSlider = (props) => {
  const getProductsReq = async () => {
    const { data } = await instance('/api/products')
    return data
  }
  const { data } = useQuery('getProducts', getProductsReq)

  let minPrice = Infinity;
  data.forEach(product => {
    if (product.currentPrice < minPrice) {
      minPrice = product.currentPrice
    }
  });
  let maxPrice = 0;
  data.forEach(product => {
    if (product.currentPrice > maxPrice) {
      maxPrice = product.currentPrice
    }
  });

  const [value, setValue] = useState([minPrice, maxPrice]);
  useEffect(() => {
    props.setPriceFilter(value)
  }, [value, props])
  return (
    <div className={style.container}>
      <div className={style.slider}>
        <p className={style.slider__title}>Filter items by price</p>
        <p className={style.slider__range}>${value[0]} - ${value[1]}</p>
        <Slider
          value={value}
          min={minPrice}
          max={maxPrice}
          onChange={(e) => {
            setValue(e.value);
          }}
          range
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lightTheme: state.UIStateReducer.lightTheme,
  productIsLoading: state.ProductReducer.productIsLoading,
  products: state.ProductReducer.products,
  wishList: state.WishListReducer.wishList,
  wishCount: state.WishListReducer.wishCount
})

const mapDispatchToProps = {
  setPriceFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceSlider);
