import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//components
import Header from './components/headerComponent/Header'
import Homepage from './components/pages/HomePage'
import AboutMe from './components/pages/AboutMe';
import MyExperience from './components/pages/MyExperience'
import Contact from './components/pages/Contact';
import Reviews from './components/pages/Reviews';
import WriteReview from './components/pages/WriteReview';

//includes
import './App.css'


export default class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="/myExperience" component={MyExperience} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/writeReview" component={WriteReview} />
          </Switch>
        </Router>
      </>
    );
  }
}
