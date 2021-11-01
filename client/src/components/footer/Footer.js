import style from './footer.module.css'
import icons from '../../data/icons'

const Footer = () => {
    const getIcon = ({ id, picture, link }) => {
        return(
            <a key={id} href={link} rel='noreferrer' target='_blank' className={style.icon}>{picture}</a>
        )
    }
    return(
        <div className='footer'>
            {icons.map(icon => getIcon(icon))}
        </div>
    )
}

export default Footer