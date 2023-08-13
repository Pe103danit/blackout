import PictureCategories from '../../components/PictureCategories/PictureCategories'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import WeAreHereToHelp from '../../components/WeAreHereToHelp/WeAreHereToHelp'

const Home = (props) => {
  return (
    <>
      <PictureCategories lightTheme={props.lightTheme}/>
      <WeAreHereToHelp lightTheme={props.lightTheme}/>
      <WhyChooseUs/>
    </>
  )
}

export default Home