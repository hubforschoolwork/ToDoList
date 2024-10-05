import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/navbar';
import Todo from './pages/Todo';
import Contacts from './pages/Contacts';
import './App.css';



function App() {

  return (
    <Router>
      <div className="App">
            <MyNavbar />
            <Routes>
              <Route path="/" element={<Todo/>} />
              <Route path="/contacts" element={<Contacts/>} />
            </Routes>
      </div>
    </Router>  
  );
}

export default App;
