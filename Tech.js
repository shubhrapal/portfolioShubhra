import React, { Component } from 'react';
import html from './html.webp';
import css from './css.png';
import js from './js.png';
import react from './react.png';

export default class Tech extends Component {
  render() {
    return (
        <div>
      <div>
        <h1 className='about'>Tech I know</h1>
      </div>
      <div className='languages'>
      <img className='html' src={html} alt=''/>
      <img  className='css' src={css} alt=''/>
      <img className='js' src={js} alt=''/>
      <img className='react' src={react} alt=''/>
      </div>
      </div>
    )
  }
}
