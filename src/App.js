import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

function App({state, dispatch}) {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/Profile/*" element={<Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
        <Route path="/Dialogs/*" element={<Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch}/>}/>
      </Routes>
    </div>
  );
}

export default App;
