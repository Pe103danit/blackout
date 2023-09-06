import EmptyBasketContainer from '../../components/EmptyBasket/EmptyBasketContainer'
import style from './Basket.module.scss'
import { NavLink } from 'react-router-dom'
import { Payments, Protection, Shipping, Support } from '../../components/assets/Icons'
import { useState } from 'react'
import BasketItem from './BasketItem'

const Basket = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightBasketStyle'
    : 'darkBasketStyle'

  const [basketList] = useState(props.basketList)
  const basketProducts = basketList.map(item => item)
  const matchingProducts = []
  props.products.forEach(product => {
    let basketStatus = false
    let basketItem = {}
    basketProducts.forEach((item) => {
      if (product.itemNo === item.itemNo) {
        basketStatus = true
        basketItem = item
      }
    })
    if (basketStatus) {
      matchingProducts.push(
        {
          ...product,
          ...basketItem
        }
      )
    }
  })

  return (
    <div>
      {props.basketList.length !== 0
        ? <div className={`${style.section} ${themeStyle}`}>
          <div className={style.section_container}>
            <p className={style.section_container_title}>Shopping Cart</p>
            <div className={style.section_container_body}>
              <div className={style.section_container_body_left}>
                {matchingProducts.map((product) => (
                  <BasketItem
                    key={product.itemNo}
                    product={product}
                  />
                ))}
              </div>
              <div className={style.section_container_body_right}>
                <div className={style.section_container_body_right_top}>
                  <div className={style.section_container_body_right_top_inner}>
                    <div className={style.section_container_body_right_top_inner_container}>
                      <p>Subtotal</p>
                      <p>{props.totalBasketSum}$</p>
                    </div>
                    <div className={style.section_container_body_right_top_inner_container}>
                      <p>Shipping</p>
                      {props.totalBasketSum >= 500
                        ? <p>Free</p>
                        : <p>10$</p>}
                    </div>
                    <div className={style.section_container_body_right_top_inner_container}>
                      <p>Estimated Tax</p>
                      <p>Calculated at Checkout</p>
                    </div>
                    <div className={style.section_container_body_right_top_inner_containerSum}>
                      <p
                        className={style.section_container_body_right_top_inner_containerSum_total}>Total {props.totalBasketSum >= 500
                        ? props.totalBasketSum
                        : (props.totalBasketSum + 10).toFixed(2)}
                      $</p>
                    </div>
                    <div className={style.section_container_body_right_top_inner_containerButtons}>
                      <button className={style.section_container_body_right_top_inner_containerButtons_btn1}>
                        <NavLink to={'/order'}
                                 className={style.section_container_body_right_top_inner_containerButtons_btn1_link}>
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