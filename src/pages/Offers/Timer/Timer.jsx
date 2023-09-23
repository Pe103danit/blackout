import React, { useState, useEffect } from 'react'
import style from './Timer.module.scss'

const Timer = () => {
  const initialTime = 1100000
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1)
    }, 1000);

    return () => clearInterval(timer)
  }, []);

  const days = Math.floor(time / (24 * 60 * 60))
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((time % (60 * 60)) / 60)
  const seconds = time % 60;

  return (
    <div className={style.container}>
      <div className={style.container_c1}>
        <p>{days}</p>
        <p>days</p>
      </div>
      <div className={style.container_c1}>
        <p>{hours}</p>
        <p>hours</p>
      </div>
      <div className={style.container_c1}>
        <p>{minutes}</p>
        <p>minutes</p>
      </div>
      <div className={style.container_c1}>
        <p>{seconds}</p>
        <p>seconds</p>
      </div>
    </div>
  );
}

export default Timer