import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SigninForm from './Home/Home';
import Bienvenue from './Bienvenue/Bienvenue';
ReactDOM.render(
  <Router>
    <SigninForm />
    

      
  </Router>,
  document.getElementById('root')
);