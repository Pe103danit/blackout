import { useQuery } from 'react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import { instance } from '../assets/axiosUrl'
import { useEffect } from 'react'
import CardSwiperProductsHome from '../CardSwiperProductsHome/CardSwiperProductsHome'
import style from './CardSwiperProductsHome.module.scss'

/*
* length = 40
* random max =  length - 4
* 25 26 27 28
* */
const SwiperProductsHome = (props) => {
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
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
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