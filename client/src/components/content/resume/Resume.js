import style from './resume.module.css'
import { BsDownload } from 'react-icons/bs'
import proficiencies from '../../../data/proficiencies'

const Resume = () => {
    const getIcon = ({ picture, title }) => {
        return(
            <div className={style.icon}>
                <h1 className={style.icon}>{ picture }</h1>
                <p>{ title }</p>
            </div>
        )

    }
    return(
        <div className={style.div}>
            <h1>Resume <a href='https://github.com/peterjinchristiansen' target='_blank' rel='noreferrer'><BsDownload /></a></h1>
            <h3 className={style.title}>Proficiencies</h3>
            <div className={style.container}>
                {proficiencies.map(icon => getIcon(icon))}
            </div>
        </div>
    )
}

export default Resume