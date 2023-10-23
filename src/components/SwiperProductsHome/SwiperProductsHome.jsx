import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useEffect, useState } from 'react';
import CardSwiperProductsHome from '../CardSwiperProductsHome/CardSwiperProductsHome';
import style from './SwiperProductsHome.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { instance } from '../assets/axiosUrl';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux'

const SwiperProductsHome = ({ getProductsSliderMain, lightTheme }) => {
    const productsSliderMain = useSelector(state => state.ProductReducer.productsSliderMain)
    const getProductsSliderMainPage = async () => {
        const { data } = await instance.get('/api/products/filter?slider=slider');
        return data
    };

    const { data } = useQuery('getProductsSliderMainPage', getProductsSliderMainPage);

    useEffect(() => {
        if (data) {
            getProductsSliderMain(data);
        }
    }, [data, getProductsSliderMain]);

    const swiper = useSwiper();
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 481) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 993) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
      <Swiper
        className={style.slider}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        onSlideChange={() => null}
        onSwiper={() => null}
        modules={[Navigation]}
        navigation
      >
          <div onClick={() => swiper.slidePrev()} />
          <div onClick={() => swiper.slideNext()} />
          {productsSliderMain.products &&
            productsSliderMain.products.map((product) => {
                return (
                  <SwiperSlide key={product.itemNo}>
                      <CardSwiperProductsHome lightTheme={lightTheme} {...product} />
                  </SwiperSlide>
                );
            })}
      </Swiper>
    );
};

export default SwiperProductsHome;
