import React from 'react';

import PictureCategories from '../../components/PictureCategories/PictureCategories'
import Carousel from '../../components/Carousel/Carousel.jsx';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs.jsx';

// const Home = () => {
//     return (<>
//         <Carousel />
//         <WhyChooseUs />
//     </>
//     )
// import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'

const Home = (props) => {
  return (
    <>
      <PictureCategories lightTheme={props.lightTheme}/>
      <Carousel />
      <WhyChooseUs/>
    </>
  )
}

export default Home