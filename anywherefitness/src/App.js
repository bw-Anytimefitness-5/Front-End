import React,{useState}from 'react';
import { Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/forms/SignUpForm'
import NavBar from './components/NavBar'
import LoginForm from './components/forms/LoginForm'
import {ClassesContext} from './components/contexts/ClassesContext'
// import history from './components/history'
import ProtectedRoute from './components/ProtectedRoute'
import IdHandler from './components/IdHandler'
function App() {
  const [classes, setClasses] = useState([])
  const [user,setUser] =useState()
  return (
    <ClassesContext.Provider value={classes} >
    <div className="App">
      
      <Router >
        <NavBar />
      <Route path="/login"  component={LoginForm} />
      <Route  exact path="/" component={SignUpForm}/>
      <ProtectedRoute exact path="/protected" component={IdHandler} />
    </Router>
    </div>
    </ClassesContext.Provider>
  );
}

export default App;
