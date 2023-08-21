import style from './WhyChooseUs.module.scss'
import { configChoose } from './configChoose'
import { useSelector } from 'react-redux'
const WhyChooseUs = () => {
    const theme = useSelector(state => state.UIStateReducer.lightTheme)
    const themeStyle = theme
        ? 'lightWhyChooseUs'
        : 'darkWhyChooseUs'
    return (
        <div className={style.WhyChooseUs}>
            <p className={style.WhyChooseUs_title}>Why choose us?</p>

            <ul className={`${style.WhyChooseUs_wrapper} ${themeStyle} ${theme ? '' : style.WhyChooseUs_bg}`}>

                {configChoose.map(item => (
                    <li key={item.title} className={`${style.WhyChooseUs_item} ${themeStyle} ${theme ? '' : style.WhyChooseUs_grey}` }>
                        {item.src}
                        <p className={`${style.WhyChooseUs_title_item} ${themeStyle} ${theme ? '' : style.WhyChooseUs_grey}`}>{item.title}</p>
                        <p className={`${style.WhyChooseUs_text_item} ${themeStyle} ${theme ? '' : style.WhyChooseUs_grey}`}>{item.text}</p>

                    </li>
                ))}

            </ul>

        </div>
    )
}

export default WhyChooseUs