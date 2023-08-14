import style from './WeAreHereToHelp.module.scss'
import memberImg from './Member.png'
import contactUsImg from './ContactUs.png'
import checkThisOutImg from './CheckThisOut.jpg'
import { NavLink } from 'react-router-dom'

const WeAreHereToHelp = (props) => {
  const weAreHereToHelpsStyle = props.lightTheme
    ? 'lightWeAreHereToHelpStyle'
    : 'darkWeAreHereToHelpStyle'

  return (
    <div className={`${style.container} ${weAreHereToHelpsStyle}`}>
      <p className={style.container_title}>
        We’re here to help
      </p>
      <div className={style.container_body}>
        <div className={style.container_body_left}>
          <NavLink to={'/login'} className={style.container_body_left_link}>
            <img src={memberImg} alt="Member" title="Member"/>
          </NavLink>
        </div>
        <div className={style.container_body_right}>
          <NavLink to={'/contacts'} className={style.container_body_right_link}>
            <img src={contactUsImg} alt="Contacts" title="Contacts"/>
          </NavLink>
          <NavLink to={'/'} className={style.container_body_right_link}>
            <img src={checkThisOutImg} alt="Check this out" title="Check this out"/>
            <p className={style.container_body_right_link_text}>
              Check this out >
            </p>
          </NavLink>
        </div>
      </div>
    </div>

  )
}

export default WeAreHereToHelp