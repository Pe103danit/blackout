import React from 'react';
import { connect, useSelector } from 'react-redux';
import { setSelectValue } from '../../redux/reducers/ProductReducer/ProductReducer';
import style from './SelectBar.module.scss';

const SelectBar = ({ selectValue, setSelectValue }) => {
  const theme = useSelector(state => state.UIStateReducer.lightTheme);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectValue(newValue);
  };

  return (
    <div className={style.selectBar}>
      <span>Sort by</span>
      <select
        name='select'
        className={`${style.selectBar__input} ${theme ? '' : style.selectBar__input__darkTheme}`}
        defaultValue=''
        value={selectValue}
        onChange={handleChange}
      >
        <option className={style.selectBar__input__option} value=''>Default</option>
        <option className={style.selectBar__input__option} value='&sort=+currentPrice'>&#8593; Low ... High</option>
        <option className={style.selectBar__input__option} value='&sort=-currentPrice'>&#8595; High ... Low</option>
        <option className={style.selectBar__input__option} value='&sort=+name'>&#8594; A ... Z</option>
        <option className={style.selectBar__input__option} value='&sort=-name'>&#8592; Z ... A</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectValue: state.selectValue,
});

const mapDispatchToProps = {
  setSelectValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectBar);