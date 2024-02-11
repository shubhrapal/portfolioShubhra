import React, { Component } from 'react'
import project from './project1.png';
import github from './github.png';
import project2 from './project2.png';
import project3 from './project 3.png';
import link from './link.jpg';

export default class Projects extends Component {
  render() {
    return (
        <div>
      <div>
        <h1 className='about'>Projects</h1>
      </div>
      <div className='project1'>
        <img className='project-picture' src={project} alt=''/>
        < a href='https://github.com/shubhrapal/Bookshelf'><img className='github' src={github} alt=''/></a>
        <a href='https://bookshelf-660d9.web.app'><img className='github' src={link} alt=''/></a>
      </div>
      <div>
      <img className='project-picture' src={project2} alt=''/>
      </div>
      <div>
      <img className='project-picture' src={project3} alt=''/>
      </div>
      </div>

    )
  }
}
