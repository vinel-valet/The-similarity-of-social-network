import React from "react";
import './Dialogs.css'
import {NavLink} from "react-router-dom";


const DialogItem = ({name, id}) => {
    return (
        <div className='dialog'>
            <NavLink className='dialogLink' to={'/Dialogs/' + id}> {name} </NavLink>
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

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Nikolay'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Ivan'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)


    return (
        <div className='dialogs'>
            <div className='dialog-items'>
                {dialogsElements}
            </div>
            <div className='messages'>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;

