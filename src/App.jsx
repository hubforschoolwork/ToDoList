import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/navbar';
import './App.css';
import Todo from './pages/todo.jsx';
import Contacts from './pages/contacts.jsx';
import Star from './components/star';



function App() {

  return (

    <Router>
      <div className="App">
        
        <Star className="star top-left" />
        <Star className="star top-right" />
        <Star className="star bottom-left" />
        <Star className="star bottom-right" />

            <MyNavbar />

             <div className="container-front">
       
              <Routes>

                <Route path="/" element={<Todo/>} />
      
                <Route path="/contacts" element={<Contacts/>} />

              </Routes>

            </div>
      </div>
    </Router>
 
  );
}

export default App;
