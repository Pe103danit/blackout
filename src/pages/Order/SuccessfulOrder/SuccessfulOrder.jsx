import { useEffect } from 'react'
import style from '../../NotFoundPage/NotFoundPage.module.scss'
import { NavLink } from 'react-router-dom'

const SuccessfulOrder = (props) => {
  const themeStyle = props.lightTheme
    ? 'light404Style'
    : 'dark404Style'
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`${style.section} ${themeStyle}`}>
      <div className={style.section_container}>
        <p className={style.section_container_p1}>
          Your order is placed
        </p>
        <p className={style.section_container_p2}>
          OrderNo is 023689452
        </p>
        <p className={style.section_container_p3}>
         Want to buy something more?
        </p>
        <NavLink to={'/shop'} className={style.section_container_link}>
          <button>
            Go shopping
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default SuccessfulOrder