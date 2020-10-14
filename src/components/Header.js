import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [click, setClick] = useState(false);
  const toggleMenu = () => setClick(!click);
  const closeMobileMenu=()=>setClick(false)
  return (
    <>
      <nav className="navbar"> 
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            QuizIt
            <FontAwesomeIcon icon={faBookOpen} id="logo-icon" />
          </NavLink>
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>    
          <ul  className={click ? 'nav-menu active': 'nav-menu'}>
              <li className='nav-item'>
                  <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>Home</NavLink>
              </li>
              <li className='nav-item'>
                  <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>About</NavLink>
              </li>
              <li className='nav-item'>
                  <NavLink to='/sign-up' className='nav-links' onClick={closeMobileMenu}>Sign up</NavLink>
              </li>
              <li className='nav-item'>
                  <NavLink to='/sign-in'className='nav-links' onClick={closeMobileMenu}>Sign in</NavLink>
              </li>  
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
