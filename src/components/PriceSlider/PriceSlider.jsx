import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Slider from '@mui/material/Slider';

import style from './PriceSlider.module.scss';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { setPriceFilter } from '../../redux/reducers/ProductReducer/ProductReducer';
import { useSearchParams } from 'react-router-dom'

const PriceSlider = (props) => {
  const prices = props.productItems.map(el => el.currentPrice);
  const [requestParameters, setRequestParameters] = useSearchParams();
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const [value, setValue] = useState([requestParameters.get('minPrice') || minPrice, requestParameters.get('maxPrice') || maxPrice]);

  const handleChanges = (event, newValue) => {
    console.log(newValue);
    setRequestParameters({
      categories: requestParameters.get('categories') || '',
      minPrice: newValue[0],
      maxPrice: newValue[1],
      page: requestParameters.get('page') || 1,
      sort: requestParameters.get('sort') || ''
    });
    setValue(newValue);
    props.setPriceFilter(newValue);
  };

  return (
    <div className={style.container}>
      <div className={style.slider}>
        <p className={style.slider__title}>Filter items by price</p>
        <p className={style.slider__range}>${value[0]} - ${value[1]}</p>
        <Slider
          value={value}
          min={minPrice}
          max={maxPrice}
          onChange={handleChanges}
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  lightTheme: state.UIStateReducer.lightTheme,
  productIsLoading: state.ProductReducer.productIsLoading,
});

const mapDispatchToProps = {
  setPriceFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceSlider);