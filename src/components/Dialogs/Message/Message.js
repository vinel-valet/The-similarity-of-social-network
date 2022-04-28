import React from "react";
import './../Dialogs.css'



const Message = ({message}) => {
    return (
        <div className="message">
            {message}
        </div>
    )
}


export default Message;

