import EmptyBasketContainer from '../../components/EmptyBasket/EmptyBasketContainer'
import style from './Basket.module.scss'
import { NavLink } from 'react-router-dom'
import { Payments, Protection, Shipping, Support } from '../../components/assets/Icons'
import { useState } from 'react'

const Basket = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightBasketStyle'
    : 'darkBasketStyle'

  const [basketList, setBasketList] = useState(JSON.parse(localStorage.getItem('basketList')));
  const basketProducts = basketList.map(item => item.itemNo)
  const matchingProducts = props.products.filter(product =>
    basketProducts.includes(product.itemNo)
  );

  const handleRemoveFromBasket = (productToRemove) => {
    const updatedBasketList = basketList.filter((item) => item.itemNo !== productToRemove.itemNo);
    localStorage.setItem('basketList', JSON.stringify(updatedBasketList));
    setBasketList(updatedBasketList);
  };
  return (
    <div>
      {props.basketList.length !== 0
        ? <div className={`${style.section} ${themeStyle}`}>
          <div className={style.section_container}>
            <p className={style.section_container_title}>Shopping Cart</p>
            <div className={style.section_container_body}>
              <div className={style.section_container_body_left}>
                {matchingProducts.map((product) => (
                <div key={product.itemNo} className={style.section_container_body_left_product}>
                  <div className={style.section_container_body_left_product_checkbox}>
                    <input type="checkbox"/>
                  </div>
                  <NavLink to={'/'} className={style.section_container_body_left_product_photo}>
                    <img src={product.imageUrls[0]} alt={product.name} title={product.name}/>
                  </NavLink>
                  <div className={style.section_container_body_left_product_name}>
                    <NavLink to={'/'}>
                      <p>{product.name}</p>
                      <p>{product.model}</p>
                    </NavLink>
                  </div>
                  <div className={style.section_container_body_left_product_counter}>
                    <div className={style.section_container_body_left_product_counter_inner}>
                      <button>-</button>
                      <input type="text"/>
                      <button>+</button>
                    </div>
                  </div>
                  <div className={style.section_container_body_left_product_price}>
                    <p>
                      ${product.currentPrice.toFixed(2)}
                    </p>
                    <button onClick={() => handleRemoveFromBasket(product)}>
                      Remove
                    </button>
                  </div>
                </div>))}
              </div>
              <div className={style.section_container_body_right}>
                <div className={style.section_container_body_right_top}>
                  <div className={style.section_container_body_right_top_inner}>
                    <div className={style.section_container_body_right_top_inner_container}>
                      <p>Subtotal</p>
                      <p>Summ</p>
                    </div>
                    <div className={style.section_container_body_right_top_inner_container}>
                      <p>Shipping</p>
                      <p>Free</p>
                    </div>
                    <div className={style.section_container_body_right_top_inner_container}>
                      <p>Estimated Tax</p>
                      <p>Calculated at Checkout</p>
                    </div>
                    <div className={style.section_container_body_right_top_inner_containerSum}>
                      <p className={style.section_container_body_right_top_inner_containerSum_total}>Total summ</p>
                    </div>
                    <div className={style.section_container_body_right_top_inner_containerButtons}>
                      <button className={style.section_container_body_right_top_inner_containerButtons_btn1}>
                        <NavLink to={'/'} className={style.section_container_body_right_top_inner_containerButtons_btn1_link}>
                          CHECKOUT
                        </NavLink>
                      </button>
                    </div>
                    <div className={style.section_container_body_right_top_inner_containerButtons}>
                      <NavLink to={'/shop'}
                               className={style.section_container_body_right_top_inner_containerButtons_btn2}>
                        Continue Shopping
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className={style.section_container_body_right_bottom}>
                  <div className={style.section_container_body_right_bottom_inner}>
                    <div className={style.section_container_body_right_bottom_inner_container}>
                      <div className={style.section_container_body_right_bottom_inner_container_img}>
                        <Shipping/>
                      </div>
                      <div className={style.section_container_body_right_bottom_inner_container_text}>
                        <p>Fast & Free Shipping</p>
                        <p>Orders are usually processed and delivered within 4-10 business days.</p>
                      </div>
                    </div>
                    <div className={style.section_container_body_right_bottom_inner_container}>
                      <div className={style.section_container_body_right_bottom_inner_container_img}>
                        <Protection/>
                      </div>
                      <div className={style.section_container_body_right_bottom_inner_container_text}>
                        <p>Warranty Protection</p>
                        <p>All products are covered by a warranty service.</p>
                      </div>
                    </div>
                    <div className={style.section_container_body_right_bottom_inner_container}>
                      <div className={style.section_container_body_right_bottom_inner_container_img}>
                        <Payments/>
                      </div>
                      <div className={style.section_container_body_right_bottom_inner_container_text}>
                        <p>Secure Payments</p>
                        <p>Pay by debit or credit card, PayPal, or other secure payment platform.</p>
                      </div>
                    </div>
                    <div className={style.section_container_body_right_bottom_inner_container}>
                      <div className={style.section_container_body_right_bottom_inner_container_img}>
                        <Support/>
                      </div>
                      <div className={style.section_container_body_right_bottom_inner_container_text}>
                        <p>Lifetime Customer Support</p>
                        <p>9AM to 5PM PST (Weekdays)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : <EmptyBasketContainer/>
      }
    </div>
  )
}

export default Basket