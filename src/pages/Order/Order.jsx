import { NavLink } from 'react-router-dom'

const Order = () => {
  return (
    <form>
      <div>
        <p>Contact</p>
        <p>Have an account?
          <NavLink to={'/login'}>Log in</NavLink>
        </p>
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor='newOffers'></label>
        <input
          type='checkbox'
          name='newOffers'
          id="newOffers"
        />
        <span>
          I consent to receive EcoFlow's news and offers via email. For further information, please visit our
          Privacy Policy and Terms of Service at the bottom of this page.
        </span>
        <p>
          Shipping address
        </p>
        <div>
          <select>
            <option selected disabled>Country/Region</option>
          </select>
        </div>
      </div>
    </form>
  )
}

export default Order