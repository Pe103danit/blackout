import style from './Spinner.module.scss'
const Spinner = () => {
    return (<div className={style.spinner}>
        <div className={style.ldsRing}><div></div><div></div><div></div><div></div></div>
        <h3>Loading ...</h3>
        </div>
    )
}
export default Spinner
