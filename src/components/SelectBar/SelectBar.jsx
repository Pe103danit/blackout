import React, { useState } from 'react';
import Select from 'react-select';
import style from './SelectBar.module.scss';

const options = [
    
  { value: '', label: 'Default', isSelected: true },
  { value: 'sort=-currentPrice', label: 'From expensive to cheap' },
  { value: 'sort=+currentPrice', label: 'From cheap to expensive' },

];

const SelectBar = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption.value);
  };

  return (
    <div className={style.selectBar}>
        {/* <span>Sort by</span> */}
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
        // placeholder="Default"
      />
    </div>
  );
};

export default SelectBar;