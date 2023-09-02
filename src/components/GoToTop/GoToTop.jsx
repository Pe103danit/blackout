import { GoToTopIcon} from '../assets/Icons'
import style from './GoToTop.module.scss'
import { useState, useEffect } from 'react'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible &&
        <button className={style.container} onClick={scrollToTop}>
          <GoToTopIcon/>
        </button>}
    </>
  )
}

export default GoToTop