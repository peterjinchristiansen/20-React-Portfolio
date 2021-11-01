import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/content/about/About';
import Projects from './components/content/projects/Projects';
import Contact from './components/content/contact/Contact';
import Resume from './components/content/resume/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;