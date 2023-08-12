<<<<<<< HEAD
import React from 'react';
import Carousel from '../../components/Carousel/Carousel.jsx';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs.jsx';

const Home = () => {
    return (<>
        <Carousel />
        <WhyChooseUs />
    </>
    )
=======
import PictureCategories from '../../components/PictureCategories/PictureCategories'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'

const Home = (props) => {
  return (
    <>
      <PictureCategories lightTheme={props.lightTheme}/>
      <WhyChooseUs/>
    </>
  )
>>>>>>> master
}

export default Home