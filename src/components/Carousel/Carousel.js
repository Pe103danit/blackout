import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import './Carousel.scss';
import style from './Carousel.module.scss'

const Carousel = () => {
  const SampleArrow = ({ direction, onClick }) => (
    <div className={`${style.arrow} ${style[`arrow-${direction}`]}`} onClick={onClick}>
      {direction === 'prev' ? <span className={style.rightArrow}>&lt;</span> : <span className={style.leftArrow}>&gt;</span>}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <SampleArrow direction="prev" />,
    nextArrow: <SampleArrow direction="next" />,
  };

  const products = [
    {
      image: 'https://uk.ecoflow.com/cdn/shop/files/PC-Shopify_banner.jpg?v=1684156510',
      name: 'WAVE 2',
      text: 'The most powerful and compact portable AC'
    },
    {
      image: 'https://uk.ecoflow.com/cdn/shop/files/banner_-_51201080_1_d52eceda-c1fc-4f8d-806b-3204a23a54dd.png?v=1685024243',
      name: 'DELTA 2 Max',
      text: '10 Years of Everyday Power'
    },
    {
      image: 'https://uk.ecoflow.com/cdn/shop/files/DG200_3x_d361a46c-64b2-4579-a5fc-191dbe0f9eb6.png?v=1675164897',
      name: 'Smart Generator (Dual Fuel)',
      text: 'Fuel Your Freedom.'
    },
    {
      image: 'https://uk.ecoflow.com/cdn/shop/files/PC.jpg?v=1680243561',
      name: 'Portable PV & EV Power with DELTA Pro',
      text: 'Travel Without Limits'
    }
  ]

  return (
    <div className={style.carousel}>
      {/* <h2>Featured Products</h2> */}
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className={style.carousel__card}>
            <img className={style.carousel__card__img} src={product.image} alt={product.name} />
            <div className={style.carousel__card__content}>
              <h3 className={style.carousel__card__title}>{product.name}</h3>
              <p className={style.carousel__card__text}>{product.text}</p>
              {/* <span>${product.price}</span> */}
              <button className={style.carousel__card__button} onClick={null}>Детальніше</button>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;