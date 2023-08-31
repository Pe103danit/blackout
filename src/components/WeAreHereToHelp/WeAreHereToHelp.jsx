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
    <div className={weAreHereToHelpsStyle}>
      <div className={style.section_container}>
        <p className={style.section_container_title}>
          We’re here to help
        </p>
        <div className={style.section_container_body}>
          <div className={style.section_container_body_left}>
            <NavLink to={'/login'} className={style.section_container_body_left_link}>
              <img src={memberImg} alt="Member" title="Member"/>
              <p className={style.section_container_body_left_link_text}>
                Latest news?
              </p>
            </NavLink>
          </div>
          <div className={style.section_container_body_right}>
            <NavLink to={'/contacts'} className={style.section_container_body_right_link}>
              <img src={contactUsImg} alt="Contacts" title="Contacts"/>
              <p className={style.section_container_body_right_link_text}>
                We can help you!
              </p>
            </NavLink>
            <NavLink to={'/products/000026'} className={style.section_container_body_right_link}>
              <img src={checkThisOutImg} alt="Check this out" title="Check this out"/>
              <p className={style.section_container_body_right_link_text}>
                Check this out &#62;
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeAreHereToHelp