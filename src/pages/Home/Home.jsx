import PictureCategories from '../../components/PictureCategories/PictureCategories'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import WeAreHereToHelp from '../../components/WeAreHereToHelp/WeAreHereToHelp'
import style from './Home.module.scss'

const Home = (props) => {
  return (
    <>
      <div className={style.pictureCategories}>
        <PictureCategories lightTheme={props.lightTheme}/>
      </div>
      <WeAreHereToHelp lightTheme={props.lightTheme}/>
      <WhyChooseUs/>
    </>
  )
}

export default Home