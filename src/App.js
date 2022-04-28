import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

function App({messages, dialogs, posts}) {

  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/Profile/*" element={<Profile posts={posts}/>}/>
        <Route path="/Dialogs/*" element={<Dialogs messages={messages} dialogs={dialogs}/>}/>
      </Routes>
    </div>
  );
}

export default App;
