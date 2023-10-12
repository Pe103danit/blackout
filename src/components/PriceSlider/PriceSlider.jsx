import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Slider from '@mui/material/Slider'

import style from './PriceSlider.module.scss'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import { setPriceFilter } from '../../redux/reducers/ProductReducer/ProductReducer'
import { useLocation, useSearchParams } from 'react-router-dom'

const PriceSlider = (props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [minPrice, setMinPrice] = useState(Infinity)
  const [maxPrice, setMaxPrice] = useState(0)
  const [value, setValue] = useState([minPrice, maxPrice])
  const location = useLocation()

  useEffect(() => {
    const newMinPrice = 14.99
    const newMaxPrice = 4449

    setMinPrice(newMinPrice)
    setMaxPrice(newMaxPrice)

    const minPriceParam = searchParams.get('minPrice')
    const maxPriceParam = searchParams.get('maxPrice')

    if (minPriceParam !== null && maxPriceParam !== null) {
      setValue([Number(minPriceParam), Number(maxPriceParam)])
    } else {
      setValue([newMinPrice, newMaxPrice])
    }
  }, [props.productItems, location.search, searchParams])

  const handleChanges = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
    props.setPriceFilter(newValue)
    setSearchParams({
      minPrice: newValue[0],
      maxPrice: newValue[1]
    })
  }

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
  )
}

const mapStateToProps = (state) => ({
  lightTheme: state.UIStateReducer.lightTheme,
  productIsLoading: state.ProductReducer.productIsLoading,
})

const mapDispatchToProps = {
  setPriceFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceSlider)