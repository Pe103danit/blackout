import { instanceToken } from '../../components/assets/axiosUrl'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from './UserOrder.module.scss'
import { setOrderList } from '../../redux/reducers/OrderListReducer/OrderListReducer'
import UserOrderItem from '../../components/UserOrderItem/UserOrderItem'
import Spinner from '../../components/Spinner/Spinner'
import img1 from './sad.jpg'

const UserOrder = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const token = useSelector(state => state.SessionReducer.token)
  const orderList = useSelector(state => state.OrderListReducer.orderList || [])
  const orderIsLoading = useSelector(state => state.OrderListReducer.orderIsLoading)
  useEffect(() => {
    if (token) {
      const getOrderList = async () => {
        const { data } = await instanceToken.get('/api/orders', {
          headers: { Authorization: token }
        })
        if (data !== 'Unauthorized') {
          dispatch(setOrderList(data))
        }
      }

      getOrderList()
    }
  }, [token, dispatch])
  const dateHelper = (date) => {
    const newDate = new Date(date)
    const min = newDate.getMinutes().toString()
    const minutes = (min.length < 2) ? `0${min}` : `${min}`
    return `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()} ${newDate.getHours()}:${minutes}`
  }

  return (
    <>
      <h2 className={style.userOrder__title}>
        Order List
      </h2>
      {orderIsLoading && <Spinner/>}
      {!orderIsLoading && (
        <>
          {!orderList.length && <div className={style.userOrder__empty}>
            <p className={style.userOrder__empty__text}>You don't order anything</p>
            <img className={style.userOrder__empty__img} src={img1} alt="emptyUserOrder"/>
          </div>}
          {!!orderList.length && <ul>{orderList?.map((order) => (
            <li>
              <p className={style.userOrder__date}>{dateHelper(order.date)}</p>
              <div className={`${style.userOrder} ${theme ? '' : style.userOrder__darkTheme}`}>
                {order?.products?.map((product, index) => {
                  return (
                    <UserOrderItem
                      key={index}
                      {...product}
                    />
                  )
                })
                }
              </div>
            </li>
          ))}</ul>}
        </>
      )}
      <div>
        {orderList?.products?.length &&
          (
            <div className={`${style.userOrder} ${theme ? '' : style.userOrder__darkTheme}`}>
              {orderList?.products.map((product, index) => {
                return (
                  <UserOrderItem
                    key={index}
                    {...product}
                  />
                )
              })
              }
            </div>)
        }
        {!!orderList?.products?.length && <div>No order</div>}
      </div>
    </>
  )
}

export default UserOrder