import style from './NotFoundPage.module.scss'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const NotFoundPage = (props) => {
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
          Oops! Page not found
        </p>
        <p className={style.section_container_p2}>
          404 Error
        </p>
        <p className={style.section_container_p3}>
          The page you are looking for does not exist.
        </p>
        <NavLink to={'/'} className={style.section_container_link}>
          <button>
            Go to Home
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default NotFoundPage