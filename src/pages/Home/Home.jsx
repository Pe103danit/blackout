import PictureCategories from '../../components/PictureCategories/PictureCategories'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'

const Home = (props) => {
  return (
    <>
      <PictureCategories lightTheme={props.lightTheme}/>
      <WhyChooseUs/>
    </>
  )
}

export default Home