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
                      Product name
                    </NavLink>
                  </div>
                  <div className={style.section_container_body_left_product_counter}>
                    <button>-</button>
                    <input type="text"/>
                    <button>+</button>
                  </div>
                  <div className={style.section_container_body_left_product_price}>
                    <p>
                      price
                    </p>
                    <button>
                      remove
                    </button>
                  </div>
                </div>
              </div>
              <div className={style.section_container_body_right}>
                <div className={style.section_container_body_right_top}>
                Top container
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