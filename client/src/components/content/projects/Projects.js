import style from './projects.module.css'
import projects from '../../../data/projects'
import Card from 'react-bootstrap/Card'
import { GoMarkGithub, GoBrowser } from "react-icons/go";

const Project = () => {
    const getProject = ({id, description, title, image, repoLink, liveLink}) => {
        return(
            <Card key={id} style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className={style.projectLinks}>
                        <a
                            className={style.projectLink}
                            href={repoLink}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <h1><GoMarkGithub /></h1>
                        </a>
                        <a
                            className={style.projectLink}
                            href={liveLink}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <h1><GoBrowser /></h1>
                        </a>
                    </div>
                </Card.Body>
            </Card>
        )
    }

    return(
        <div>
            <h1 className={style.title}>Projects</h1>
            <div className={style.cards}>
                {projects.map(project => getProject(project))}
            </div>
        </div>
    )
}

export default Project