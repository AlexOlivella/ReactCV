import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//components
import Header from './components/headerComponent/Header'
//import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/HomePage'
import WorkExperience from './components/pages/WorkExperience'
import Contact from './components/pages/Contact';

//includes
import './App.css'


export default class App extends Component {

  componentDidUpdate() {

  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/workExperience" component={WorkExperience} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </>
    );
  }
}
