import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Slider from '@mui/material/Slider';

import style from './PriceSlider.module.scss';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { setPriceFilter } from '../../redux/reducers/ProductReducer/ProductReducer';

const PriceSlider = (props) => {
  const [minPrice, setMinPrice] = useState(Infinity);
  const [maxPrice, setMaxPrice] = useState(0);
  const [value, setValue] = useState([minPrice, maxPrice]);

  useEffect(() => {
    const prices = props.productItems.map(el => el.currentPrice);
    const newMinPrice = Math.min(...prices);
    const newMaxPrice = Math.max(...prices);

    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
    setValue([newMinPrice, newMaxPrice]);
  }, [props.productItems]);

  const handleChanges = (event, newValue) => {
    console.log(newValue);
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