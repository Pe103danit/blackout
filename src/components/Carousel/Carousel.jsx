import React, { useState, useEffect } from 'react'
import { instance } from '../assets/axiosUrl'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Carousel.scss'
import style from './Carousel.module.scss'

const Carousel = () => {
  const SampleArrow = ({ direction, onClick }) => (
    <div className={`${style.arrow} ${style[`arrow-${direction}`]}`} onClick={onClick}>
      {direction === 'prev'
        ? <span className={style.rightArrow}>&lt;</span>
        : <span
        className={style.leftArrow}>&gt;</span>}
    </div>
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
    prevArrow: <SampleArrow direction="prev"/>,
    nextArrow: <SampleArrow direction="next"/>,
  }

  const [carouselItems, setCarouselItems] = useState([])

  useEffect(() => {
    const setSlider = async () => {
      try {
        const response = await instance.get('/api/slides')
          if (response.status === 200) {
            setCarouselItems(response.data)
          }
      } catch (err) {
        if (err.response.status === 500) {
          setSlider()
        } else {
          console.log(err)
        }
      }
    }
    setSlider()
  }, [])

  return (
    <div className={style.carousel}>
      <Slider {...settings}>
        {carouselItems.map((product, index) => (
          <Link key={index} to={product.htmlContent}>
            <div className={style.carousel__card}>
              <img className={style.carousel__card__img} src={product.imageUrl.replace('/upload/', '/upload/w_2030/')}
                   alt={product.name}/>
              <div className={style.carousel__card__content}>
                <h3 className={style.carousel__card__title}>{product.title}</h3>
                <p className={style.carousel__card__text}>{product.description}</p>
                <button className={style.carousel__card__button}>LEARN MORE</button>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel