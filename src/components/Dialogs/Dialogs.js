import React from "react";
import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogs, messages}) => {

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

