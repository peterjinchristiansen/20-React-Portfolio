import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import navLinks from '../../../data/navigation'
import style from './navigation.module.css'

const Navigation = () => {
    const [isHighlighted, setIsHighlighted] = useState(1)

    const checkActive = (id) => {
        if(id === isHighlighted) {
            return(style.isHighlighted='activeLink')
        }
    }

    const getLink = ({ id, name }) => {
        return <Nav.Link key={id}>{name}</Nav.Link>
    }

    return(
        <Navbar className={style.navCustom} expand='sm'>
            <Container>
            <Navbar.Brand href='#home'>Peter Christiansen</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                    {navLinks.map(navLink => getLink(navLink))}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation