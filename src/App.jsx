import {HashRouter, Routes, Route} from 'react-router-dom'
import ToDo from './pages/todo'
import Contact from './pages/contacts'
import Nav from './components/navbar'
import './App.css'


function App() {


  return (
   
    <HashRouter>
          <header>
            <Nav>
            </Nav>
        </header>
      <Routes>
        <Route path='/' element={<ToDo/>}>To Do List</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
      </Routes>
    </HashRouter>
  );
}

export default App
