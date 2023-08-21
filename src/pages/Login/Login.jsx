import { instance } from '../../components/assets/axiosUrl'

const Login = () => {
  instance.get('/api/products').then(res => {
    console.log(res.data)
  })
  return (
    <div>
      Login Page
    </div>
  )
}

export default Login