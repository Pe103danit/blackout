import React from 'react'
import style from './SelectBar.module.scss';

const SelectBar = () => {
    return (
    <div className={style.selectBar}>
      <span>Sort by</span>
      <select name='select' className={style.selectBar__input}>
        <option className={style.selectBar__input__option} value='' defaultValue>Default</option>
        <option className={style.selectBar__input__option} value='sort=-currentPrice' >From Low to High</option>
        <option className={style.selectBar__input__option} value='sort=+currentPrice'>From High to Low</option>
      </select>
    </div>
  );
};

export default SelectBar;