import Navigation from './navigation/Navigation'
import style from './header.module.css'

const Header = ({ setActive }) => {
  return (
      <div className='header'>
        <Navigation setActive={setActive} />
        <div className={style.hero}></div>
      </div>
  );
};

export default Header;