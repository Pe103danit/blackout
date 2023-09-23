import React from 'react'
// import Select from 'react-select';
import style from './SelectBar.module.scss';
// const options = [
//   { value: '', label: 'Default', isSelected: true },
//   { value: '&sort=-currentPrice', label: 'High to Low' },
//   { value: '&sort=+currentPrice', label: 'Low to High' },
// ];
const SelectBar = () => {
  // const [selectedOption, setSelectedOption] = useState(options[0]);
  // const handleOptionChange = (selectedOption) => {
  //   setSelectedOption(selectedOption)
  // }
  return (
    <div className={style.selectBar}>
      <span>Sort by</span>
      <select name='select' className={style.selectBar__input}>
        <option className={style.selectBar__input__option} value='' defaultValue>Default</option>
        <option className={style.selectBar__input__option} value='sort=-currentPrice' >From Low to High</option>
        <option className={style.selectBar__input__option} value='sort=+currentPrice'>From High to Low</option>
      </select>
      {/* <Select
        className={style.selectBar__option}
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
      /> */}
    </div>
  );
};

export default SelectBar;