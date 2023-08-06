import logoLeft from './logo-left-removebg-preview.png';
import logoRight from './logo-right-removebg-preview.png';
import { SearchIcon, MarketIcon, UserIcon } from '../../components/assets/Icons';

import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (<div className={style.header}>
            <div className={style.header_c1}>
                <div className={style.header_c1_logos}>
                    <NavLink to='/' className={style.header_c1_logos_left}>
                        <img src={logoLeft} alt='logo-left' />
                    </NavLink>
                    <button className={style.header_c1_logos_right}>
                        <img src={logoRight} alt='logo-right' title='Click me' />
                    </button>
                </div>
                <nav className={style.header_c1_navigation}>
                    <ul className={style.header_c1_navigation_menu}>
                        <li>Shop</li>
                        <li>Offers</li>
                        <li>Delivery</li>
                        <li>Payment</li>
                        <li>About us</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </div>
            <div className={style.header_c2}>
                <button>
                    <SearchIcon />
                </button>
                <button>
                    <UserIcon />
                </button>
                <button>
                    <MarketIcon />
                </button>
            </div>
        </div>);
};

export default Header;
