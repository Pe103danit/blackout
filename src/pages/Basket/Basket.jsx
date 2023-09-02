import EmptyBasketContainer from '../../components/EmptyBasket/EmptyBasketContainer'
import style from './Basket.module.scss'
import { NavLink } from 'react-router-dom'

const Basket = (props) => {
  return (

    <div>
      {props.basketList.length !== 0
        ? <div className={style.section}>
          <div className={style.section_container}>
            <p className={style.section_container_title}>Shopping Cart</p>
            <div className={style.section_container_body}>
              <div className={style.section_container_body_left}>
                <div className={style.section_container_body_left_product}>
                  <div className={style.section_container_body_left_product_checkbox}>
                    <input type="checkbox"/>
                  </div>
                  <NavLink to={'/'} className={style.section_container_body_left_product_photo}>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""/>
                  </NavLink>
                  <div className={style.section_container_body_left_product_name}>
                    <NavLink to={'/'}>
                      <p>Product name</p>
                      <p>Product model</p>
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
                      price
                    </p>
                    <button>
                      Remove
                    </button>
                  </div>
                </div>
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
                        CHECKOUT
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
                  Bottom container
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