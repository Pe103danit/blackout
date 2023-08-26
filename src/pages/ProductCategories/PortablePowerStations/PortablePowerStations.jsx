import React, { useState, } from 'react';
import { connect, useSelector } from 'react-redux';

import style from './PortablePowerStations.module.scss';

import Spinner from '../../../components/Spinner/Spinner';
import PagePagination from '../../../components/PagePagination/PagePagination';
import ShopCard from '../../../components/ShopCard/ShopCard'

const PortablePowerStations = ({ productItems, portablePowerStationIsLoading }) => {
  // const productItems = useSelector((state) => state.ProductReducer.portablePowerStation);
  console.log(productItems);

  const [currentItems, setCurrentItems] = useState(productItems.slice(0, 12));
  // console.log(currentItems);

  const handlePageChange = (newItems) => {
    setCurrentItems(newItems);
  };

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <div className={style.portablePowerStations}>
      <h3 className={style.portablePowerStations__title}>Portable Power Stations</h3>
      {(portablePowerStationIsLoading === true)
        ? (<Spinner />)
        : (<>
          <div className={style.portablePowerStations__container}>
            {currentItems.map((productItem, index) => (
              <ShopCard key={index} productItem={productItem} />
            ))}
          </div>
          <PagePagination cardOnPage={12} productItems={productItems} changesOnPage={handlePageChange} />
        </>
        )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    productItems: state.ProductReducer.portablePowerStation,
    portablePowerStationIsLoading: state.ProductReducer.portablePowerStationIsLoading
  };
};

export default connect(mapStateToProps)(PortablePowerStations)