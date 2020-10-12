import React from "react";
import { NavLink } from 'react-router-dom'
import '../styles/AlternateDisplay.css'
import card1 from '../assets/f.jpg'
import card2 from '../assets/julia.jpg'
import card3 from '../assets/class.jpg'

function AlternateDisplay() {
  return (
     <div className='alternate-view-container'>
        
      <div className="alternate-child">
        <img src={card1} className='card-image'/>
        <h2>You should never stop learning</h2>
    </div>
      <div className="alternate-child">
        <img src={card2} className='card-image'/>
        <h2>Learning should be fun, don't you think?</h2>
      </div>
      <div className="alternate-child">
        <img src={card3} className='card-image'/>
        <h2>Wanna Stand Out? Practice</h2></div>
      <div className="alternate-child" id='last-card'>
        <h2>Having Fun?</h2>
        <p>Let us know how QuizIt has been of help</p>
       
      <button className="send-feedback"><NavLink to='/quiz' className='send'>Send Feedback</NavLink></button>

      </div>
    </div>
    
  );
}

export default AlternateDisplay;
