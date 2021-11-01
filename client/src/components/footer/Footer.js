import style from './footer.module.css'
import icons from '../../data/icons'

const Footer = () => {
    const getIcon = ({ picture, link }) => {
        return(
            <a href={link} target='_blank' className={style.icon}>{picture}</a>
        )
    }
    return(
        <div className='footer'>
            {icons.map(icon => getIcon(icon))}
        </div>
    )
}

export default Footer