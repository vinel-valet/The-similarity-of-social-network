import React from "react";
import './Dialogs.css'
import {NavLink} from "react-router-dom";


const DialogItem = ({name, id}) => {
  return (
      <div className='dialog'>
        <NavLink to={'/Dialogs/' + id}> {name} </NavLink>
      </div>
  )
}

const Message = ({message}) => {
  return (
      <div className="message">
        {message}
      </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className='dialogs'>
      <div className='dialog-items'>
        <DialogItem name="Dima" id="1"/>
        <DialogItem name="Igor" id="2"/>
        <DialogItem name="Nikolay" id="3"/>
        <DialogItem name="Viktor" id="4"/>
        <DialogItem name="Ivan" id="5"/>
      </div>
      <div className='messages'>
        <Message message="Hi"/>
        <Message message="How is your"/>
        <Message message="Yo"/>
      </div>
    </div>
  )
}

export default Dialogs;

