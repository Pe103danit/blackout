import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper';

export const ProductCard = (props) => {
  const { isHot, title, rating, price, underPrice, img, description, options, available, _uLike } = props
  const [isOverWeightOpen, setOverWeightOpen] = useState(false)
  const [countToCart, setCountToCart] = useState(0)
  const [countOfAvailable, setCountOfAvailable] = useState(available)
  const [multipliedPrice, setMultipliedPrice] = useState(price)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleClick = () => {

  }
  console.log(multipliedPrice)

  return (
    <section>
      <div className='product-card'>
        <div className='carousel'>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            autoplay={{ delay: 1500 }}
          >
            {img.map(item => (
              <SwiperSlide key={item} className="swiper-slide">
                <div className="day_item_img big">
                  <img src={{ item }} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper swiper_day_mini" id="swiper_day_mini">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              autoplay={{ delay: 1500 }}
            >
              {img.map(item => (
                <SwiperSlide className="swiper-slide">
                  <div className="day_item_img">
                    <img src={item} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <img src={img[0]} alt={title} />
          </div>
        </div>
        <div className='product-info'>
          {isHot && <p>Hot</p>}
          <h2>{title}</h2>
          <p> {rating}</p>
          <p> £ {price} GBP </p>
          <p>{underPrice}</p>
        </div>
        <div className='related-products'>
          <h6>{description.title}</h6>
          <ul>
            {[...description.characters].splice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}

            {(description.characters.length > 4) && <p onClick={() => { setOverWeightOpen(!isOverWeightOpen) }}>overweight</p>}
            {isOverWeightOpen && [...description.characters].splice(4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div>
            <h6>Options</h6>
            <ul>
              {options.map((item) => (
                <div key={item.title}>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </ul>
          </div>
          {!available && <div>
            <h6>
              Unavailable
            </h6>
          </div>}
          {!!available && <div>
            <h6>
              Available
            </h6>
            <button disabled={!countToCart} onClick={() => {
              setCountToCart(prev => prev -= 1)
              setCountOfAvailable(prev => prev += 1)
              if (countToCart > 0) {
                setMultipliedPrice(prev => prev -= price)
              }
              if (countToCart <= 1) {
                setMultipliedPrice(price)
              }
            }}>-</button>
            <span >{countToCart}</span>
            <button disabled={!countOfAvailable} onClick={() => {
              setCountToCart(prev => prev += 1)
              setCountOfAvailable(prev => prev -= 1)
              if (countToCart > 0) {
                setMultipliedPrice(prev => prev += price)
              }
              if (!countToCart) {
                setMultipliedPrice(price)
              }
            }}>+</button>
          </div>}
          <div>
            <p>£{multipliedPrice}GBP</p>
            <button onClick={handleClick}>add to cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}
