import logoLeft from "./logo-left-removebg-preview.png"
import logoRight from "./logo-right-removebg-preview.png"
import searchIcon from "./search.svg"
import userIcon from "./user.svg"
import marketIcon from "./shopping-cart.svg"
import style from "./Header.module.scss"

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.header_c1}>
                <div className={style.header_c1_logos}>
                    <div className={style.header_c1_logos_left}>
                        <img src={logoLeft} alt="logo-left" title="logo-left"/>
                    </div>
                    <div className={style.header_c1_logos_right}>
                        <img src={logoRight} alt="logo-right" title="logo-right"/>
                    </div>
                </div>
                <div className={style.header_c1_navigation}>
                    <ul className={style.header_c1_navigation_menu}>
                        <li>Shop</li>
                        <li>Offers</li>
                        <li>Delivery</li>
                        <li>Payment</li>
                        <li>About us</li>
                        <li>Contacts</li>
                    </ul>
            </div>
            </div>
            <div className={style.header_c2}>
                <button>
                    <img src={searchIcon} alt="searchIcon" title="icon"/>
                </button>
                <button>
                    <img src={userIcon} alt="userIcon" title="icon"/>
                </button>
                <button>
                    <img src={marketIcon} alt="marketIcon" title="icon"/>
                </button>
            </div>
        </div>
    )
}
export default Header