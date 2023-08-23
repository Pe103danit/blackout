import {
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
    TiktokIcon,
    NewsletterIcon,
    FacebookIconDark,
    InstagramIconDark,
    YoutubeIconDark,
    TiktokIconDark,
    NewsletterIconDark,
} from '../../components/assets/Icons';
import style from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
    const themeStyle = props.lightTheme ? 'light' : 'dark';
    const criticalHidden = 'critical-hidden';
    const footerItemLinkList = 'footer__item_link_list';
    const footerItemInnerLinkList = 'footer__item_inner--link_list';
    const footerItemText = 'footer__item_text';
    const footerItemInnerText = 'footer__item_inner--text';
    const socialIcons = 'social-icons';
    const footerIconList = 'footer__icon_list';
    const listInline = 'list--inline';
    const footerItemNewsletter = 'footer__item_newsletter';
    const footerItemInnerNewsletter = 'footer__item_inner--newsletter'
    const newsletterInput = 'newsletter__input';
    const gridFooterFloatLeft = 'grid--footer-float-left';
    const mobileReverse = 'mobile-reverse';
    const oneHalf = 'one-half';
    const footerItemAlignLeft = 'footer-item-align-left';
    const footerItemAlignRight = 'footer-item-align-right';
    const smallOneWhole = 'small-one-whole';
    const siteFooterPolicy = 'site-footer__policy';
    const customPaymentIconsFooter = 'custom_payment_icons--footer';

    return (
        <div className={`${style.footer} ${criticalHidden} ${themeStyle}`}>
            <div className={`${style.footer_wrapper}`}>
                <div className={`${style.page_width_small}`}>
                    <div className={`${style.footer__content}`}>
                        <div className={`${style.footer__item} ${footerItemLinkList}`}>
                            <div className={`${style.footer__item} ${footerItemInnerLinkList}`}>
                                <div className={`${style.h5}`}>Products
                                </div>
                                <ul className={`${style.footer__linklist}`}>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/portable_power_stations'} className={`${style.footer__linklist_item_link}`}>Portable Power Stations</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/power_banks'} className={`${style.footer__linklist_item_link}`}>Power Banks</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/generators'} className={`${style.footer__linklist_item_link}`}>Generators</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/solar_panels'} className={`${style.footer__linklist_item_link}`}>Solar Panels</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/accessories'} className={`${style.footer__linklist_item_link}`}>Accessories</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${style.footer__item} ${footerItemLinkList}`}>
                            <div className={`${style.footer__item} ${footerItemInnerLinkList}`}>
                                <div className={`${style.h5}`}>Support
                                </div>
                                <ul className={`${style.footer__linklist}`}>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/'} className={`${style.footer__linklist_item_link}`}>FAQ</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/site_map'} className={`${style.footer__linklist_item_link}`}>Sitemap</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${style.footer__item} ${footerItemLinkList}`}>
                            <div className={`${style.footer__item} ${footerItemInnerLinkList}`}>
                                <div className={`${style.h5}`}>Privacy & Terms
                                </div>
                                <ul className={`${style.footer__linklist}`}>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/payment'} className={`${style.footer__linklist_item_link}`}>Payment</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/delivery'} className={`${style.footer__linklist_item_link}`}>Delivery</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/'} className={`${style.footer__linklist_item_link}`}>Privacy Policy</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/'} className={`${style.footer__linklist_item_link}`}>Terms of Service</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${style.footer__item} ${footerItemLinkList}`}>
                            <div className={`${style.footer__item} ${footerItemInnerLinkList}`}>
                                <div className={`${style.h5}`}>Company
                                </div>
                                <ul className={`${style.footer__linklist}`}>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/about_us'} className={`${style.footer__linklist_item_link}`}>About Us</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/contacts'} className={`${style.footer__linklist_item_link}`}>Contacts</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${style.footer__item} ${footerItemText}`}>
                            <div className={`${style.footer__item_inner} ${footerItemInnerText}`}>
                                <ul className={`${style.footer__social_icons} ${socialIcons} ${footerIconList} ${listInline}`}>
                                    <li className={`${style.social_icons__item}`}>
                                        <NavLink to='/' className={`${style.social_icons__link}`}>
                                            {props.lightTheme
                                                ? <FacebookIcon/>
                                                : <FacebookIconDark/>
                                            }
                                        </NavLink>
                                    </li>
                                    <li className={`${style.social_icons__item}`}>
                                        <NavLink to='/' className={`${style.social_icons__link}`}>
                                            {props.lightTheme
                                                ? <InstagramIcon/>
                                                : <InstagramIconDark/>
                                            }
                                        </NavLink>
                                    </li>
                                    <li className={`${style.social_icons__item}`}>
                                        <NavLink to='/' className={`${style.social_icons__link}`}>
                                            {props.lightTheme
                                                ? <YoutubeIcon/>
                                                : <YoutubeIconDark/>
                                            }
                                        </NavLink>
                                    </li>
                                    <li className={`${style.social_icons__item}`}>
                                        <NavLink to='/' className={`${style.social_icons__link}`}>
                                            {props.lightTheme
                                                ? <TiktokIcon/>
                                                : <TiktokIconDark/>
                                            }
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${style.footer__item} ${footerItemNewsletter}`}>
                            <div className={`${style.footer__item_inner} ${footerItemInnerNewsletter}`}>
                                <div className={`${style.footer__newsletter}`}>
                                    <div className={`${style.contact__form}`}>
                                        <div className={`${style.input__group}`}>
                                            <label for='newsletter-form-email' className={`${style.visually_hidden}`}></label>
                                            <input type="email" name='contact[email]' id='newsletter-form-email' className={`${style.input__group__field} ${newsletterInput}`} value='Email address'/>
                                            <span className={`${style.input__group__btn} ${themeStyle}`}>
                                                <button type='button' className={`${style.newsletter__submit}`} name='commit' aria-label='Submit'>
                                                    <span className={`${style.newsletter__submit_text__large}`}>
                                                    <NavLink to='/'>
                                                        {props.lightTheme
                                                        ? <NewsletterIcon/>
                                                        : <NewsletterIconDark/>
                                                        }
                                                    </NavLink>
                                                    </span>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.footer__bottom_content}>
                    <div className={`${style.page_width_small}`}>
                        <div className={`${style.grid} ${gridFooterFloatLeft} ${mobileReverse}`}>
                            <div className={`${style.grid__item} ${oneHalf} ${footerItemAlignLeft} ${smallOneWhole}`}>
                                <span className={`${style.footer__copyright_content}`}>
                                    <p>Copyright &copy; 2023
                                        <NavLink to={'/shop'}> BlackOut Store</NavLink>
                                        . All Right Reserved.
                                    </p>
                                </span>
                                <ol className={`${style.footer__linklist} ${siteFooterPolicy} ${listInline}`}>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/'} className={`${style.footer__linklist_item}`}>Terms of Service</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/'} className={`${style.footer__linklist_item}`}>Privacy Policy</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/site_map'} className={`${style.footer__linklist_item}`}>Sitemap</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/'} className={`${style.footer__linklist_item}`}>Cookies Settings</NavLink>
                                    </li>
                                </ol>
                            </div>
                            <div className={`${style.grid__item} ${footerItemAlignRight} ${oneHalf} ${smallOneWhole}`}>
                                <div className={`${style.custom_payment_icons} ${customPaymentIconsFooter}`}>
                                    <div className={`${style.payment_icon}`}>
                                        <img alt="PayPal" srcset="https://cdn.shopify.com/s/files/1/1996/9707/files/card_08_7f374817-3a3e-42f2-95ce-077b67f293d2.svg?v=1672025209" />
                                    </div>
                                    <div className={`${style.payment_icon}`}>
                                        <img alt="Visa" srcset="https://cdn.shopify.com/s/files/1/1996/9707/files/card_10_d8002835-e25f-4edb-9038-187f75f69a18.svg?v=1672025208" />
                                    </div>
                                    <div className={`${style.payment_icon}`}>
                                        <img alt="MasterCard" srcset="https://cdn.shopify.com/s/files/1/1996/9707/files/card_06_7c406d24-0983-49ff-ac8e-cf73032050d9.svg?v=1672025208" />
                                    </div>
                                    <div className={`${style.payment_icon}`}>
                                        <img alt='EuroCard' srcset="https://cdn.shopify.com/s/files/1/1996/9707/files/card_07_be5959d4-9f22-4a31-8e40-285f8e3ac6e7.svg?v=1672025208" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;