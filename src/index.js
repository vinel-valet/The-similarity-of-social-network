import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

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

let posts = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: "It's my first post"}
];

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs}
                 messages={messages}
                 posts={posts}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


