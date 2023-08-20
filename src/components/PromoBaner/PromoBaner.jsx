import { useState } from 'react'
import style from './PromoBaner.module.scss'

const PromoBaner = () => {
  const [isBaner, setBaner] = useState(true)
  return (
    <>
      {isBaner && <div className={style.baner}>
        <h6 className={style.baner_title}>Enjoy Free shipping on Orders over $500 this Month!</h6>
        <span className={style.baner_cross} onClick={() => setBaner(false)}>&times;</span>
      </div>}
    </>
  )
}

export default PromoBaner