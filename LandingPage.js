import React, { Component } from 'react'
import giphy from './giphy.gif';

export default class LandingPage extends Component {
  render() {
    return (
      <div className='intro'>
        <h1 className='name'>Hi, I am Shubhra Pal <br/> A Front-end Developer</h1>
         
         <img className='giphy' src={giphy} alt=''/>
      </div>
    )
  }
}
