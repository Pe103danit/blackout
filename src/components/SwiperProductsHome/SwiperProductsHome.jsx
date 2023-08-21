import { useQuery } from 'react-query'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { instance } from '../assets/axiosUrl'
import { useEffect } from 'react'
import CardSwiperProductsHome from '../CardSwiperProductsHome/CardSwiperProductsHome'
import style from './SwiperProductsHome.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'

const SwiperProductsHome = (props) => {
  const swiper = useSwiper()

  const getSwiperProducts = async () => {
     const { data } = await instance.get('/api/products')
    return data
  }
  const { data } = useQuery('getProducts', getSwiperProducts)
  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])
  return (
    <Swiper
      className={style.slider}
      spaceBetween={16}
      slidesPerView={4}
      onSlideChange={() => null}
      onSwiper={() => null}
      modules={[Navigation]}
      navigation
    >
      <div onClick={() => swiper.slidePrev()} />
      <div onClick={() => swiper.slideNext()} />
      { data && data.map(product => {
        return (
          <SwiperSlide>
            <CardSwiperProductsHome
              lightTheme={props.lightTheme}
              {...product}
            />
          </SwiperSlide>
        )
        }
      )}
    </Swiper>
  )
}

export default SwiperProductsHome