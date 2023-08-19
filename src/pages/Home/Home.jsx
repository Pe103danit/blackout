import React from 'react';
import { ProductList } from '../../components/ProductList';
import PictureCategories from '../../components/PictureCategories/PictureCategories'
import Carousel from '../../components/Carousel/Carousel.jsx';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import WeAreHereToHelp from '../../components/WeAreHereToHelp/WeAreHereToHelp'
import style from './Home.module.scss'

const Home = (props) => {
  return (
    <>
      <div className={style.pictureCategories}>
        <PictureCategories lightTheme={props.lightTheme} />
      </div>
      {/* <PictureCategories lightTheme={props.lightTheme}/> */}
      <Carousel />
      <WeAreHereToHelp lightTheme={props.lightTheme} />
      <WhyChooseUs />
      <ProductList />
    </>
  )
}

export default Home