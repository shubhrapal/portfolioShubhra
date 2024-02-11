import React, { Component } from 'react'
import profile from './profile.jpg';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <h1 className='about'>About Me</h1>
        <img className='profile' src={profile} alt=''/>
        <p>I'm Shubhra Pal, a passionate frontend developer with a knack for crafting engaging and intuitive user experiences. With a blend of creativity and technical proficiency, I bring ideas to life through code.With a Certification of completion of a Full stack developer course from UpGrad institute.</p>
      </div>
    )
  }
}
