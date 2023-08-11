import { MenuIcon, CloseIcon, CloseIconDark, MenuIconDark } from '../assets/Icons'
import Nav from './Nav'
import { connect } from 'react-redux'
import { toggleNavBar } from '../../redux/reducers/UIStateReducer/UIStateReducer'

import style from './NavMenuTabletMobile.module.scss'

const NavMenuTabletMobile = (props) => {
  const CloseComponent = () => props.themeStyle === 'light'
    ? <CloseIcon/>
    : <CloseIconDark/>

  const MenuComponent = () => props.themeStyle === 'light'
    ? <MenuIcon/>
    : <MenuIconDark/>

  return (
    <div className={style.container}>
      <button
        className={style.container_btn}
        onClick={() => props.toggleNavBar()}>
        {props.navbarStatus
          ? <CloseComponent/>
          : <MenuComponent/>
        }
      </button>
      {props.navbarStatus &&
        <Nav themeStyle={props.themeStyle}/>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  navbarStatus: state.UIStateReducer.navBarStatus
})

const mapDispatchToProps = {
  toggleNavBar
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuTabletMobile)