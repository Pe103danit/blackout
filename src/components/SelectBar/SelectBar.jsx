import { connect, useSelector } from 'react-redux'
import { setSelectValue } from '../../redux/reducers/ProductReducer/ProductReducer'
import style from './SelectBar.module.scss'
import { useSearchParams } from 'react-router-dom'

const SelectBar = ({ selectValue, setSelectValue }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const handleChange = (e) => {
    const newValue = e.target.value
    setSelectValue(newValue)

    const params = new URLSearchParams(searchParams)

    if (newValue !== '') {
      params.set('sort', newValue)
    } else {
      params.delete('sort')
    }
    setSearchParams(params)
  }

  return (
    <div className={style.selectBar}>
      <span>Sort by</span>
      <select
        name="select"
        className={`${style.selectBar__input} ${theme ? '' : style.selectBar__input__darkTheme}`}
        value={selectValue}
        onChange={handleChange}
      >
        <option className={style.selectBar__input__option} value="">Default</option>
        <option className={style.selectBar__input__option} value="+currentPrice">Low ... High &#8593;</option>
        <option className={style.selectBar__input__option} value="-currentPrice">High ... Low &#8595;</option>
        <option className={style.selectBar__input__option} value="+name">A &#8594; Z</option>
        <option className={style.selectBar__input__option} value="-name">Z &#8594; A</option>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => ({
  selectValue: state.ProductReducer.selectValue,
})

const mapDispatchToProps = {
  setSelectValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectBar)