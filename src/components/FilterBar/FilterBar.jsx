import React from "react";


import style from './FilterBar.module.scss';

const FilterBar =() => {
    return (
        <div className={style.filterBar}>
            <div className={style.filterBar__container}>
                <div className={`${style.filterBar__container__wrap} ${style.filterBar__scroller}`}>
                    <div className={style.filterBar__scroller__wrap}>
                        <div className={`${style.filterBar__side} ${style.filterBar__collapse}`}>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default FilterBar