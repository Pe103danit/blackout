import style from './Contacts.module.scss'
import {
    MailIconLight,
    MailIconDark,
    FacebookIcon,
    FacebookIconDark
}
    from '../../components/assets/Icons'
import { useEffect } from 'react'

const Contacts = (props) => {
    const themeStyle = props.lightTheme
        ? 'lightContacts'
        : 'darkContacts'

    const email = 'pe103danit@gmail.com';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`${style.contacts} ${themeStyle}`}>
            <div className={style.contacts_imgContainer}>
                <img alt='Contacts' src="https://res.cloudinary.com/dfmmwy38x/image/upload/v1693229090/pf-efdb5878--Contacts_cxmg7q.jpg" />
            </div>
            <div className={style.contacts_info}>
                <p>For order, technical, and customer support inquiries:</p>
                <ul className={style.contacts_info_ul}>
                    <li className={style.contacts_info_ul_li}>
                        <a
                            className={style.contacts_info_ul_li_link}
                            href={`mailto:${email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {props.lightTheme ? <MailIconLight /> : <MailIconDark />} <span>{email}</span>
                        </a> <span>(For all customers and Kickstarter Backers)</span>
                    </li>
                </ul>
                <p>Order & Payment</p>
                <ul className={style.contacts_info_ul}>
                    <li className={style.contacts_info_ul_li}>
                        <a
                            className={style.contacts_info_ul_li_link}
                            href={`mailto:${email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {props.lightTheme ? <MailIconLight /> : <MailIconDark />} <span>{email}</span>
                        </a>
                    </li>
                </ul>
                <p>Facebook Group</p>
                <ul className={style.contacts_info_ul}>
                    <li className={style.contacts_info_ul_li}>
                        <a
                            className={style.contacts_info_ul_li_link}
                            href="https://www.facebook.com/BlackOutStore"
                            rel="noopener noreferrer"
                        >
                            {props.lightTheme ? <FacebookIconDark /> : <FacebookIcon />}
                            <span>@BlackOutStore</span>
                        </a>
                    </li>
                </ul>
                <p>Company</p>
                <ul className={style.contacts_info_ul}>
                    <li className={style.contacts_info_ul_li}> BlackOut Store inc.</li>
                </ul>
                <p>Location</p>
                <ul className={style.contacts_info_ul}>
                    <li className={style.contacts_info_ul_li}> Address:
                        <span className={style.contacts_info_ul_li_link}> <span>Tychyny 1B ave., Kyiv, Ukraine</span></span>
                    </li>
                </ul>
                <iframe
                    className={style.contacts_info_map}
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6925806707227!2d30.59039987614196!3d50.42819908896607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c57deccaada1%3A0xa5e7cf7c9f8ff18b!2sDAN%20IT%20education!5e0!3m2!1suk!2sua!4v1693335267018!5m2!1suk!2su"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>
        </div>
    )
}
export default Contacts