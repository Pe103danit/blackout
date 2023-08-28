import React from 'react'
import { Payments, Shipping, Protection, Support, Plans, Membership} from '../assets/Icons'
export const configChoose = [
    {
        src: <Shipping/>,
        title: 'Fast & Free Shipping',
        text: 'Orders are usually processed and delivered within 4-10 business days.'
    },
    {
        src: <Protection/>,
        title: 'Warranty Protection',
        text: 'All products are covered by a warranty service.'
    },
    {
        src: <Payments/>,
        title: 'Secure Payments',
        text: 'Pay by debit or credit card, PayPal, or other secure payment platform.'
    },
     {
        src: <Support/>,
        title: 'Lifetime Customer Support',
        text: '9AM to 5PM BST (Weekdays)'
    },
     {
        src: <Plans/>,
        title: 'Convenient Installment Plans',
        text: 'We offer a range of installment options, including PayPal and Klarna.'
    },
     {
        src: <Membership/>,
        title: 'Earn Rewards/Global Elite Membership',
        text: 'Become a member to earn EcoCredits and exclusive rewards every time you shop.'
    }

]