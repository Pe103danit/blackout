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
import {useMutation} from 'react-query';
import { instance } from '../../components/assets/axiosUrl'
import { useEffect, useState } from 'react'

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

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isErrorSubscribed, setIsErrorSubscribed] = useState(false);
    useEffect(() => {
        if (isSubscribed || isErrorSubscribed) {
            const timer = setTimeout(() => {
                setIsSubscribed(false);
                setIsErrorSubscribed(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isSubscribed, isErrorSubscribed]);

    const mutation = useMutation(
      newSubscriber => {
        return (
          instance.post('api/subscribers', {
              email: newSubscriber,
              letterSubject: 'Black out store subscribing',
              letterHtml: '<!DOCTYPE html>\n' +
                '<html lang=\'en\'>\n' +
                '<head>\n' +
                '    <meta charset=\'UTF-8\'>\n' +
                '    <meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\'>\n' +
                '    <title>Thanks for Subscribing!</title>\n' +
                '    <style>\n' +
                '        body {\n' +
                '            font-family: Arial, sans-serif;\n' +
                '            text-align: center;\n' +
                '            background-color: #f5f5f5;\n' +
                '            margin: 0;\n' +
                '            padding: 20px;\n' +
                '        }\n' +
                '        .container {\n' +
                '            max-width: 600px;\n' +
                '            margin: 0 auto;\n' +
                '            padding: 20px;\n' +
                '            background-color: #ffffff;\n' +
                '            border-radius: 8px;\n' +
                '            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n' +
                '        }\n' +
                '        h1 {\n' +
                '            color: #333333;\n' +
                '        }\n' +
                '        p {\n' +
                '            color: #666666;\n' +
                '            line-height: 1.6;\n' +
                '        }\n' +
                '    </style>\n' +
                '</head>\n' +
                '<body>\n' +
                '<div class=\'container\'>\n' +
                '    <h1>Thanks for Subscribing!</h1>\n' +
                '    <p>We appreciate your decision to subscribe to our updates. You\'re now part of our community, and you\'ll receive the latest news, offers, and exciting content delivered straight to your inbox.</p>\n' +
                '    <p>If you have any questions or need assistance, feel free to <a href=\'mailto:pe103danit@gmail.com\'>contact us</a>.</p>\n' +
                '    <img src=\'https://sendpulse.com/blog/wp-content/webp-express/webp-images/uploads/2020/02/cover-6-1110x420.png.webp\' alt=\'Black out store\' style=\'max-width: 100%; border-radius: 8px; margin: 20px 0;\'>\n' +
                '    <p>Stay tuned for amazing content!</p>\n' +
                '</div>\n' +
                '</body>\n' +
                '</html>'
            })
        )
      },
      {
          onSuccess: (data) => {
              console.log(data)
              setIsSubscribed(true);
          },
          onError: (error) => {
              console.error(error)
              setIsErrorSubscribed(true)
          }
      }
    )

    const [subscriberCandidate, setSubscriberCandidate] = useState('')
    const handleNewSubscriber = (e) => {
        e.preventDefault()
        mutation.mutate(subscriberCandidate)
        setSubscriberCandidate('')
    }

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
                                        <NavLink to={'/policies/privacy-policy'} className={`${style.footer__linklist_item_link}`}>Privacy Policy</NavLink>
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
                                    <form className={`${style.contact__form}`}>
                                        <div className={`${style.input__group}`}>
                                            <label htmlFor='newsletter-form-email'
                                                   className={`${style.visually_hidden}`}>
                                            </label>
                                            <input
                                              type="email"
                                              name='newsletter-form-email'
                                              id='newsletter-form-email'
                                              className={`${style.input__group__field} ${newsletterInput}`}
                                              placeholder={
                                                  isSubscribed
                                                    ? 'Thanks for subscribing!'
                                                    : (isErrorSubscribed
                                                      ? 'Something go wrong!'
                                                      : 'Email address')
                                            }
                                              value={subscriberCandidate}
                                              onChange={(e) => setSubscriberCandidate(e.target.value)}
                                            />
                                            <span className={`${style.input__group__btn} ${themeStyle}`}>
                                                <button type='submit'
                                                        className={`${style.newsletter__submit}`}
                                                        name='commit'
                                                        aria-label='Submit'
                                                        onClick={handleNewSubscriber}
                                                >
                                                    <span className={`${style.newsletter__submit_text__large}`}>
                                                        {props.lightTheme
                                                        ? <NewsletterIcon/>
                                                        : <NewsletterIconDark/>
                                                        }
                                                    </span>
                                                </button>
                                            </span>
                                        </div>
                                    </form>
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
                                        <NavLink to={'/'} className={`${style.footer__linklist_item}`}>Privacy Policy</NavLink>
                                    </li>
                                    <li className={`${style.footer__linklist_item}`}>
                                        <NavLink to={'/site_map'} className={`${style.footer__linklist_item}`}>Sitemap</NavLink>
                                    </li>
                                </ol>
                            </div>
                            <div className={`${style.grid__item} ${footerItemAlignRight} ${oneHalf} ${smallOneWhole}`}>
                                <div className={`${style.custom_payment_icons} ${customPaymentIconsFooter}`}>
                                    <div className={`${style.payment_icon}`}>
                                        <img alt="PayPal" srcSet="https://cdn.shopify.com/s/files/1/1996/9707/files/card_08_7f374817-3a3e-42f2-95ce-077b67f293d2.svg?v=1672025209" />
                                    </div>
                                    <div className={`${style.payment_icon}`}>
                                        <img alt="Visa" srcSet="https://cdn.shopify.com/s/files/1/1996/9707/files/card_10_d8002835-e25f-4edb-9038-187f75f69a18.svg?v=1672025208" />
                                    </div>
                                    <div className={`${style.payment_icon}`}>
                                        <img alt="MasterCard" srcSet="https://cdn.shopify.com/s/files/1/1996/9707/files/card_06_7c406d24-0983-49ff-ac8e-cf73032050d9.svg?v=1672025208" />
                                    </div>
                                    <div className={`${style.payment_icon}`}>
                                        <img alt='EuroCard' srcSet='https://cdn.shopify.com/s/files/1/1996/9707/files/card_07_be5959d4-9f22-4a31-8e40-285f8e3ac6e7.svg?v=1672025208' />
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