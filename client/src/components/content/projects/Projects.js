import style from './projects.module.css'
import projects from '../../../data/projects'
import Project from './project/Project'

const Projects = () => {
    return(
        <div className={style.projects}>
            <h1 className={style.title}>Projects</h1>
            <div className={style.cards}>
            {projects.map(project => <Project key={project.id} {...project} />)}
            </div>
        </div>
    )
}

export default Projects