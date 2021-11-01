import style from './aboutme.module.css'
import { BsFillPersonFill } from 'react-icons/bs'

const About = () => {
    return(
        <div className={style.div}>
            <h1>About Me</h1>
            <div className={style.container}>
                <div className={style.iconContainer}>
                    <h1 className={style.icon}><BsFillPersonFill /></h1>
                </div>
                <p className={style.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laudantium fuga dolorem ratione libero id dignissimos, dolore, numquam amet labore tempora esse tenetur quam mollitia aliquid! Possimus autem voluptatem amet, ducimus praesentium vero pariatur debitis labore cum perspiciatis vel perferendis illo numquam laudantium aspernatur maiores assumenda in provident. Quam dolor quas vero ea ipsum deleniti mollitia nemo maxime excepturi deserunt.</p>
            </div>
        </div>

    )
}

export default About