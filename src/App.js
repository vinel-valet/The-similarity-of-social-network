import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Routes>
                <Route path="/Profile/*" element={<Profile store={props.store}/>}/>
                <Route path="/Dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                <Route path="/Users" element={<UsersContainer store={props.store}/>}/>
            </Routes>
        </div>
    );
}

export default App;
