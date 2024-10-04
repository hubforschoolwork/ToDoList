import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/navbar';
import Todo from './pages/Todo';
import Contacts from './pages/Contacts';
import './App.css';
import BackgroundImageComponent from './components/BackgroundImageComponent';


function App() {

  return (
    <Router>
      <div style={{ position: 'relative', height: '100vh' }}>
        <BackgroundImageComponent />
        <div className="container-front" style={{ position: 'relative', zIndex: 1 }}>            
          <div className="App">
            <MyNavbar />
            <Routes>
              <Route path="/" element={<Todo/>} />
              <Route path="/contacts" element={<Contacts/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>  
  );
}

export default App;
