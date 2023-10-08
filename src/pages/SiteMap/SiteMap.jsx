import style from './SiteMap.module.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'

const SiteMap = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightSiteMap'
    : 'darkSiteMap'
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <ul className={style.section_container_body_item_list}>
              <li className={style.section_container_body_item_list_item}>
                <Link to='/shop?categories=Accessories'>Accessories</Link>
              </li>
              <li className={style.section_container_body_item_list_item}>
                <Link to='/shop?categories=Generators'>Generators</Link>
              </li>
              <li className={style.section_container_body_item_list_item}>
                <Link to='/shop?categories=Portable Power Stations'>Portable Power Stations</Link>
              </li>
              <li className={style.section_container_body_item_list_item}>
                <Link to='/shop?categories=Power Banks'>Power Banks</Link>
              </li>
              <li className={style.section_container_body_item_list_item}>
                <Link to='/shop?categories=Solar Panels'>Solar Panels</Link>
              </li>
            </ul>
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