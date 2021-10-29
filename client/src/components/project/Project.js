import style from './project.module.css'
import projects from '../../data/projects'
import myImage from '../../images/dog2.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { GoMarkGithub, GoBrowser } from "react-icons/go";
const Project = () => {
    const getProject = ({description, title, image, repoLink, liveLink}) => {
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className={style.projectLinks}>
                        <a href={repoLink}><h1><GoMarkGithub /></h1></a>
                        <a href={liveLink}><h1><GoBrowser /></h1></a>
                    </div>
                </Card.Body>
            </Card>
        )
    }

    return(
        <div>
            <h1>Projects</h1>
            {projects.map(project => getProject(project))}
        </div>
    )
}

export default Project