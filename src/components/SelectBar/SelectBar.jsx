import React, { useState } from 'react';
import Select from 'react-select';
import style from './SelectBar.module.scss';

const options = [
  { value: 'sort=+currentPrice', label: 'From cheap to expensive' },
  { value: 'sort=-currentPrice', label: 'From expensive to cheap' }
];

const SelectBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption.value);
  };

  return (
    <div className={style.selectBar}>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
        placeholder="Default"
      />
    </div>
  );
};

export default SelectBar;