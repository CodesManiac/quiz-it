import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <h3>Company</h3>
          <NavLink to='/' className='footer-link'><p className='each-link'>Blog</p></NavLink>
          <NavLink to='/' className='footer-link'><p className='each-link'>Help Center</p></NavLink>
          <NavLink to='/' className='footer-link'><p className='each-link'>Contact Us</p></NavLink>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h3> Legal</h3>
          <NavLink to='/' className='footer-link'><p className='each-link'>Terms of Use</p></NavLink>
          <NavLink to='/' className='footer-link'><p className='each-link'>Privacy Policy</p></NavLink>
          <NavLink to='/' className='footer-link'><p className='each-link'>Cookie Policy</p></NavLink>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h3>Company</h3>
          <NavLink to='/' className='footer-link'><p className='each-link'>Cookie Policy</p></NavLink>
          <NavLink to='/' className='footer-link'><p className='each-link'>Help Center</p></NavLink>
          <NavLink to='/' className='footer-link'><p className='each-link'>Contact</p></NavLink>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h3>Social</h3>
          <NavLink to='/' className='footer-link'><p className='each-link'>Facebook</p></NavLink>
          <NavLink to='/' className='footer-link'><p className='each-link'>Twitter</p></NavLink>
          <NavLink to='/' className='footer-link'><p className='each-link'>Youtube</p></NavLink>
        </div>
      </div>
    </div>
  );
}
export default Footer;
