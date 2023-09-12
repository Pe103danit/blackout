import React, {useState} from 'react'
import { Slider } from 'primereact/slider'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import style from './PriceSlider.module.scss'

const PriceSlider = () => {
  const [value, setValue] = useState([0, 1000]);
  return (
    <div className={style.container}>
      <div className={style.slider}>
        <p className={style.slider__title}>Filter items by price</p>
        <p className={style.slider__range}>${value[0]} - ${value[1]}</p>
        <Slider
        value={value}
        onChange={(e) => {
          setValue(e.value);
        }}
        range
        />
      </div>
    </div>
  );
}

export default PriceSlider;
