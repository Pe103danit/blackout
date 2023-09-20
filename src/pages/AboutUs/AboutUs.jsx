import style from './AboutUs.module.scss'
import { useEffect } from 'react'

const AboutUs = (props) => {
    const themeStyle = props.lightTheme
        ? 'lightAboutUs'
        : 'darkAboutUs'

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`${style.aboutUs} ${themeStyle}`}>

            <div className={style.aboutUs_imgContainer}>
                <img className={style.aboutUs_imgContainer_picture} alt='About Us img section #1' src="https://res.cloudinary.com/dfmmwy38x/image/upload/v1694842852/UkraineAtNight_jjhy44.jpg" />
                <p className={style.aboutUs_imgContainer_slogan}>POWER A NEW WORLD</p>
            </div>
            <div className={style.aboutUs_info}>
                <h1>About BlackOut Store</h1>
                <ul className={style.aboutUs_info_ul}>
                    <li className={style.aboutUs_info_ul_li}>
                        <span>Welcome to BlackOut Store, your premier destination for all things power-related. Founded in 2023 by a passionate group of innovators in the heart of Kyiv, Ukraine, our mission is to bring electricity and power to every corner of the world, starting with our home country, Ukraine.</span>
                        <span>At BlackOut Store, we believe in the transformative power of energy. We understand that access to reliable electricity is not just a convenience but a fundamental necessity for modern life. That's why we've dedicated ourselves to providing a wide range of cutting-edge solutions, from alarm power stations to power banks and solar panels.</span>
                        <span>While we serve customers around the world, our heart and focus remain on Ukraine. We are proud to contribute to the ongoing effort to power up Ukraine and improve the lives of its citizens. By choosing BlackOut Store, you're not just purchasing a product; you're investing in a brighter, more sustainable future for all.</span>
                        <span>Join us on this electrifying journey as we continue to innovate and expand our product offerings. At BlackOut Store, we are dedicated to powering your life, wherever you are.</span>
                        <span>Thank you for being part of our mission.</span>
                    </li>
                </ul>
            </div>
            <div className={style.aboutUs_imgContainer}>
                <img className={style.aboutUs_imgContainer_picture} alt='About Us img section #3' src="https://res.cloudinary.com/dfmmwy38x/image/upload/v1694842907/27ff14296_ouqadg.jpg" />
                <div className={style.aboutUs_imgContainer_centeredDiv}>
                    <h3>Our Vision </h3>
                    <span>Empower individuals and communities with reliable, sustainable power solutions.</span>
                </div>
            </div>
            <div className={style.aboutUs_info}>
                <p>Our Values</p>
                <ul className={style.aboutUs_info_ul}>
                    <li className={style.aboutUs_info_ul_li}>
                        <div className={style.aboutUs_info_ul_li_centeredDiv}>
                            <span>Quality: We uphold the highest standards in the products we offer.</span>
                            <span>Sustainability: We are committed to reducing our environmental footprint.</span>
                            <span>Community: We believe in the power of unity and cooperation to achieve lasting change.</span>
                        </div>
                        <span>Discover the future of power with BlackOut Store. Together, we'll light up the world, one innovation at a time.</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default AboutUs