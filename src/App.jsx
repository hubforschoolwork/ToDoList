import {HashRouter, Routes, Route} from 'react-router-dom'
import ToDo from './pages/todo'
import Contact from './pages/contacts'
import React from 'react';
import MyNavbar from './components/Navbar';
import './App.css'


function App() {


  return (

    <div className="App">
      <MyNavbar />
      {/* Other components */}
    </div>
  );
}

export default App
