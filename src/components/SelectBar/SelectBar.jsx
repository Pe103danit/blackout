import React, { useState } from 'react';
import Select from 'react-select';
import style from './SelectBar.module.scss';

const options = [

  { value: '', label: 'Default', isSelected: true },
  { value: 'sort=-currentPrice', label: 'Decrease Price' },
  { value: 'sort=+currentPrice', label: 'Increase Price' },

];

const SelectBar = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption.value);
  };

  return (
    <div className={style.selectBar}>
      <span>Sort by</span>
      <Select className={style.selectBar__option}
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
      />
    </div>
  );
};

export default SelectBar;