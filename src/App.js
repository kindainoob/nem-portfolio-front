import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Pages/login'
import Events from './Pages/events'
import Event from './Pages/event'
import Ragistration from './Pages/registration'
import NavBar from './Components/NavBar'
import './App.css';


function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
