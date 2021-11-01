import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import style from './navigation.module.css'

const Navigation = () => {
    return(
<Navbar className={style.navbar} expand="sm">
  <Container>
    <Link to="/">Peter Christiansen</Link>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="ms-auto">
        <Link to="/about" className={style.link}>About</Link>
        <Link to="/projects" className={style.link}>Projects</Link>
        <Link to="/contact" className={style.link}>Contact</Link>
        <Link to="/resume" className={style.link}>Resume</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation