import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SigninForm from './Home/Home';

ReactDOM.render(
  <Router>
    <SigninForm />
      
  </Router>,
  document.getElementById('root')
);
