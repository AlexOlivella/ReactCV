import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//components
import Header from './components/headerComponent/header'
//import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
// import WorkExperience from './components/pages/workExperience'
// import Contact from './components/pages/contact';

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
            {/* <Route exact path="/WorkExperience" component={WorkExperience} />
            <Route exact path="/Contact" component={Contact} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}
