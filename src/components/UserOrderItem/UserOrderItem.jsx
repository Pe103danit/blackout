import style from './UserOrderItem.module.scss'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
const UserOrderItem = ({ product }) => {
    const theme = useSelector(state => state.UIStateReducer.lightTheme);

    const img = product.imageUrls[0].replace('/upload/', '/upload/w_100/')
    return (
        <div className={style.userOrderItem}>
            <NavLink to={`/products/${product.itemNo}`} className={style.userOrderItem__image}>
                <img src={img} alt={product.name} title={product.name} />
            </NavLink>
            <div className={style.userOrderItem__description}>
                <NavLink to={`/products/${product.itemNo}`} className={style.userOrderItem__description__link}>
                    <p className={`${style.userOrderItem__description__link_type} ${theme ? '' : style.userOrderItem__description__link_type__darkTheme}`}>{product.name}</p>
                    <p className={`${style.userOrderItem__description__link_model} ${theme ? '' : style.userOrderItem__description__link_model__darkTheme}`}>{product.model}</p>
                </NavLink>
            </div>
            <div className={style.userOrderItem__leftBlock}>
                <p className={style.userOrderItem__leftBlock__price}>
                    ${product.currentPrice}
                </p>
            </div>
        </div>
    )
}

export default UserOrderItem