import style from './UserOrderItem.module.scss'
import { useSelector } from 'react-redux';
const UserOrderItem = ({ product }) => {
    const theme = useSelector(state => state.UIStateReducer.lightTheme);
    return (
        <div className={style.userOrderItem}>
            <div className={style.userOrderItem__image}>
                <img src={product.imageUrls[0]} alt={product.name} title={product.name} />
            </div>
            <div className={style.userOrderItem__description}>
                <div className={style.userOrderItem__description__link}>
                    <p className={`${style.userOrderItem__description__link_type} ${theme ? '' : style.userOrderItem__description__link_type__darkTheme}`} >{product.name}</p>
                    <p className={`${style.userOrderItem__description__link_model} ${theme ? '' : style.userOrderItem__description__link_model__darkTheme}`}>{product.model}</p>
                </div>
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