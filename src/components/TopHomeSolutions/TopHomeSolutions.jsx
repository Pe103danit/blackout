import style from './TopHomeSolutions.module.scss'
import { NavLink } from 'react-router-dom';
import img1 from './TopHomeSolutionsImg1.jpg'
import img2 from './TopHomeSolutionsImg2.jpg'
const TopHomeSolutions = () => {
    return (
        <div className={style.TopHomeSolutions}>
            <p className={style.TopHomeSolutions_title}>Sun and Energy Reserves: Top Home Solutions</p>
            <div className={style.TopHomeSolutions_wrapper}>
                <div className={style.TopHomeSolutions_wrapper_item}>
                    <NavLink to='/shop?categories=Solar Panels' className={style.TopHomeSolutions_wrapper_item_link}>
                        <img className={style.TopHomeSolutions_wrapper_item_link_img} src={img1} alt='Solar panels' title='Solar panels'/>
                        <p className={style.TopHomeSolutions_wrapper_item_link_title}>Capture the Power of the Sun: Illuminate Your Life with Solar Brilliance!</p>
                        <p className={style.TopHomeSolutions_wrapper_item_link_text}>Learn more &#62;</p>
                    </NavLink>
                </div>
                <div className={style.TopHomeSolutions_wrapper_item}>
                    <NavLink to='/shop?categories=Power Banks' className={style.TopHomeSolutions_wrapper_item_link}>
                        <img className={style.TopHomeSolutions_wrapper_item_link_img} src={img2} alt='Power banks' title='Power banks' />
                        <p className={style.TopHomeSolutions_wrapper_item_link_title}>Empower Your Energy On-the-Go: Power Banks for Uninterrupted Freedom!</p>
                        <p className={style.TopHomeSolutions_wrapper_item_link_text}>Learn more &#62; </p>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default TopHomeSolutions