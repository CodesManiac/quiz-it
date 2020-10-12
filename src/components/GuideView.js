import React from "react";
import { NavLink } from 'react-router-dom'
import '../styles/GuideView.css'
import card1 from '../assets/kids.jpg'
import card2 from '../assets/cards.jpg'
import card3 from '../assets/motherandchild.jpg'
import card4 from '../assets/lady.jpg'

function GuideView() {
  return (
    // <div className="view-container">
    //   <div className="child">1</div>
    //   <div className="child">2</div>
    //   <div className="child">3</div>
    //   <div className="child">3</div>
    // </div>
     <div className='view-container'>
       {/* <h1>How It Works</h1> */}
      <div className="child">
        <img src={card1} className='card-image' alt='Kids'/>
        <h2>Wanna Ace that exam, or wanna just have fun?</h2>
      <p>No need to worry, we're here to help</p></div>
      <div className="child">
        <img src={card2} className='card-image' alt='Cards'/>  
        <h2>Select a Category</h2><p>Select any category of your choice.We have lots of them for you</p>
      </div>
      <div className="child">
        <img src={card3} className='card-image' alt='Mother and Child'/>
        <h2>Select the Number of Questions</h2><p>You can generate as much as 10 questions at a time</p></div>
      <div className="child">
        <img src={card4} className='card-image' alt='Lady'/>
        <h2>What are you waiting for?</h2>
      <button className="get-started"><NavLink to='/quiz' className='start'>Start Learning</NavLink></button>

      </div>
    </div>
    
  );
}

export default GuideView;
