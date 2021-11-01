import Card from 'react-bootstrap/Card'
import { GoMarkGithub, GoBrowser } from "react-icons/go"
import style from './project.module.css'

const Project = ({ image, title, description, repoLink, liveLink }) => {
    return(
        <Card className={style.card}>
            <Card.Img
                variant="top"
                src={image}
                className={style.image}
            />
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

export default Project