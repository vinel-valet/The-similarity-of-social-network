import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";

const DialogsContainer = () => {

    let state = useSelector((state) => state.dialogsPage);
    let dispatch = useDispatch();

    let onSendMessageClick = () => dispatch(sendMessageCreator());
    let onNewMessageChange = (body) => dispatch(updateNewMessageBodyCreator(body));

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
        />
    )
}

export default DialogsContainer;