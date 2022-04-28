import React from "react";
import './../Dialogs.css'
import {NavLink} from "react-router-dom";


const DialogItem = ({name, id}) => {
    return (
        <div className='dialog'>
            <NavLink className='dialogLink' to={'/Dialogs/' + id}> {name} </NavLink>
        </div>
    )
}

export default DialogItem;

