import React from 'react';
import Select from 'react-select'

import style from './SelectBar.module.scss';

const options = [
    { value: '+price', label: 'From cheap to expensive' },
    { value: '-price', label: 'From expensive to cheap' }
]

const SelectBar = () => {
    return (
        <div className={style.filterBar}>
            <Select options={options} />
        </div>
    )
};

export default SelectBar