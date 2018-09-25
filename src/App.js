import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Signup from '.components/Signup/Signup';
import Login from '.components/login/login';


class App extends Component {
  render() {
    return (
     <div>
       <Router>
            <main>
              <Route exec path='/' component ={Login}/>
              <Route exec path='/signup' component ={Signup}/>
            </main>
       </Router>
     </div>
    );
  }
}

export default App;
