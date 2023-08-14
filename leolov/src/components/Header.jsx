import style from '../styles/header.module.scss'
import HeaderImg from  '../assets/images/header.jpg'

export function Header(){
    return (
        <header>
            <h1 className={style.leolov}>Leo<span>-Lov</span></h1>
            <p className={style.title}>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
            <img className={style.Headerimg} src={HeaderImg} alt="header" />

        </header>
    )
}