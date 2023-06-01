import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SigninForm from './Home/Home';
import Bienvenue from './Bienvenue/Bienvenue';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path="/about" element={<Bienvenue />} />
          <Route path="/" element={<SigninForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;