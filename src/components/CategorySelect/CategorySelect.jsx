import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Checkbox } from 'primereact/checkbox';
import style from './CategorySelect.module.scss';
import { addCategoryToFilter } from '../../redux/reducers/ProductReducer/ProductReducer';
import { useSearchParams } from 'react-router-dom'

export const CategorySelect = () => {
    const dispatch = useDispatch()
    const [requestParameters, setRequestParameters] = useSearchParams();
    const [categories, setCategories] = useState(requestParameters.get('categories') && requestParameters.get('categories').split(',') || []);

    const onCategoriesChange = (e) => {
        const _categories = [...categories];

        if (e.checked) {
          _categories.push(e.value);
        } else {
          _categories.splice(_categories.indexOf(e.value), 1);
        }

        setRequestParameters({
          categories: _categories.join(','),
          minPrice: requestParameters.get('minPrice') || '',
          maxPrice: requestParameters.get('maxPrice') || '',
          page: requestParameters.get('page') || 1,
          sort: requestParameters.get('sort') || ''
        });
        setCategories(_categories)
        dispatch(addCategoryToFilter(_categories));
    }

    useEffect(() => {
      const categories = requestParameters.get('categories') ? requestParameters.get('categories').split(',') : [];
      setCategories(categories);
    }, [requestParameters])

    return (
        <div className={style.checkbox}>
            <div className={style.checkbox__item}>
                <Checkbox inputId="category1" name="shop" value="Portable Power Stations" onChange={onCategoriesChange} checked={categories.includes('Portable Power Stations')} />
                <label htmlFor="category1" className={style.checkbox__item__text}>Portable power station</label>
            </div>
            <div className={style.checkbox__item}>
                <Checkbox inputId="category2" name="shop" value="Power Banks" onChange={onCategoriesChange} checked={categories.includes('Power Banks')} />
                <label htmlFor="category2" className={style.checkbox__item__text}>Power banks</label>
            </div>
            <div className={style.checkbox__item}>
                <Checkbox inputId="category3" name="shop" value="Generators" onChange={onCategoriesChange} checked={categories.includes('Generators')} />
                <label htmlFor="category3" className={style.checkbox__item__text}>Generators</label>
            </div>
            <div className={style.checkbox__item}>
                <Checkbox inputId="category4" name="shop" value="Solar Panels" onChange={onCategoriesChange} checked={categories.includes('Solar Panels')} />
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