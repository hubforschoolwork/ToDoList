import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/navbar';
import './App.css';
import Todo from './pages/todo.jsx';
import Contacts from './pages/contacts.jsx';


function App() {

  return (

    <Router>

      <div className="App">

        {/* <i className="fa-solid fa-star top-left"></i>
        <i className="fa-solid fa-anchor middle"></i>
        <i className="fa-solid fa-star top-right"></i> */}

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
