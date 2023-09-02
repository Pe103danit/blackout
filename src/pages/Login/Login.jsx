import { instance } from '../../components/assets/axiosUrl'

const Login = () => {
  instance.get('/api/products').then(res => {
  })
  return (
    <div>
      Login Page
    </div>
  )
}

export default Login