import { instance, instanceToken } from '../../components/assets/axiosUrl'
import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
const UserOrders = () => {
  const token = useSelector(state => state.SessionReducer.token)
  console.log(token);
  const getOrderList = async () => {
    const { data } = await instanceToken.get('/api/orders')
    console.log(data)
    return data
  }
  const { data } = useQuery(['getOrderList', { headers: { Authorization: token } }], getOrderList)
   useEffect(() => {
    if (data) {
     console.log(data);
    }
  }, [data])
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default UserOrders