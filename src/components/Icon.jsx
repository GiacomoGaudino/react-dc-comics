import style from './Icon.module.css'
export default function Icon({ image, name }) {


    return (
        <a className={style.icon} href=''>
            <img src={image} alt="digital-comics" />
            <span>{name}</span>
        </a>
    )
}