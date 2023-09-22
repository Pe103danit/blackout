import React, { useState } from 'react'
import { connect } from 'react-redux';
import Slider from '@mui/material/Slider';

import style from './PriceSlider.module.scss'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import { setPriceFilter } from '../../redux/reducers/ProductReducer/ProductReducer'

const PriceSlider = (props) => {
  let minPrice = 0;
  props.products.forEach(product => {
    if (product.currentPrice < minPrice) {
      minPrice = product.currentPrice
    }
  });
  let maxPrice = 0;
  props.products.forEach(product => {
    if (product.currentPrice > maxPrice) {
      maxPrice = product.currentPrice
    }
  });

  const [value, setValue] = useState([minPrice, maxPrice]);
  const handleChanges = (event, newValue) => {
    setValue(newValue);
    props.setPriceFilter(newValue);
  };
  return (
    <div className={style.container}>
      <div className={style.slider}>
        <p className={style.slider__title}>Filter items by price</p>
        <p className={style.slider__range}>${value[0]} - ${value[1]}</p>
        <Slider
          value = {value}
          min={minPrice}
          max={maxPrice}
          onChange = {handleChanges}
          valueLabelDisplay="auto"/>
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
