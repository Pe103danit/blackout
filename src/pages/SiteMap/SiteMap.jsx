import style from './SiteMap.module.scss';
import { Link } from 'react-router-dom';

const SiteMap = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightSiteMap'
    : 'darkSiteMap'
  return (
    <div className={style.section}>
      <div className={`${style.section_container} ${themeStyle}`}>
        <h1 className={style.section_container_title}>
          Site map
        </h1>
        <ul className={style.section_container_body}>
          <li className={style.section_container_body_item}>
            <Link to='/'>Home</Link>
          </li>
          <li className={style.section_container_body_item}>
            <Link to='/shop'>Shop</Link>
          </li>
          <li className={style.section_container_body_item}>
            <Link to='/offers'>Offers</Link>
          </li>
          <li className={style.section_container_body_item}>
            <Link to='/delivery'>Delivery</Link>
          </li>
          <li className={style.section_container_body_item}>
            <Link to='/payment'>Payment</Link>
          </li>
          <li className={style.section_container_body_item}>
            <Link to='/about_us'>About Us</Link>
          </li>
          <li className={style.section_container_body_item}>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li className={style.section_container_body_item}>
            <Link to='/login'>Login</Link>
          </li>
          <li className={style.section_container_body_item}>
            <Link to='/wishlist'>Wishlist</Link>
          </li>
          <li className={style.section_container_body_item}>
            <Link to='/basket'>Basket</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteMap;