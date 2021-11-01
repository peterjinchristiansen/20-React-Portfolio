import About from '../components/content/about/About'
import Projects from '../components/content/projects/Projects'
import Contact from '../components/content/contact/Contact'
import Resume from '../components/content/resume/Resume'

const links = [
    {
        id: 1,
        path: '/about',
        component: About,
        title: 'About'
    },
    {
        id: 2,
        path: '/projects',
        component: Projects,
        title: 'Projects'
    },
    {
        id: 3,
        path: '/contact',
        component: Contact,
        title: 'Contact'
    },
    {
        id: 4,
        path: '/resume',
        component: Resume,
        title: 'Resume'
    }
]

export default links