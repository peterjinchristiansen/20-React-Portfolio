import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import style from './navigation.module.css'
import links from '../../../data/links'

const Navigation = () => {
    const [active, setActive] = useState('About')
    const getLink = ({ id, path, title }) => {
        let isActive = false
        if(active === title) isActive = true
        return(
            <Link
                key={id}
                to={path}
                className={isActive ? style.active : style.inactive}
                onClick={() => setActive(title)}
            >
                {title}
            </Link>
        )
    }

    return(
        <Navbar className={style.navbar} expand="sm">
            <Container>
                <Link to="/">Peter Christiansen</Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        {links.map(link => getLink(link))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation