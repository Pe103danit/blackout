import style from './PrivacyPolicy.module.scss'
const privacyConfig = [
    'What Information Do We Collect',
    'How Do We Collect Your Information',
    'How Will We Use Your Information',
    'How Do We Store Your Information',
    'Marketing',
    ' Share and Transfer',
    ' Your Rights',
    'Cookies',
    'Security of Your Information',
    'Children’s Information',
    ' Supplemental Notice for California Residents',
    'Supplemental Notice for Nevada Residents',
    'Privacy Policies of Third-Party Websites/Applications',
    'Changes to Our Privacy Policy',
    'How to Contact Us'
]
const infoCollect = [{
    subtitle:
        'Account Information',
    text: 'Your EcoFlow account and related account details, including contact phone number, email address, username, passwords, social account and third-party avatar.'

}, {
    subtitle: 'Device Information.',
    text: 'Data from which your device could be identified, such as Wi-Fi List Information, Mac address, CPU information, memory information, SD card information and operating system version.'

}, {
    subtitle: 'Contact Information.',
    text: ' We may need your contact information such as your name, email address, shipping address and phone number when you place an order or contact us for customer service.'

}, {
    subtitle: 'Photo and Video.',
    text: 'We may need to upload your personal photos and videos when dealing with certain issues and modifying personal information.'

}, {
    subtitle: '',
    text: 'We may need your location information for activating your EcoFlow hardware products, Bluetooth connection, time zone setting, obtain your latitude, longitude and altitude information for data analysis to provide better marketing promotion services'
}, {
    subtitle: 'Other Information You Provide to Us.',
    text: ' Details such as the time, topic and content of your communications with EcoFlow.'
}

]
const infoHow = [{
    subtitle:
        'Directly Collection from You',
    text: 'We may collect the following personal information that you provide to us directly, including your name, contact phone number, email address, shipping address, passwords, social media account, location of your devices, your location information, your photos and videos.'
}, {
    subtitle:
        'Automatically Collection',
    text: 'We may collect your devices information automatically within the necessary scope, including location information of the device, Wi-Fi List Information, Mac address, CPU information, memory information, SD card information and operating system version.'
}, {
    subtitle:
        'From the Third Party Sources',
    text: 'We collect and use information obtained from Facebook, Google, Wechat, and other accounts you use to login to the Services (“Third-Party Accounts”), such as: your name, your user name, avatar, social account and other details you may have on your Third-Party Account profile. We do not have access to your Third-Party Account passwords.'
}, {
    subtitle:
        'Devices Permission',
    text: 'In the process of collecting and using the above personal information, we will mainly call the mobile phone device permissions. When you enable any permission, you authorize us to collect and use relevant personal information to provide you with corresponding Services. You can get your device permission list by contacting us as set forth in “Contact Us” below.'
}]
const legalBasis = [
    'To honor our contractual commitments to you: Much of our processing of personal data is to meet our contractual obligations to our users, or to take steps at users’ requests in anticipation of entering into a contract with them. For example, we handle personal data on this basis to allow you to sign up for our services.',
    'Consent: Where required by law, and in some other cases, we handle personal data on the basis of your implied or express consent.',
    'Legitimate interests: In many cases, we handle personal data on the ground that it furthers our legitimate interests in commercial activities in ways that are not overridden by the interests or fundamental rights and freedoms of the affected individuals. This includes: operating our business and services; providing security for our websites, products, software, or applications; marketing; receiving payments; preventing fraud; and knowing the customer to whom we are providing services.',
    'Legal compliance: We need to use and disclose personal data in certain ways to comply with our legal obligations (such as our obligation to share data with tax authorities).'
]
const provideServices = [
    'Managing your information and accounts, including registration;',
    'Providing the Services to you, including providing access to certain areas, functionalities, and features of our Services;',
    'Answering requests for customer or technical support;',
    'Communicating with you about your account, activities on our Services, and policy changes; and'

]
const adminPurp = [
    'Pursuing our legitimate interests such as direct marketing, research and development (including marketing research), network and information security, and fraud prevention;',
    'Detecting security incidents, protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those responsible for that activity;',
    'Measuring interest and engagement in our Services;',
    'Improving, upgrading or enhancing our Services;',
    'Developing new products and Services;',
    'Ensuring internal quality control and safety;',
    'Authenticating and verifying individual identities, including requests to exercise your rights under this policy;',
    'Debugging to identify and repair errors with our Services;',
    'Auditing relating to interactions, transactions and other compliance activities;',
    'Sharing information with third parties as needed to provide the Services;',
    'Enforcing our agreements and policies',
    'Complying with our legal obligations.'
]
const appPurp = [
    'We may use personal information for other purposes that are clearly disclosed to you at the time you provide personal information or with your consent.',
    'Automated Decision Making.We may engage in automated decision making, including profiling. EcoFlow’s processing of your personal information will not result in a decision based solely on automated processing that significantly affects you unless such a decision is necessary as part of a contract we have with you, we have your consent, or we are permitted by law to engage in such automated decision making. If you have questions about our automated decision making, you may contact us as set forth in “Contact us” below.',
    'Personal Data Used for Personalization. If you choose to personalize your services or communications where such options are available, EcoFlow will use information that we collect so that we can offer you those personalized services or communications. You can learn more about how relevant services use information to personalize your experience by reviewing the privacy information presented when you first use a service that asks to use your personal data.',
    'De-identified and Aggregated Information.We may use personal information and other information about you to create de-identified and/or aggregated information, such as de-identified demographic information, de-identified location information, information about the device from which you access our Services, or other analyses we create.'
]
const shareTransfer = [
    'Sharing with explicit consent: After obtaining your explicit consent, we will share your personal information with other parties.',
    'Fulfilling legal obligations: We may share your personal information externally in accordance with laws and regulations or the mandatory requirements of government authorities.',
    'Disclosures to Protect Us or Others: We may access, preserve, and disclose any information we store associated with you to external parties if we, in good faith, believe doing so is required or appropriate to: comply with law enforcement or national security requests and legal process, such as a court order or subpoena; protect your, our, or others’ rights, property, or safety; enforce our policies or contracts; collect amounts owed to us; or assist with an investigation or prosecution of suspected or actual illegal activity.',
    'Disclosure in the Event of Merger, Sale, or Other Asset Transfers: If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, purchase or sale of assets, or transition of service to another provider, your information may be sold or transferred as part of such a transaction, as permitted by law and/or contract.',
    'Sharing with our affiliates: Where permitted by law, we may share your information with our affiliates in order to provide you with EcoFlow products and services. We will only share necessary personal information and subject to the purposes stated in this Privacy Policy. If the affiliated company wants to change the purpose of processing personal information, it will ask for your authorization again.',
    'Sharing with authorized partners: Some of our Services will be provided by authorized partners only for the purposes stated in this policy. We may share some of your personal information with our partners to provide better customer service and user experience. We will only share your personal information for legal, legitimate, necessary, specific and explicit purposes, and only share personal information necessary to provide services. Our partners are not authorized to use the shared personal information for any other purpose. Usually our partners are:'
]
const shareTransferSecondary = [
    'Third-party service providers: Provide us with payment facilitation, package shipping, application development, electronic message processing and other services. Some of your personal information may be collected directly by third-party service providers and subject to their privacy policies.',
    'Third-party SDK service providers: In order to ensure the stable operation and function realization of the application and enable you to use and enjoy more services and functions, we will embed third-party SDKs in the application.'
]
const yourRights = [{
    subtitle: 'Request access to your personal data',
    text: 'You have the right to obtain a copy of the personal data we hold about you and certain information relating to our processing of your personal data.',

}, {
    subtitle: 'Request correction of your personal data',
    text: 'You are entitled to have your personal data corrected if it is inaccurate or incomplete. You can update your personal data at any time by logging into your account and updating your details directly, or by emailing us at privacy@ecoflow.com.'
}, {
    subtitle: 'Request erasure of your personal data',
    text: 'This enables you to request that EcoFlow delete your personal data, where there is no good reason for us continuing to process it. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.'
}, {
    subtitle: 'Request restriction of processing of your personal data',
    text: 'You have a right to ask EcoFlow to suspend the processing of your personal data in certain scenarios, for example if you want us to establish the accuracy of the data, or you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it. Where processing is restricted, we are allowed to retain sufficient information about you to ensure that the restriction is respected in future.'
}, {
    subtitle: 'Request the transfer of your personal data',
    text: 'You have the right to obtain a digital copy of your personal data or request the transfer of your personal data to another company. Please note though that this right only applies to automated data which you initially provided consent for us to use or where we used the data to perform a contract with you.'
}, {
    subtitle: 'Object to processing of your personal data',
    text: 'You have the right to object to the processing of your personal data where we believe we have a legitimate interest in processing it (as explained above). You also have the right to object to our processing of your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your data which override your rights and freedoms.'

}, {
    subtitle: 'Request human intervention for automated decision making and profiling',
    text: 'You have the right to request human intervention where we are carrying out automated decision making when processing your personal data. This form of processing is permitted where it is necessary as part of our contract with you, providing that appropriate safeguards are in place or your explicit consent has been obtained.We will try to respond to all legitimate requests within one month. Occasionally, it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated. We may need to request specific information from you to help us confirm your identity and ensure your right to exercise any of the above rights. This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it'
}, {
    subtitle: 'Right to lodge a complaint',
    text: 'If you have any concerns or complaints regarding the way in which we process your data, please email us directly at privacy@ecoflow.com. You also have the right to make a complaint to the data protection regulator in the US or EU or in other competent authority. We would, however, appreciate the chance to deal with your concerns before you approach the data protection regulator, so please do contact us in the first instance.'
}]
const cookies = [
    'Strictly necessary cookies, which are required for the operation of the Services. Without them, for example, you would not be able to use your Account.',
    'Analytical/performance cookies, which allow EcoFlow to recognize and count the number of visitors, learn how visitors navigate the Services, and improve the Services.',
    'Functionality cookies, which EcoFlow uses to recognize you when you return to the Services.'
]
const privacyPolicy = () => {
    return (
        <div className={style.Policy}>
            <div className={style.Policy_position_container}>
            <h2>Privacy policy</h2>
            <h5 className={style.Policy_subtitle}>EcoFlow Services Privacy Policy</h5>
            <p className={style.Policy_text}> Last Updated: August 17, 2022</p>
            <p className={style.Policy_text}>Effective Date: August 17, 2022</p>
            <p className={style.Policy_text}>At EcoFlow Inc and its affiliated companies (“EcoFlow”, “we,” “our” or “us”), we respect your privacy and treat your information with the utmost care.</p>
            <p className={style.Policy_text}>This Privacy Policy explains how we collect, use, and disclose your information through our websites, mobile applications, products, customer support and other services (collectively referred to as “Product”, “Products” or “Services”), as well as any other third party services or products that link to this Privacy Policy.</p>
            <p className={style.Policy_text}>By agreeing to this Privacy Policy in your account setup or by using our Products, or any other third party services or products that link to this Privacy Policy, you consent to the processing of your information as set forth in this Privacy Policy.</p>
            <p className={style.Policy_text}>This Policy describes:</p>
            <p className={style.Policy_text}>What Information Do We Collect</p>
            <ol className={style.Policy_list}>
                {privacyConfig.map((item) => (
                    <li className={style.Policy_list_item} key={item}>
                        {item}
                    </li>
                ))}
            </ol>
            <ol className={style.Policy_main_list}>
                <li>
                    <h3>
                        What Information Do We Collect
                    </h3>
                    <p className={style.Policy_above_list}>At EcoFlow, we believe that you can have great products and great privacy. This means that we strive to collect only the personal data that we need. We may collect a variety of information, including:</p>
                    <ul className={style.Policy_what_list}>
                        {infoCollect.map((item) => (
                            <li key={item}>
                                <p><span>{item.subtitle}</span>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                    <p className={style.Policy_required}>You are not required to provide the personal data that we have requested. However, if you choose not to do so, in many cases we will not be able to provide you with our products or services or respond to requests you may have.</p>
                </li>
                <li>
                    <h3>How Do We Collect Your Information</h3>
                    <p className={style.Policy_required}>You directly provide EcoFlow with most of the data we collect. There are four ways we collect your information with your consent:</p>
                    <ul className={style.Policy_big_list}>
                        {infoHow.map((item) => (
                            <li className={style.Policy_big_list_item} key={item}>
                                <h5>{item.subtitle}</h5>
                                <p className={style.Policy_big_list_text}>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                    <p className={style.Policy_also_choose}>You can also choose to change the scope of consent or withdraw your authorization at any time. After the authorization is withdrawn, we will no longer collect personal information related to these permissions, and we will not be able to continue to provide you with corresponding Services.</p>
                    <p className={style.Policy_however}>However, your decision to withdraw consent or authorization will not affect our previous collection and use of personal information based on your authorization. When we want to use the information for other purposes not specified in this Policy, we will ask for your prior consent.</p>
                </li>
                <li>
                    <h3>How Will We Use Your Information</h3>
                    <p className={style.Policy_personal_data}>EcoFlow uses personal data to power our Services, to process your transactions, to communicate with you, for security and fraud prevention, and to comply with law. We may also use personal data for other purposes with your consent.</p>
                    <p className={style.Policy_data}>EcoFlow uses your personal data only when we have <span>a valid legal basis</span>  to do so:  </p>
                    <ul className={style.Policy_legal_basis_list} >
                        {legalBasis.map((item) => (
                            <li key={item}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <p className={style.Policy_uses}>EcoFlow uses your personal data only <span>for the purposes</span> described below:</p>
                    <h5>Provide Our Services</h5>
                    <p className={style.Policy_we_use}>We use your information to fulfil our agreements with you and provide you with our Services, we process your personal information as necessary for the performance of a contract to which you are a party or in order to take steps at your request prior to entering into a contract, including but not limited to:</p>
                    <ul className={style.Policy_provide_services}>
                        {provideServices.map((item) => (
                            <li key={item}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <h5 className={style.Policy_admin}>
                        Administrative Purposes
                    </h5>
                    <p className={style.Policy_various}>We use your information to fulfil our agreements with you and provide you with our Services. We process your personal data as necessary for the performance of a contract to which you are a party or in order to take steps at your request prior to entering into a contract, including but not limited to:</p>
                    <ul className={style.Policy_admin_purpose}>
                        {adminPurp.map((item) => (
                            <li key={item}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <h5>Other Purposes</h5>
                    <p className={style.Policy_also_info}>We also use your information for other purposes as requested by you or as permitted by applicable law.</p>
                    <ol className={style.Policy_app_purp}>
                        {appPurp.map((item) => (
                            <li className={style.Policy_app_purp_item} key={item}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ol>
                </li>
                <li>
                    <h3>
                        How Do We Store Your Information
                    </h3>
                    <p className={style.Policy_collect_info}>The information that we collect from you will be processed primarily in the EU and the United States but may be transferred to and stored at/processed in other countries.</p>
                    <p className={style.Policy_retain}><span>We retain personal data only for so long as necessary to fulfill the purposes for which it was collected, including as described in this Privacy Policy or in our service-specific privacy notices, or as required by law.</span></p>
                    <p className={style.Policy_collect_info}>We will retain your personal data for the period necessary to fulfill the purposes outlined in this Privacy Policy and our service-specific privacy summaries. When assessing retention periods, we first carefully examine whether it is necessary to retain the personal data collected and, if retention is required, work to retain the personal data for the shortest possible period permissible under law.</p>
                </li>
                <li>
                    <h3>Marketing</h3>
                    <p className={style.Policy_opt_up_text}>You can <span className={style.Policy_opt_up}>opt out</span> of having your information being used by EcoFlow for performance-based advertising by accessing Cookie Settings at the bottom of the web page and following the most recent published instructions. If you limit ad tracking, you will still see advertisements (even ones sourced from EcoFlow’s network), but we will no longer be able to use the personal information described above in Section 1 to serve you with more relevant ads.</p>
                    <p className={style.Policy_addition}>In addition, the advertising identifier (along with any information collected about that identifier) that was previously assigned to you will also be disassociated. This means that if at a later stage, you decide to opt back in, we will not be able to use any of your past information for advertising purposes, and you will (for all practical purposes) be a new user to our system</p>

                </li>
                <li>
                    <h3>Share and Transfer</h3>
                    <h5 className={style.Policy_share} >Share</h5>
                    <p className={style.Policy_eco_share}>We will not share your personal information with any company, organization or individual other than EcoFlow except in the following cases:</p>
                    <ol className={style.Policy_share_transfer}>
                        {shareTransfer.map((item) => (
                            <li key={item}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ol>
                    <ul className={style.Policy_share_transfer_secondary}>
                        {shareTransferSecondary.map((item) => (
                            <li key={item}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>

                    <p className={style.Policy_transfer}>Transfer</p>
                    <p className={style.Policy_we_wont}>We will not transfer your personal information to any company, organization or individual unless we obtain your express consent, or when a merger, acquisition or bankruptcy liquidation is involved, if the transfer of personal information is involved, we will require a new holder of your Companies and organizations with personal information continue to be bound by this Privacy Policy, otherwise we will require the company and organization to seek your authorization and consent again.</p>
                    <ul className={style.Policy_international}>
                        <li><span className={style.Policy_trans}>International Data Transfers.</span> We may transfer to, process, and store the data we collect about you in countries other than the country in which the data was originally collected, including the United States, EU, China or other destinations. Those countries may not have the same data protection laws as the country in which you provided the data. When we transfer your data to other countries, we will protect the data as described in the Privacy Policy and comply with applicable legal requirements providing adequate protection for the international data transfer.</li>
                    </ul>
                </li>
                <li>
                    <h3>Your Rights</h3>
                    <p className={style.Policy_several}>You have several rights under the data privacy legislation. This includes, under certain circumstances, the right </p>
                    <ul className={style.Policy_ur_rights}>
                        {yourRights.map((item) => (
                            <li className={style.Policy_ur_rights_item} key={item}>
                                <h5>{item.subtitle}</h5>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                    <p className={style.Policy_exercise}>If you wish to exercise any of these rights, please email us at privacy@ecoflow.com.</p>
                </li>
                <li>
                    <h3>Cookies</h3>
                    <p className={style.Policy_cookies}>Cookies are small text files that are sent to or accessed from your web browser or your computer’s hard drive. Cookies typically contains the name of the domain (internet location) from which the cookies originated, the “lifetime” of the cookies (i.e., when it expires) and a randomly generated unique number or similar identifier. Cookies also may contain information about Device, such as: user settings, browsing history, and activities conducted while using the Services.</p>
                    <p className={style.Policy_cookies}>Our Services use the following cookies:</p>
                    <ul className={style.Policy_cookies_list}>
                        {cookies.map((item) => (
                            <li key={item}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <p className={style.Policy_learn_more}>To learn more about cookies and web beacons, please see our [Cookie Policy].</p>
                </li>
                <li>
                    <h3>Security of Your Information</h3>
                    <p className={style.Policy_sec_text}>We take steps to ensure that your information is treated securely and in accordance with this Privacy Policy. Unfortunately, no system is 100% secure, and we cannot ensure or warrant the security of any information you provide to us. We have taken appropriate safeguards to require that your personal information will remain protected and require our third-party service providers and partners to have appropriate safeguards as well. To the fullest extent permitted by applicable law, we do not accept liability for unauthorized disclosure.</p>
                    <p className={style.Policy_sec_text}>By using our Services or providing personal information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use of our Services. If we learn of a security system’s breach, we may attempt to notify you electronically by posting a notice on our Services, by mail or by sending an email to you.</p>
                </li>
                <li>
                    <h3>Children’s Information</h3>
                    <p className={style.Policy_child_info}>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                    <p className={style.Policy_child_info}>EcoFlow does not knowingly collect any Personal Identifiable Information from children under the age of 13 in EU, or age under 14 in US (or other age as required by local law). If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                    <p className={style.Policy_child_info}>If we become aware that a child has provided us with personal information in violation of applicable law, we will delete any personal information we have collected, unless we have a legal obligation to keep it, and terminate the child’s account.</p>
                </li>
                <li>
                    <h3>Supplemental Notice for California Residents</h3>
                    <p className={style.Policy_supplemental}>The California Consumer Privacy Act of 2018 (“CCPA”) was amended by the California Privacy Rights Act of 2020 (“CPRA”) which took effect on January 1, 2023. As required by laws, covered businesses are required to comply with all express statutory requirements including those CCPA regulations currently in effect. As a result, this Section 11 has been updated to reflect the changes by the CPRA and has covered the content complying with the CCPA regulations currently in effect. Please note that any terms defined in the CCPA and the CPRA shall have the same meaning in this Section.</p>
                    <p className={style.Policy_supplemental}>This Supplemental California Privacy Notice only applies to our processing of personal information that is subject to the CCPA & CPRA. The CCPA & CPRA provide California residents with the right to know what categories of personal information EcoFlow collected prior to January 1, 2022 and whether EcoFlow disclosed that personal information for a business purpose (e.g., to a service provider). California residents can find this information below:</p>
                    <table className={style.Policy_table}>
                        <tr>
                            <th className={style.Policy_category}><h5>Category of Personal Information Collected by EcoFlow</h5></th>
                            <th><h5>Category of Third-Party Information is Disclosed to for a Business Purpose</h5></th>
                        </tr>
                        <tr>
                            <td>
                                <h5>Identifiers.</h5>
                                <p>A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, or other similar identifiers.</p>
                            </td>
                            <td>
                                <ul className={style.Policy_table_list}>
                                    <li>Service providers</li>
                                    <li>Advertising networks</li>
                                    <li> Social networks</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Internet or other electronic network activity</h5>
                                <p>Browsing history, search history, information on a consumer's interaction with an internet website, application, or advertisement.</p>
                            </td>
                            <td>
                                <ul className={style.Policy_table_list}>
                                    <li>Service providers</li>
                                    <li>Advertising networks</li>
                                    <li> Social networks</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e))</h5>
                                <p>A name, signature, physical characteristics or description, address, telephone number, education, employment, employment history, bank account number or other financial information. Personal Information does not include publicly available information that is lawfully made available to the general public from federal, state, or local government records. Note: Some personal information included in this category may overlap with other categories.</p>
                            </td>
                            <td>
                                <ul className={style.Policy_table_list}>
                                    <li>Service providers</li>
                                    <li>Advertising networks</li>
                                    <li> Social networks</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Geolocation data</h5>
                                <p>Physical location or movements.</p>
                            </td>
                            <td>
                                <ul className={style.Policy_table_list}>
                                    <li>Service providers</li>
                                    <li>Advertising networks</li>
                                    <li> Social networks</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    <p className={style.Policy_covering}>In addition to providing a notice covering the categories of personal information to be collected and whether EcoFlow disclosed that personal information for a business purpose, the CCPA & CPRA also require businesses to provide California residents with the notice of including the purposes for which the personal information will be used “at or before the point of collection” to the consumers; and whether the information will be sold or shared; length of data retention. The enumerated information is set forth in Sections 1 to 4 as stated above.</p>
                    <h5>“Sale or Sharing” of Personal Information under the CCPA & CPRA</h5>
                    <p className={style.Policy_covering_text}>Under the definitions of CCPA & CPRA, EcoFlow does not “sell or share” personal information, nor do we have actual knowledge of any “sale or sharing” of personal information of minors under 16 years of age.</p>
                    <h5>“Limiting the Use of Sensitive Personal Information” under the CPRA</h5>
                    <p className={style.Policy_covering_text}>Under the CPRA, you have the right to limit the use of your personal information to the purposes for which the sensitive information was collected.</p>
                    <h5>Additional Privacy Rights for California Residents</h5>
                    <ul className={style.Policy_covering_list}>
                        <li><p><span className={style.Policy_black}>Non-Discrimination.</span>California residents have the right not to receive discriminatory treatment by us for the exercise of their rights conferred by the CCPA.</p></li>
                        <li><p><span className={style.Policy_black}>Authorized Agent.</span>Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child. To designate an authorized agent, please contact us as set forth in “Contact Us” below and provide written authorization signed by you and your designated agent.</p></li>
                        <li><p>To protect your privacy, we will take steps the following steps to verify your identity before fulfilling your request. When you make a request, we will ask you to provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative, which may include asking you for additional proof of identity and asking questions regarding your account and use of our Services.</p></li>
                    </ul>
                    <p className={style.Policy_california_dif}>If you are a California resident and would like to exercise any of your rights under the CCPA, please contact us as set forth in “Contact Us” below. We will process such requests in accordance with applicable laws.</p>
                    <ul className={style.Policy_covering_list}>
                        <li>
                            <p className={style.Policy_california}>
                                <span className={style.Policy_black}>
                                    California Shine the Light.
                                </span>
                                The California “Shine the Light” law permits users who are California residents to request and obtain from us once a year, free of charge, a list of the third parties to whom we have disclosed their personal information (if any) for their direct marketing purposes in the prior calendar year, as well as the type of personal information disclosed to those parties.
                            </p>
                        </li>
                        <li>
                            <p className={style.Policy_california}>
                                <span className={style.Policy_black}>
                                    Right for minors to remove posted content.
                                </span>
                                Where required by law, California residents under the age of 18 may request to have their posted content or information removed from the publicly-viewable portions of the Services by contacting us directly as set forth in “Contact Us” below or logging into their account and removing the content or information using our self-service tools.
                            </p>
                        </li>
                    </ul>

                </li>
                <li>
                    <h3>Supplemental Notice for Nevada Residents</h3>
                    <p className={style.Policy_california_dif}>If you are a resident of Nevada, you have the right to opt-out of the sale of certain Personal Information to third parties who intend to license or sell that Personal Information. Please note that we do not currently sell your Personal Information as sales are defined in Nevada Revised Statutes Chapter 603A. If you have any questions, or to request that we do not sell your information in the future, please “Contact Us” as set forth below with the subject line “Nevada Do Not Sell Request”.</p>
                </li>
                <li>
                    <h3>Privacy Policies of Third-Party Websites/Applications</h3>
                    <p className={style.Policy_california_dif}>The Services may contain links to other websites/applications and other websites/applications may reference or link to our Services. These third-party services are not controlled by us. We encourage our users to read the privacy policies of each website and application with which they interact. We do not endorse, screen or approve, and are not responsible for, the privacy practices or content of such other websites or applications. Providing personal information to third-party websites or applications is at your own risk.</p>
                </li>
                <li> <h3>Changes to Our Privacy Policy</h3>
                    <p className={style.Policy_california_dif}>We may revise this Privacy Policy from time to time in our sole discretion. If there are any material changes to this Privacy Policy, we will notify you as required by applicable law. You understand and agree that you will be deemed to have accepted the updated Privacy Policy if you continue to use our Services after the new Privacy Policy takes effect.</p>
                    <p className={style.Policy_california}> If at any time you find either this Agreement or the Privacy Policy unacceptable, you must immediately cease accessing the App and Websites. Unless EcoFlow obtains your express consent, any revised Privacy Policy will apply only to information collected by EcoFlow after the revised Privacy Policy takes effect, and not to information collected under any earlier versions of the Privacy Policy.</p>
                </li>
                <li>
                    <h3>How to Contact Us</h3>
                    <p className={style.Policy_california_dif}>We welcome feedback and are happy to answer any questions you may have about your data.</p>
                </li>
            </ol>
            </div>
        </div>

    )
}

export default privacyPolicy