import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React from 'react';
import MyNavbar from './components/navbar';
import Todo from './components/Todo';
import Contacts from './components/Contacts'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <Router>
      <div className = "container primary">
        <div className="App">
          <MyNavbar />

          <Route path="/" exact component={Todo} />
          <Route path="/" exact component={Contacts} />

      
        </div>
      </div>
  </Router>  
  );
}

export default App
