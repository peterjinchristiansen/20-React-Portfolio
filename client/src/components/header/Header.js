import Navigation from './navigation/Navigation'
import style from './header.module.css'

const Header = () => {
    return(
        <div>
            <Navigation />
            <div className={style.hero}></div>
        </div>
    )
}

export default Header