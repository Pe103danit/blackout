import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from 'primereact/checkbox';
import style from './CategorySelect.module.scss';
import { addCategoryToFilter } from '../../redux/reducers/ProductReducer/ProductReducer';

export const CategorySelect = () => {
    const dispatch = useDispatch()
    const [categories, setCategories] = useState([]);

    const onCategoriesChange = (e) => {
        const _categories = [...categories];

        if (e.checked) { _categories.push(e.value); } else { _categories.splice(_categories.indexOf(e.value), 1); }
        setCategories(_categories)
        dispatch(addCategoryToFilter(_categories));
    }

    return (
        <div className={style.checkbox}>
            <div className={style.checkbox__item}>
                <Checkbox inputId="category1" name="shop" value="Portable power stations" onChange={onCategoriesChange} checked={categories.includes('Portable power stations')} />
                <label htmlFor="category1" className={style.checkbox__item__text}>Portable power station</label>
            </div>
            <div className={style.checkbox__item}>
                <Checkbox inputId="category2" name="shop" value="Power banks" onChange={onCategoriesChange} checked={categories.includes('Power banks')} />
                <label htmlFor="category2" className={style.checkbox__item__text}>Power banks</label>
            </div>
            <div className={style.checkbox__item}>
                <Checkbox inputId="category3" name="shop" value="Generators" onChange={onCategoriesChange} checked={categories.includes('Generators')} />
                <label htmlFor="category3" className={style.checkbox__item__text}>Generators</label>
            </div>
            <div className={style.checkbox__item}>
                <Checkbox inputId="category4" name="shop" value="Solar panels" onChange={onCategoriesChange} checked={categories.includes('Solar panels')} />
                <label htmlFor="category4" className={style.checkbox__item__text}>Solar panels</label>
            </div>
            <div className={style.checkbox__item}>
                <Checkbox inputId="category5" name="shop" value="Accessories" onChange={onCategoriesChange} checked={categories.includes('Accessories')} />
                <label htmlFor="category5" className={style.checkbox__item__text}>Accessories</label>
            </div>
        </div>
    )
}

export default CategorySelect;