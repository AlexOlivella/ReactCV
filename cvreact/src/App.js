import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

//components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import WorkExperience from './components/pages/workExperience'
import Contact from './components/pages/contact';

//includes
import './Assets/css/default.min.css'

//functions
import * as commonFunctions from './common/functions/functions'


export default class App extends Component {

  componentDidUpdate(){
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/WorkExperience" component={WorkExperience} />
          <Route exact path="/Contact" component={Contact} />

          <Footer />
        </div>
      </Router>

    );
  }
}
