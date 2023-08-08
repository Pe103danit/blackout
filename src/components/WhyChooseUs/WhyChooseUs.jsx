import style from './WhyChooseUs.module.scss'

const WhyChooseUs = () => {
    return (
        <div className={style.WhyChooseUs}>
            <p className={style.WhyChooseUs_title}>Why choose us?</p>
            <div className={style.WhyChooseUs_wrapper}>

                <div className={style.WhyChooseUs_Item}>
                    <img src='https://cdn.shopify.com/s/files/1/0592/6004/3456/files/Shipping_3x.svg?v=1675165253' alt='Fast & Free Shipping' title='Fast & Free Shipping'/>
                    <p className={style.WhyChooseUs_title_item}>Fast & Free Shipping</p>
                    <p className={style.WhyChooseUs_text_item}>Orders are usually processed and delivered within 4-10 business days.</p>
                </div>

                <div className={style.WhyChooseUs_Item}>
                    <img src='https://cdn.shopify.com/s/files/1/1996/9707/files/Warranty_3x.svg?v=1670212902' alt='Warranty Protection' title='Warranty Protection'/>
                    <p className={style.WhyChooseUs_title_item}>Warranty Protection</p>
                    <p className={style.WhyChooseUs_text_item}>All products are covered by a warranty service.</p>
                </div>

                <div className={style.WhyChooseUs_Item}>
                    <img src='https://cdn.shopify.com/s/files/1/1996/9707/files/Payments_3x.svg?v=1670212902' alt='Secure Payments' title='Secure Payments'/>
                    <p className={style.WhyChooseUs_title_item}>Secure Payments</p>
                    <p className={style.WhyChooseUs_text_item}>Pay by debit or credit card, PayPal, or other secure payment platform.</p>
                </div>

                <div className={style.WhyChooseUs_Item}>
                    <img src='https://cdn.shopify.com/s/files/1/1996/9707/files/Support_3x.svg?v=1670212902' alt='Lifetime Customer Support' title='Lifetime Customer Support'/>
                    <p className={style.WhyChooseUs_title_item}>Lifetime Customer Support</p>
                    <p className={style.WhyChooseUs_text_item}>9AM to 5PM BST (Weekdays)</p>
                </div>

                <div className={style.WhyChooseUs_Item}>
                    <img src='https://cdn.shopify.com/s/files/1/1996/9707/files/Convenient_Installment_Plans_3x.svg?v=1669967314' alt='Convenient Installment Plans'title='Convenient Installment Plans'/>
                    <p className={style.WhyChooseUs_title_item}>Convenient Installment <br />Plans</p>
                    <p className={style.WhyChooseUs_text_item}>We offer a range of installment options, including PayPal and Klarna.</p>
                </div>

                <div className={style.WhyChooseUs_Item}>
                    <img src='https://cdn.shopify.com/s/files/1/1996/9707/files/Global_Elite_Membership_3x.svg?v=1669967315' alt='Earn Rewards/Global Elite Membership' title='Earn Rewards/Global Elite Membership' />
                    <p className={style.WhyChooseUs_title_item}>Earn Rewards/Global Elite Membership</p>
                    <p className={style.WhyChooseUs_text_item}>Become a member to earn EcoCredits and exclusive rewards every time you shop.</p>
                </div>

            </div>

        </div>
    )
}

export default WhyChooseUs