import React, { Component } from 'react'
import './App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Tech from './Tech';
import Projects from './Projects';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <LandingPage/>
        <AboutMe/>
        <Tech/>
        <Projects/>
      </div>
    )
  }
}


