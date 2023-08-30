import style from './Home.module.scss'
import React from 'react';
import PictureCategories from '../../components/PictureCategories/PictureCategories'
import Carousel from '../../components/Carousel/Carousel.jsx';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import WeAreHereToHelp from '../../components/WeAreHereToHelp/WeAreHereToHelp'
import TopHomeSolutions from '../../components/TopHomeSolutions/TopHomeSolutions';
import SwiperProductsHomeContainer from '../../components/SwiperProductsHome/SwiperProductsHomeContainer'

const Home = (props) => {
  return (
    <>
      <div className={style.pictureCategories}>
        <PictureCategories lightTheme={props.lightTheme} />
      </div>
      <Carousel />
      <SwiperProductsHomeContainer />
      <TopHomeSolutions />
      <WeAreHereToHelp lightTheme={props.lightTheme} />
      <WhyChooseUs />
    </>
  )
}

export default Home