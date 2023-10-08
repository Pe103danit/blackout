import style from './PictureCategories.module.scss'
import PortablePowerStationsImg from './PortablePowerStations.png'
import PowerBanks from './PowerBanks.png'
import GeneratorsImg from './Generators.png'
import SolarPanelsImg from './SolarPanels.png'
import AccessoriesImg from './Accessories.png'
import { NavLink } from 'react-router-dom'

const PictureCategories = (props) => {
  const pictureCategoriesStyle = props.lightTheme
    ? 'lightPictureCategoriesStyle'
    : 'darkPictureCategoriesStyle'

  return (
    <div className={`${style.section} ${pictureCategoriesStyle}`}>
      <div className={style.container}>
        <ul className={style.container_list}>

          <li className={style.container_list_item}>
            <NavLink to={'/shop?categories=Portable Power Stations'} className={style.container_list_item_link}>
              <img src={PortablePowerStationsImg} alt="Portable Power Stations"
                   className={style.container_list_item_link_img}/>
              <p className={style.container_list_item_link_text}>
                Portable Power Stations
              </p>
            </NavLink>
          </li>

          <li className={style.container_list_item}>
            <NavLink to={'/shop?categories=Power Banks'} className={style.container_list_item_link}>
              <img src={PowerBanks} alt="Power Banks"
                   className={style.container_list_item_link_img}/>
              <p className={style.container_list_item_link_text}>
                Power Banks
              </p>
            </NavLink>
          </li>

          <li className={style.container_list_item}>
            <NavLink to={'/shop?categories=Generators'} className={style.container_list_item_link}>
              <img src={GeneratorsImg} alt="Generators"
                   className={style.container_list_item_link_img}/>
              <p className={style.container_list_item_link_text}>
                Generators
              </p>
            </NavLink>

          </li>
          <li className={style.container_list_item}>
            <NavLink to={'/shop?categories=Solar Panels'} className={style.container_list_item_link}>
              <img src={SolarPanelsImg} alt="Solar Panels"
                   className={style.container_list_item_link_img}/>
              <p className={style.container_list_item_link_text}>
                Solar Panels
              </p>
            </NavLink>
          </li>

          <li className={style.container_list_item}>
            <NavLink to={'/shop?categories=Accessories'} className={style.container_list_item_link}>
              <img src={AccessoriesImg} alt="Accessories"
                   className={style.container_list_item_link_img}/>
              <p className={style.container_list_item_link_text}>
                Accessories
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default PictureCategories