import style from './Delivery.module.scss'
import { useEffect } from 'react'

const Delivery = (props) => {
    const themeStyle = props.lightTheme
        ? 'lightContacts'
        : 'darkContacts'

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`${style.delivery} ${themeStyle}`}>
            <div className={style.delivery_imgContainer}>
                <img alt='Delivery' src="https://res.cloudinary.com/dfmmwy38x/image/upload/v1694438012/delivery_bg.2dc80d0f_deebly.jpg" />
                <h1>Delivery</h1>
            </div>
            <div className={style.delivery_info}>
                <p>
                    At <span className={style.deliveryBold}>BlackOut Store</span>, we offer reliable courier delivery services to ensure your items reach you safely and on time.
                </p>
                <div className={style.delivery_info_heading}>Delivery pricing</div>
                <p>
                    Our delivery pricing is simple and cost-effective.
                </p>
                <span>For orders under $500, the delivery fee is $10. However, we offer <span className={style.deliveryBold}>free delivery</span> for orders exceeding $500.</span>
                <p>
                    We take pride in the professionalism of our courier team. They are dedicated to handling your items with care and delivering them to your doorstep with a smile.
                </p>
                <div className={style.delivery_info_heading}>Delivery time</div>
                <p>
                    Standard delivery times are typically within 2-5 business days, depending on your location. Please note that delivery times may vary during peak seasons and holidays.
                </p>
                <p>
                    If you have any special delivery requests or instructions, feel free to <a
                        className={style.delivery_link}
                        href={'mailto:pe103danit@gmail.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        contact us
                    </a>, and we will do our best to accommodate your needs.
                </p>
                <p>
                    We want to ensure your shopping experience is hassle-free from start to finish, and that includes a smooth and reliable delivery process.
                </p>
            </div>
        </div>
    );
};

export default Delivery;
