import React from "react";
import './Nav.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='itemNav'>
        <NavLink to='/Profile' > Profile </NavLink>
      </div>
      <div className='itemNav'>
        <NavLink to='/Dialogs' > Messages </NavLink>
      </div>
      <div className='itemNav'>
        <a> News </a>
      </div>
      <div className='itemNav'>
        <a> Music </a>
      </div>
      <div className='itemNav'>
        <a> Settings </a>
      </div>
    </nav>
  );
}

export default Nav;