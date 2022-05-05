import React from "react";
import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = ({dialogsPage, dispatch}) => {

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        if (newMessageBody){
            dispatch(sendMessageCreator())
        }
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value
        dispatch(updateNewMessageBodyCreator(body))
    };

    return (
        <div className='dialogs'>
            <div className='dialog-items'>
                {dialogsElements}
            </div>
            <div className='messages'>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='penis'/>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

