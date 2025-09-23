import style from './Icon.module.css'

export default function Icon({ image, name }) {


    return (
        <div className={style.icon}>
            <img src={image} alt="digital-comics" />
            <span>{name}</span>
        </div>
    )
}