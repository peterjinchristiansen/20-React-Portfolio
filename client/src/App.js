import Header from './components/header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/content/about/About'
import Footer from './components/footer/Footer'
import links from './data/links'

const App = () => {
    const getLink = ({ id, path, component }) => {
        return <Route key={id} path={path} component={component} />
    }
    return (
    <Router>
        <Header />
        <div className='content'>
            <Switch>
                <Route exact path='/' component={About} />
                {links.map(link => getLink(link))}
            </Switch>
        </div>
        <Footer />
    </Router>
    );
}

export default App