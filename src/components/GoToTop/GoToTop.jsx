import { GoToTopIcon } from '../assets/Icons'
import style from './GoToTop.module.scss'
import { useState } from 'react'

const GoToTop = () => {
  const [btnStatus, setBtnStatus] = useState(false)
  window.addEventListener('scroll', (e) => {
    console.log('scroll')
    console.log(window.scrollTop)
  })
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <>
    {btnStatus &&
    <button className={style.container}>
      <GoToTopIcon/>
    </button>}
    </>
  )
}

export default GoToTop