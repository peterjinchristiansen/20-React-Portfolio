import { Switch, Route, Router } from 'react-router-dom'

import AboutMe from './about me/AboutMe'
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import Resume from './resume/Resume'

const Content = ({ page }) => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={AboutMe} />
                <Route path='/about' component={AboutMe} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
                <Route path='/resume' component={Resume} />
            </Switch>
        </Router>

    )
}

export default Content