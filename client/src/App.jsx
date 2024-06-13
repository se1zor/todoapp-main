import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ViewTasks from './components/ViewTasks';
import Login from './components/Login';
import AddTask from './components/AddTask';
import NavBar from './components/NavBar';


function App() { 
    return (
        <>
        <NavBar/>
        {sessionStorage.getItem("username")? sessionStorage.getItem("username"):"No user"}
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/tasks" element={<ViewTasks />} />
            <Route path="/AddTask" element={<AddTask/>}/>
        </Routes>
        </>
    );
}

export default App;