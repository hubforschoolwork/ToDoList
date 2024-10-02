import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import React from 'react';
import MyNavbar from './components/navbar';
import Todo from './pages/Todo';
import Contacts from './pages/Contacts';
import './App.css';




function App() {


  return (
    <Router>
      <div className = "container">
        <div className="App">
          <MyNavbar />
          <Switch>
          <Route path="/" exact component={Todo} />
          <Route path="/contacts" exact component={Contacts} />
          </Switch>
      
        </div>
      </div>
  </Router>  
  );
}

export default App
