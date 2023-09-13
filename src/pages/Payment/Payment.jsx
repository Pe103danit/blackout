import style from './Payment.module.scss'
import { useEffect } from 'react'

const Payment = (props) => {
    const themeStyle = props.lightTheme
        ? 'lightContacts'
        : 'darkContacts'

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`${style.payment} ${themeStyle}`}>
            <div className={style.payment_info}>
                <h1>Payment Policy</h1>
                <p>Payment methods:</p>
                <ul className={style.payment_info_ul}>
                    <li className={style.payment_info_ul_li}>
                        <span>Currently, BlackOut Store supports payment method only throuth Credit/Debit Card. We are actively in the process of incorporating PayPal as a payment method in the near future. By subscribing, you will receive notifications about our latest updates.</span>
                    </li>
                </ul>
                <p>Detailed processes are as follows:</p>
                <p>1. Credit/Debit Card</p>
                <ul className={style.payment_info_ul}>
                    <li className={style.payment_info_ul_li}>
                        <span>We accept the Below credit/debit cards as payment:</span>
                        <div className={style.payment_info_ul_li_icon}>
                            <div>
                                <img alt="Visa" src="https://cdn.shopify.com/s/files/1/1996/9707/files/card_10_d8002835-e25f-4edb-9038-187f75f69a18.svg?v=1672025208" />
                            </div>
                            <div>
                                <img alt="MasterCard" src="https://cdn.shopify.com/s/files/1/1996/9707/files/card_06_7c406d24-0983-49ff-ac8e-cf73032050d9.svg?v=1672025208" />
                            </div>
                            <div>
                                <img alt='EuroCard' src='https://cdn.shopify.com/s/files/1/1996/9707/files/card_07_be5959d4-9f22-4a31-8e40-285f8e3ac6e7.svg?v=1672025208' />
                            </div>
                        </div>
                        <span>- Visa</span>
                        <span>- MasterCard / Maestro</span>
                        <span>* Customers cover all bank charges and transaction fees. These fees are not returned in the event of a refund.</span>
                    </li>
                </ul>
                <p>Step 1. On the shopping cart page, select "Checkout" to complete order. </p>
                <ul className={style.payment_info_ul}>
                    <li className={style.payment_info_ul_li}>
                        <img className={style.payment_info_ul_li_imgCards} alt='Payment step 1' src='https://res.cloudinary.com/dfmmwy38x/image/upload/v1694604304/step1_c1ptxc.png' />
                        <img className={style.payment_info_ul_li_tabImgCards} alt='Payment tab step 1' src='https://res.cloudinary.com/dfmmwy38x/image/upload/v1694612550/tab_step1_jeta2x.png' />
                    </li>
                </ul>
                <p>Step 2. In this quick step, simply fill in your personal details. If you're already registered, you'll skip this part automatically.</p>
                <ul className={style.payment_info_ul}>
                    <li className={style.payment_info_ul_li}>
                        <img className={style.payment_info_ul_li_imgCards} alt='Payment step 2' src='https://res.cloudinary.com/dfmmwy38x/image/upload/v1694605378/step_1.1_mn8yfw.png' />
                        <img className={style.payment_info_ul_li_tabImgCards} alt='Payment tab step 2' src='https://res.cloudinary.com/dfmmwy38x/image/upload/v1694612776/tab_step2_rbt9wj.png' />
                    </li>
                </ul>
                <p>Step 3. Now, complete the shipping information to ensure a speedy delivery of your order.</p>
                <ul className={style.payment_info_ul}>
                    <li className={style.payment_info_ul_li}>
                        <img className={style.payment_info_ul_li_imgCards} alt='Payment step 3' src='https://res.cloudinary.com/dfmmwy38x/image/upload/v1694605380/step_1.2_yetepf.png' />
                        <img className={style.payment_info_ul_li_tabImgCards} alt='Payment tab step 3' src='https://res.cloudinary.com/dfmmwy38x/image/upload/v1694612773/tab_step3_yvbwqg.png' />
                    </li>
                </ul>
                <p>Step 4. You will then be directed to Checkout's payment page. Fill out your card information and then click "Pay Now" to finalize the payment. </p>
                <ul className={style.payment_info_ul}>
                    <li className={style.payment_info_ul_li}>
                        <img className={style.payment_info_ul_li_imgCards} alt='Payment step 4' src='https://res.cloudinary.com/dfmmwy38x/image/upload/v1694604305/step2_bf9u1t.png' />
                        <img className={style.payment_info_ul_li_tabImgCards} alt='Payment tab step 4' src='https://res.cloudinary.com/dfmmwy38x/image/upload/v1694612558/tab_step4_bhphqy.png' />
                        <span className={style.payment_info_ul_li_last}> After payment is finalized, you will be directed to the page with your Order number.</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Payment