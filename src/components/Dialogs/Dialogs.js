import React from "react";
import './Dialogs.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className='dialogs'>
      <div className='dialog-items'>
        <div className='dialog'>
          <NavLink to='/dialogs/1'> Dima </NavLink>
        </div>
        <div className='dialog'>
          <NavLink to='/dialogs/2'>Igor</NavLink>
        </div>
        <div className='dialog'>
          <NavLink to='/dialogs/3'>Nikolay</NavLink>
        </div>
        <div className='dialog'>
          <NavLink to='/dialogs/4'>Viktor</NavLink>
        </div>
        <div className='dialog'>
          <NavLink to='/dialogs/5'>Ivan</NavLink>
        </div>
      </div>
      <div className='messages'>
        <div className="message">
          Hi
        </div>
        <div className="message">
          How is your
        </div>
        <div className="message">
          Yo
        </div>
      </div>
    </div>
  )
}

export default Dialogs;

