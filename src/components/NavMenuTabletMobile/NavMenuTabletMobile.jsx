import { MenuIcon, CloseIcon, CloseIconDark, MenuIconDark } from '../assets/Icons'
import Nav from './Nav'
import { connect } from 'react-redux'
import { toggleNavBar } from '../../redux/reducers/UIStateReducer/UIStateReducer'

import style from './NavMenuTabletMobile.module.scss'

const NavMenuTabletMobile = (props) => {
  const toggle = () => {
    props.toggleNavBar()
  }
  const themeStyle = props.lightTheme ? 'light' : 'dark'
  const CloseComponent = () => props.lightTheme
    ? <CloseIcon/>
    : <CloseIconDark/>

  const MenuComponent = () => props.lightTheme
    ? <MenuIcon/>
    : <MenuIconDark/>

  return (
    <div className={style.container}>
      <button
        className={style.container_btn}
        onClick={() => toggle()}>
        {props.navbarStatus
          ? <CloseComponent/>
          : <MenuComponent/>
        }
      </button>
      {props.navbarStatus &&
        <Nav themeStyle={themeStyle} toggle={toggle}/>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  navbarStatus: state.UIStateReducer.navBarStatus,
  lightTheme: state.UIStateReducer.lightTheme
})

const mapDispatchToProps = {
  toggleNavBar
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuTabletMobile)