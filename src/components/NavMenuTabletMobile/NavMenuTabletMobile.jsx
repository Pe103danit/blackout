import { MenuIcon, CloseIcon } from '../assets/Icons'
import Nav from './Nav'
import {connect} from 'react-redux'
import { toggleNavBar } from '../../redux/reducers/UIStateReducer/UIStateReducer'

import style from './NavMenuTabletMobile.module.scss'

const NavMenuTabletMobile = (props) => {
  return (
    <div className={style.container}>
      <button
        className={style.container_btn}
        onClick={() => props.toggleNavBar()}>
        {props.navbarStatus
          ? <CloseIcon/>
          : <MenuIcon/>
        }
      </button>
      {props.navbarStatus &&
        <Nav/>
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