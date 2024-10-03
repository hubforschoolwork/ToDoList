import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/navbar';
import Todo from './pages/Todo';
import Contacts from './pages/Contacts';
import './App.css';


function App() {

  return (
    <Router>
      <div className = "container-front">
        <div className="App">
          <MyNavbar />
          <Routes>
          <Route path="/" exact component={Todo} />
          <Route path="/contacts" exact component={Contacts} />
          </Routes>
      
        </div>
      </div>
  </Router>  
  );
}

export default App
